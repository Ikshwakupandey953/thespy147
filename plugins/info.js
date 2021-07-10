let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 Jarvis 〙 ═
╠➥ Made by Mr Sam
╠➥ Founder: Sam Pandey 
╠➥ Script: Sam ™
║      [ᴅᴏɴᴛ ᴇᴅɪᴛ ᴄʀᴇᴅɪᴛs / ᴄʜᴇᴄᴋ  ʟɪᴄᴇɴsᴇ ]
╠➥ send message : wa.me//+91.........
║
║>ɪғ ʏᴏɪ ʜᴀᴠᴇ ᴀɴʏ ɪssᴜᴇ sᴇɴᴅ ᴍᴇssᴀɢᴇ?9
║
╠═〘 Jarvis 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
