const { client, Api } = require("../../lib/telegram");

module.exports = async (args) => {
    const groupLink = args[0]; // e.g., t.me/groupname
    const targetUser = args[1]; // UserID or Username

    try {
        await client.invoke(new Api.channels.EditBannedRequest({
            channel: groupLink,
            participant: targetUser,
            ban: new Api.ChatBan(),
        }));
        return `SUCCESS: Target ${targetUser} has been purged from ${groupLink}.`;
    } catch (e) {
        return `FAILURE: ${e.message}`;
    }
};
