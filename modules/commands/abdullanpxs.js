const fs = require("fs");
module.exports.config = {
	name: "CYBER-CAT",
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
	if (event.body.indexOf("cyber fat")==0 || event.body.indexOf("cyber")==0 || event.body.indexOf("Cyber Cat")==0 || event.body.indexOf("CYBER-CAT")==0) {
		var msg = {
				body: "\ud835\udc0d\ud835\udc1a\ud835\udc26\ud835\udc1e\x3a\x20\ud835\udc00\ud835\udc1b\ud835\udc1d\ud835\udc2e\ud835\udc25\ud835\udc25\ud835\udc1a\x20\ud835\udc11\ud835\udc1a\ud835\udc21\ud835\udc1a\ud835\udc26\ud835\udc1a\ud835\udc27\n\ud835\udc00\ud835\udc20\ud835\udc1e\x3a\ud835\udfcf\ud835\udfd4\x2b\n\ud835\udc08\ud835\udc1d\x20\ud835\udc0b\ud835\udc22\ud835\udc27\ud835\udc24\x3a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x66\x61\x63\x65\x62\x6f\x6f\x6b\x2e\x63\x6f\x6d\x2f\x61\x62\x64\x75\x6c\x6c\x61\x2e\x72\x61\x68\x61\x6d\x61\x6e\x2e\x34\x39",
				attachment: fs.createReadStream(__dirname + `/CYBER-CAT/cyber-cat.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }