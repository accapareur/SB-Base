const fs = require("fs");
const path = require("path");

module.exports = (client) => {

    client.commands = new Map();
    client.aliases = new Map();

    const commandsPath = path.join(__dirname, "../commands");

    function loadCommands(dir) {

        const files = fs.readdirSync(dir);

        for (const file of files) {

            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                loadCommands(filePath);
                continue;
            }

            if (!file.endsWith(".js")) continue;

            const command = require(filePath);

            client.commands.set(command.name, command);

            if (command.aliases && Array.isArray(command.aliases)) {
                command.aliases.forEach(alias => {
                    client.aliases.set(alias, command.name);
                });
            }

            console.log(`[CMD] ${command.name} chargée`);
        }
    }

    loadCommands(commandsPath);

};