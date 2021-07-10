const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'hack', fromMe: true}, (async (message, match) => {

    await message.sendMessage('Connecting To Hacked Private Server...');
    await message.sendMessage('Target Selected.');
    await message.sendMessage('Hacking... 0%\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ');
    await message.sendMessage('Hacking... 4%\n█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ');
    
    await new Promise(r => setTimeout(r, 4000));
    
    await message.sendMessage('Hacking... 8%\n██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ');
    await message.sendMessage('Hacking... 20%\n█████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ');
    await message.sendMessage('Hacking... 36%\n█████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ');
    await message.sendMessage('Hacking... 52%\n█████████████▒▒▒▒▒▒▒▒▒▒▒▒');
    
    await new Promise(r => setTimeout(r, 4000));
    
    await message.sendMessage('Hacking... 84%\n█████████████████████▒▒▒▒ ');
    await message.sendMessage('Hacking... 100%\n█████████HACKED███████████ ');
    await message.sendMessage('Targeted Account Hacked...\n\nPay 69$ To Remove this hack..');
    
    
    await new Promise(r => setTimeout(r, 4000));
    
    }));
    
    
