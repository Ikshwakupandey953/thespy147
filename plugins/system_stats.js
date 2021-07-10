const Asena = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'jarvis' , fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

    
    if (Config.ALIVEMSG == 'default') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/wp2664416-tony-stark-wallpaper-hd.jpg"),
            MessageType.image, 
            { mimetype: Mimetype.image, caption: "*●▬▬▬ Owner Edition ▬▬▬●*\n*Hii,I'm Jarvis.*\n```I do many cool tasks for my owner 24 hours and 7 days in week```\n*Jarvis works for Sam Pandey*\n```All things are working Perfectly```\n*web:* ```Sampandey.tk```\n*Grade:* ```Developer```\n*Branch:* ```Owner Edition```\n*Working on:* ```TheCyberbyte.tech```\n*My Favorite Work:*```Coding```\n\n*Powered by Mr Sam*" }
        )
    }
    else if (Config.ALIVEMSG == 'hosgeldin') {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/welcome.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.mpeg, caption: "```Welcome```\n\n*Rules:* ```Don't be disrespectful, my friend```\n*Bot Dev:* ```Sam Pandey```" }
        )
    }
    else if (Config.ALIVEMSG == 'xtr') {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/ezgif-7-0bd4f49fd28c.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.mpeg, caption: "```This heart beats to you all 🖤```" }
        )
    }

    else if (Config.ALIVEMSG == 'sayex') {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/4_5935988232951957622.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.gif, caption: "```Sam Pandey Works For TheCyberbyte!" }
        )
    }
    else {
        await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by Sam Pandey*', MessageType.text);
    }
}));

Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));
