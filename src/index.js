require('dotenv').config();
var Discord = require('discord.js');
var client = new Discord.Client();
client.on('ready', function () {
    console.log("Logged in as ".concat(client.user.tag));
});
client.login(process.env.CLIENT_TOKEN);
