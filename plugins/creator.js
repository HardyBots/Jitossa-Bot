import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => thumbnailUrl.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [nomorown, `${await conn.getName(nomorown + '@s.whatsapp.net')}`, `مطور البوت `, `gxaymenofc@gmail.com`, `morocco `, `📍 https://hg-hardy.github.io`, `رقم مطور البوت أيمن`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `رقم البوت `, `لاتقم بإزعاجه`, `Nothing`, `Morocco`, `📍 https://github.com/HardyBots/Hardy-Bot`, `Just a normal bot that sometimes has an error ☺`]
  ], fkontak)
  //await conn.reply(m.chat,`Hello @${m.sender.split(`@`)[0]} Thats my owner, dont spam or i will block u`, sentMsg, {
                mentions: [m.sender]
            })
}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
