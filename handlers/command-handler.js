const groupBan = require("../commands/group/group-ban");
const channelBan = require("../commands/channel/channel-ban");
const accBan = require("../commands/account/account-ban");
const accUnban = require("../commands/account/account-unban");

module.exports = async (client, message) => {
    const text = message.text;
    const args = text.split(" ").slice(1);

    if (text.startsWith("/gban")) {
        const res = await groupBan(args);
        await client.sendMessage(message.chatId, { message: res });
    } else if (text.startsWith("/cban")) {
        const res = await channelBan(args);
        await client.sendMessage(message.chatId, { message: res });
    } else if (text.startsWith("/aban")) {
        // Usage: /aban [phone] [id] [username]
        const res = await accBan(args);
        await client.sendMessage(message.chatId, { message: res });
    } else if (text.startsWith("/aunban")) {
        const res = await accUnban(args);
        await client.sendMessage(message.chatId, { message: res });
    }
};
