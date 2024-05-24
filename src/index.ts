import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

client.login(process.env.CLIENT_TOKEN);
