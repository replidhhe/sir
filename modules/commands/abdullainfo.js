module.exports.config = {
	name: "ABDULLA",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/P5xKS0V8/Picsart-23-02-03-09-08-38-563.jpg",
            "https://i.postimg.cc/XYmKQqyT/IMG-20230208-155729-348.jpg",
            "https://i.postimg.cc/cCFwYLSk/IMG-20230208-155744-571.jpg",
            "https://i.postimg.cc/XYmKQqyT/IMG-20230208-155729-348.jpg",
            
"https://i.postimg.cc/P5xKS0V8/Picsart-23-02-03-09-08-38-563.jpg"];var callback = () => api.sendMessage({body:`🥰আসালামু আলাইকুম ❤️

❣️❤️ENJOY MUCH MUCH ❤️❣️

❌THis Bot Made By : ABDULLA RAHAMAN ❤️❣️

🔰THIS IS BANGLA AI BOT 🔰

BOT NAME : ${global.config.BOTNAME}

💖TAKE LOVE FROM CYBER CAT 💖

🌺ব্যবহারে মানুষ চেনা যায় ✔️

⚠️BOT: ADMIN: ABDULLA RAHAMAN ⚠️

⚠️BOT:MAIN ADMIN: ABDULLA RAHAMAN⚠️

⚠️WHATSAPP: 01864600368⚠️

⛔FACEBOOK : https://www.facebook.com/abdulla.rahaman.49

🕌💪 POWER OF MUSLIM 🕋🕌


BOT PREFIX : ${global.config.PREFIX}

➡️YOUTUB ➡️ N/A

➡️FACEBOOK PAGE➡️:N/A

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };