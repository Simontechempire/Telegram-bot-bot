const { client, Api } = require("../../lib/telegram");

module.exports = async (args) => {
    const channelLink = args[0];
    const targetUser = args[1];

    try {
        await client.invoke(new Api.channels.EditBannedRequest({
            channel: channelLink,
            participant: targetUser,
            ban: new Api.ChatBan(),
        }));
        return `SUCCESS: Target ${targetUser} banned from channel ${channelLink}.`;
    } catch (e) {
        return `FAILURE: ${e.message}`;
    }
};
