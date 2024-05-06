// index.js

import { Client } from 'discord.js';
import { token } from '/src/config/discordConfig'; // Adjust the path as needed

const client = new Client();

// Your bot logic goes here

client.login(token); // Log in using the bot token
