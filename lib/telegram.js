const { TelegramClient, Api } = require("gramjs");
const { StringSession } = require("gramjs/sessions");
const config = require("../config");

const client = new TelegramClient(new StringSession(""), config.apiId, config.apiHash, { connectionRetries: 5 });

async function init() {
    await client.start({ botToken: config.botToken });
}

module.exports = { client, Api, init };
