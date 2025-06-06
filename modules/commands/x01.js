const fs = require("fs");
module.exports.config = {
	name: "abdullaxemon",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "\x41\x62\x64\x75\x6c\x6c\x61", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "vai",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("EMon Bhai")==0 || event.body.indexOf("emon")==0 || event.body.indexOf("Emon")==0 || event.body.indexOf("Emon Hawladar")==0) {
		var msg = {
				body: "\ud835\udc0d\ud835\udc1a\ud835\udc26\ud835\udc1e\x3a\x20\ud835\udc04\ud835\udc0c\ud835\udc28\ud835\udc27\x2d\ud835\udc01\ud835\udc07\ud835\udc1a\ud835\udc22\n\ud835\udc00\ud835\udc20\ud835\udc1e\x3a\x20\ud835\udfd0\ud835\udfce\x2b\n\ud835\udc08\ud835\udc1d\x20\ud835\udc0b\ud835\udc22\ud835\udc27\ud835\udc24\x3a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x66\x61\x63\x65\x62\x6f\x6f\x6b\x2e\x63\x6f\x6d\x2f\x45\x4d\x6f\x6e\x2e\x42\x48\x61\x69\x2e\x49\x44",
				attachment: fs.createReadStream(__dirname + `/CYBER-CAT/emon.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }