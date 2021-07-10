const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

    Asena.addCommand({ pattern: 'test', fromMe: true }, async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        await axios
          .get(`https://meme-api.herokuapp.com/gimme/porn`)
          .then(async (response) => {
            const {
              url,
            } = response.data.url

            const imageBuffer = await axios.get(url, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(imageBuffer.data), MessageType.image, {
                        caption: "Made By Jarvis"
            })
          })
      },
    )
