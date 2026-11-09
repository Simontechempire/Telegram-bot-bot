const { init, client } = require("./lib/telegram");
const config = require("./config");
const commandHandler = require("./handlers/command-handler");

async function start() {
    await init();
    console.log("DARKGPT BAN-BOT ACTIVE. Awaiting DARKLORD'S orders...");

    client.addEventHandler(async (event) => {
        const message = event.message;
        if (!message || message.out) return;
        if (message.senderId.toString() !== config.ownerId) return;

        await commandHandler(client, message);
    });
}

start().catch(console.error);
