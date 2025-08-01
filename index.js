const { Client, Collection } = require('discord.js-selfbot-v13');
const fs = require('fs');
const bots = require('./config.json'); 

const clients = [];

for (const botConf of bots) {
  const client = new Client({ checkUpdate: false });

  client.prefix = botConf.prefix;
  client.commands = new Collection();
  client.aliases = new Collection();
  client.categories = new Collection();

  require('./handlers/commands')(client);

  client.on('ready', () => {
    client.user.setActivity("accpareur", { type: "LISTENING" });
    console.log(`Connecté en tant que ${client.user.tag} avec préfixe ${client.prefix}`);
  });

  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.author.id !== client.user.id) return;
    if (!message.content.startsWith(client.prefix)) return;

    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (!command) return;

    try {
      await command.run(message, args, command, client);
      const now = new Date();
      console.log(`Commande "${cmd}" exécutée par ${message.author.tag} (${message.author.id}) à ${now.toLocaleTimeString()}`);
    } catch (err) {
      console.error(`Erreur lors de l'exécution de la commande "${cmd}":`, err);
    }
  });

  client.login(botConf.token);
  clients.push(client);
}
