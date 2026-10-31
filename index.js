const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
    patchConfig: false,
    checkUpdate: false
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    
    client.user.setPresence({
        status: 'dnd',
        activities: [{
            name: 'WINDS-DEVELOPMENT (EST.2015)',
            type: 'WATCHING',
            applicationId: 'YOUR_APPLICATION_ID_HERE', // Discord Dev Portal se Application ID
            assets: {
                largeImage: 'my_logo', // Dev Portal par upload ki gayi image ka key name
                largeText: 'LIVE-INDIA' // Hover karne par dikhne wala text
            }
        }]
    });
});

setInterval(() => {
    console.log('Keep-alive ping sent at: ' + new Date().toISOString());
}, 30000);

client.login(process.env.DISCORD_TOKEN).catch(err => {
    console.error('Login Failed:', err);
});
