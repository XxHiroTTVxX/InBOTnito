/**
const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
                .setLabel("Community Links")
                .setCustomId("com-btn")
                .setStyle("PRIMARY")
                .setDisabled(false);
			);
*/
const { Client, Message, MessageEmbed } = require('discord.js');
var ee = require('../../config/embed.json');
var config = require('../../config/config.json');
const moment = require("moment"); 

module.exports = {
    name: 'proxy',
    aliases: ['binfo'],
    category: 'Proxy',
    memberpermissions: [],
    cooldown: 5,
    description: 'Get a random proxy link',
    usage: 'proxy',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
message.channel.send(
  new MessageEmbed()
            .setTitle("Proxy Dispenser")
            .setDescription(`Choose the proxy you want below. ( This is not finished btw so please don't spam this command )`)
            .setColor("#4000ff")
  
)
    }
}