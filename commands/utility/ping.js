module.exports = {
    name: "ping",
    aliases: ['p'],
    description: "Affiche la latence actuelle.",
    run: async (message, args, command, client) => {
      try {
        await message.delete();
  
        const pingMessage = await message.channel.send("Calcul du ping . . .");
  
        const latency = pingMessage.createdTimestamp - message.createdTimestamp;
        const apiLatency = Math.round(client.ws.ping);
        
        await pingMessage.edit(`Ton ping est de ${latency}ms\nLe ping du $B est de ${apiLatency}ms`);
  
        setTimeout(() => {
          pingMessage.delete().catch((err) => console.error('Échec de la suppression du message:', err));
        }, 10000);
      } catch (error) {
        console.error('Erreur lors de l\'exécution de la commande ping:', error);
        message.channel.send("Erreur");
      }
    },
};