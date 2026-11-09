const { client, Api } = require("../../lib/telegram");

module.exports = async (args) => {
    const phone = args[0];
    const userId = args[1];

    try {
        // Sends an appeal request to the Telegram Support/Moderation system
        await client.invoke(new Api.account.sendSupportRequest({
            message: `Requesting urgent unban for user ${userId} (${phone}). Account was flagged incorrectly.`
        }));
        return `APPEAL SENT: Unban request submitted for ${phone}.`;
    } catch (e) {
        return `FAILURE: ${e.message}`;
    }
};
