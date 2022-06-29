const { Client, Message, MessageEmbed } = require('discord.js');
const client = require('../index');
const config = require('../config/config.json')
/** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */


client.on('ready',  async() => {
  console.log("EEEEE")
  // Random status messages

/**
'with 𝖒𝖆𝖌𝖎𝖈, PLAYING',
'#general, WATCHING' ,
'Nzrt, LISTENING TO',
`XxHiroxX, LISTENING TO` ,
`everyone, WATCHING` , 
	-   */ 
    const statusArray = ['with proxies, PLAYING' , `🇺🇦 #SupportUkraine, CUSTOM_STATUS` , `Visual Studio Code, PLAYING`] 
    setInterval(() => {
    const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
    const status = random[0]
    const mode = random[1]
    client.user.setActivity("HOLY UNBLOCKER ", {type: mode})
      // client.user.setActivity(status, {type: mode})
    console.log("INFO: Status changed to: " + mode + " " + status)
    }, 120000)
    
})


