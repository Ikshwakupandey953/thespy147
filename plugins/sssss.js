const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");

const Language = require('../language');
const Lang = Language.getString('webss');

function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}
var base64str = base64_encode('/root/WhatsAsenaDuplicated/media/68747470733a2f2f692e68697a6c69726573696d2e636f6d2f6d6d314e42732e6a7067_copy_160x160.jpeg');

Asena.addCommand({pattern: 'sss?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.LİNK);

    var webimage = await axios.get(`https://v1.nocodeapi.com/phaticusthiccy/screenshot?api_key=0llMsPHyvsD2EalC2GEKgfsqt10MFqMP&url=${match[1]}&full_page=true`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {thumbnail: base64str, mimetype: Mimetype.jpg, caption: 'Made for Founder'})

}));
