const Asena = require("../events");
const {MessageType} = require("@adiwajshing/baileys");
const got = require("got");

Asena.addCommand({pattern: 'tahta ?(.*)', fromMe: true, deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/hartatahta?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image);
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));

Asena.addCommand({pattern: 'pesanlop ?(.*)', fromMe: true, deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/lovemessagetext?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image);
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));

Asena.addCommand({pattern: 'romance ?(.*)', fromMe: true, deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/romancetext?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image);
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));

Asena.addCommand({pattern: 'glow ?(.*)', fromMe: true, deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/glowtext?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image);
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));

Asena.addCommand({pattern: 'nulis ?(.*)', fromMe: true, deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/write?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image);
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));

Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: true, deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/thundertext?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image);
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));

Asena.addCommand({pattern: 'galaxy ?(.*)', fromMe: true, deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/galaxytext?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image);
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));
