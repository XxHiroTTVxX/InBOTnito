const { Client, Message, MessageEmbed } = require('discord.js');
const client = require('../index');
const config = require('../config/config.json')
/** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */


client.on('ready',  async() => {
    const statusArray = ['with 𝖒𝖆𝖌𝖎𝖈, PLAYING', `github.com, WATCHING` , '#general, WATCHING' , 'Nzrt, LISTENING TO', `XxHiroxX, LISTENING TO` , 'Code , WATCHING', `everyone, WATCHING` , 'with Proxies, PLAYING' , `Proxies, WATCHING` , `replit.com, WATCHING` , `Minecraft, PLAYING` , `Discord, PLAYING` , `IDontCodee, LISTENING TO` , `for rule breakers, WATCHING` , `youtube, WATCHING` , `🎵 Music, LISTENING TO` , `Incognito, WATCHING`] 
    setInterval(() => {
    const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
    const status = random[0]
    const mode = random[1]
    client.user.setActivity(status, {type: mode})
    }, 7500)
    
})



