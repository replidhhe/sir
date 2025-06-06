module.exports.config = {
  name: "ayakawife",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Teri",
  description: "Random ảnh ayaka",
  commandCategory: "Random-img",
  usages: "ayakawife",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
             “https://imgur.com/a/1oByXzN”,
             “https://imgur.com/a/OTh2G1c”,
             “https://imgur.com/a/EXTWHVI”,
             “https://imgur.com/a/YjA7FIs”,
    ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Bạn cần 100 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`𝗔̉𝗻𝗵 𝗔𝘆𝗮𝗸𝗮 𝗡𝗲̀ 💞 ${link.length}\n-100 đô !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };


