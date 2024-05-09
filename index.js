// index.js
import { config } from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import { username, ipAddress } from './server.js';


console.log('initial ' + username + ' ' + ipAddress);
config();


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const TOKEN = process.env.WHITELIST_BOT_TOKEN;
client.login(TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
    const webLogChannel = '1237054478583205898';
    client.on('messageCreate', (message) => {
        console.log('\n');
        console.log('Message Content ' + message.content);
        console.log('Channel Name ' + message.channel.name);
        console.log('User Name ' + message.author.username);
        console.log('UserDisplay Name ' + message.author.displayName);
        console.log('Created at ' + message.createdAt);
        if (message.content == 'Hi') {
            message.reply(`Hello ${message.author}`);
        }
        if (message.content == 'Hello') {
            message.reply(`AAH bei`);
        }
        if (message.content == 'CheckWL') {
                console.log('\ninside func ' + username + ' ' + ipAddress);
                const channelWL = client.channels.cache.get(webLogChannel);
                if (username != null && ipAddress != null) {
                    const arrWL = [];
                    let logFormat = `User ${username} has authenticated their discord! with IP Address: ${ipAddress}`;
                    arrWL.push(logFormat);
                    let n = arrWL.length;
                    for(let i = 0;i<n;i++)
                    channelWL.send(arrWL[i]);
                }
                else {
                    channelWL.send(`No User`);
                }
            }
        });
    });





