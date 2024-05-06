// index.js

const Discord = require('discord.js');
const config = require('/src/config/discordConfig'); // Adjust the path as needed

const client = new Discord.Client();

// Your bot logic goes here

client.login(config.token); // Log in using the bot token
