const dotenv = require('dotenv');
if(process.env.NODE_ENV !== 'production')
    dotenv.config();

const { BOT_TOKEN } = process.env;

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login(BOT_TOKEN);