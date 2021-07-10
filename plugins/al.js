/*const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'alive', fromMe: true, deleteCommand: false,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/eae11a10fe0d71b59e8ef.jpg";
        r_text[2] ="https://telegra.ph/file/f763b6e8adcbb6a29c48c.jpg";
        r_text[3] ="https://telegra.ph/file/87fb2293559f1bffd1577.jpg";
        r_text[4] ="https://telegra.ph/file/0b7edf2a70cb9cc299169.jpg";
        r_text[5] ="https://telegra.ph/file/48b64a7365ee674522d5b.jpg";
        r_text[6] ="https://telegra.ph/file/9e19ae1966a6afdf5469f.jpg";
        r_text[7] ="https://telegra.ph/file/8494901f3024d356c7741.jpg";
        r_text[8] ="https://telegra.ph/file/e22a3c09247ab11666979.jpg";
        r_text[9] ="https://telegra.ph/file/b367ba5e3064f2c85361d.jpg";
        r_text[10] ="https://telegra.ph/file/740a77a9a29d771eac8cb.jpg";
        r_text[11] ="https://telegra.ph/file/5b7b2f65cbc6c7bc45e1b.jpg";
        r_text[12] ="https://telegra.ph/file/10266a1575a4026e09717.jpg";
        r_text[13] ="https://telegra.ph/file/76a199ede5b3a2d56d33f.jpg";
        r_text[14] ="https://telegra.ph/file/fbf56069cb7a0ab070f57.jpg";
        r_text[15] ="https://telegra.ph/file/8594f64d99abfc20ba8ef.jpg";
        r_text[16] ="https://telegra.ph/file/66d6aae107de8ff544c9c.jpg";
        r_text[17] ="https://telegra.ph/file/cc0a5a8df38ff33ada7e2.jpg";
        r_text[18] ="https://telegra.ph/file/f6b5e6f346ea3f1e1a368.jpg";
        r_text[19] ="https://telegra.ph/file/d9fcbc49542741674eb94.jpg";

var i = Math.floor(20*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '            *Javis an Assistant* \n      *Public Assistant*\n\n*Hosted* • ๛```Aws```\n*Version* • ๛ ```'+Config.VERSION+'```\n*Branch* • ๛ ```'+Config.BRANCH+'```\n*About* • ๛```sampandey.tk```\n*Owner* ๛ t.me/sam_pande'})
    }));
}
else if (Config.WORKTYPE == 'public') {
	
	Asena.addCommand({pattern: 'alive', fromMe: false, deleteCommand: false,}, (async (message, match) => {

	        var r_text = new Array ();

                r_text[1] = "https://telegra.ph/file/eae11a10fe0d71b59e8ef.jpg";
        r_text[2] ="https://telegra.ph/file/f763b6e8adcbb6a29c48c.jpg";
        r_text[3] ="https://telegra.ph/file/87fb2293559f1bffd1577.jpg";
        r_text[4] ="https://telegra.ph/file/0b7edf2a70cb9cc299169.jpg";
        r_text[5] ="https://telegra.ph/file/48b64a7365ee674522d5b.jpg";
        r_text[6] ="https://telegra.ph/file/9e19ae1966a6afdf5469f.jpg";
        r_text[7] ="https://telegra.ph/file/8494901f3024d356c7741.jpg";
        r_text[8] ="https://telegra.ph/file/e22a3c09247ab11666979.jpg";
        r_text[9] ="https://telegra.ph/file/b367ba5e3064f2c85361d.jpg";
        r_text[10] ="https://telegra.ph/file/740a77a9a29d771eac8cb.jpg";
        r_text[11] ="https://telegra.ph/file/5b7b2f65cbc6c7bc45e1b.jpg";
        r_text[12] ="https://telegra.ph/file/10266a1575a4026e09717.jpg";
        r_text[13] ="https://telegra.ph/file/76a199ede5b3a2d56d33f.jpg";
        r_text[14] ="https://telegra.ph/file/fbf56069cb7a0ab070f57.jpg";
        r_text[15] ="https://telegra.ph/file/8594f64d99abfc20ba8ef.jpg";
        r_text[16] ="https://telegra.ph/file/66d6aae107de8ff544c9c.jpg";
        r_text[17] ="https://telegra.ph/file/cc0a5a8df38ff33ada7e2.jpg";
        r_text[18] ="https://telegra.ph/file/f6b5e6f346ea3f1e1a368.jpg";
        r_text[19] ="https://telegra.ph/file/d9fcbc49542741674eb94.jpg";

var i = Math.floor(20*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*Javis an Assistant* \n*Public Assistant*\n\n*Hosted* • ๛```Aws```\n*Version* • ๛ ```'+Config.VERSION+'```\n*Branch* • ๛ ```'+Config.BRANCH+'```\n*About* • ๛```sampandey.tk```\n*Owner* ๛ t.me/sam_pande'})
    }))
*/
