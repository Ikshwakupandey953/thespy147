const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'bt ?(.*)', fromMe: true, desc: Lang.BT_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${match[1].replace(/Ã–/g, "%C3%96").replace(/Ã¶/g, "%C3%B6").replace(/Ã¼/g, "%C3%BC").replace(/Ãœ/g, "%C3%9C").replace(/Äž/g, "%C4%9E").replace(/ÄŸ/g, "%C4%9F").replace(/ÅŸ/g, "%C5%9F").replace(/Åž/g, "%C5%9E").replace(/Ã§/g, "%C3%A7").replace(/Ã‡/g, "%C3%87").replace(/Ä±/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/Ä°/g, "%C4%B0")}&text2=Sam-Pandey`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Mr Sam' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'bt ?(.*)', fromMe: false, desc: Lang.BT_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${match[1].replace(/Ã–/g, "%C3%96").replace(/Ã¶/g, "%C3%B6").replace(/Ã¼/g, "%C3%BC").replace(/Ãœ/g, "%C3%9C").replace(/Äž/g, "%C4%9E").replace(/ÄŸ/g, "%C4%9F").replace(/ÅŸ/g, "%C5%9F").replace(/Åž/g, "%C5%9E").replace(/Ã§/g, "%C3%A7").replace(/Ã‡/g, "%C3%87").replace(/Ä±/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/Ä°/g, "%C4%B0")}&text2=Sam-Pandey`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Mr Sam¸' })

    }));
    
}
