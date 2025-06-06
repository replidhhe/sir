const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "info",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Rahad", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Dinajpur/Birampur").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞      : 𝐑 𝐚 𝐡 𝐚 𝐝  ッ
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐒𝐢𝐧𝐠𝐥𝐞 
┃ 🎂 𝐀𝐠𝐞       : 𝟏𝟕 🤓
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐋𝐚𝐝𝐲 𝐤𝐢𝐥𝐥𝐞𝐫
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐃𝐢𝐧𝐚𝐣𝐩𝐮𝐫,𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 𝐁𝐨𝐭 𝐜𝐫𝐞𝐚𝐭𝐨𝐫: 💤📿𝐑𝐚𝐡𝐚𝐝📿💤
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/share/1AqMNYndBv/
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));

    return request(encodeURI(`https://drive.google.com/file/d/14_GdhlffMibQYGv7cPZcbRcpf9dA5m1m/view?usp=drivesdk`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
