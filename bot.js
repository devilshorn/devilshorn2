const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');


client.on('ready', () => {
  console.log(`Botun Olan ${client.user.tag} Sunucuya giris yapti ve artik aktif !`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleykum Selam !');
  }
  if (msg.content.toLowerCase() === '!instagram') {
    msg.reply('www.instagram.com/umutdelihasan');
  }
  if (msg.content.toLowerCase() === '!twitch') {
    msg.reply('www.twitch.tv/devilhorn');
  }
  if (msg.content.toLowerCase() === '!donate') {
    msg.reply('www.bynogame.com/devilhorn');
  }
  if (msg.content.toLowerCase() === '!prime') {
    msg.reply('Twitch Prime ile İLK ay bedava abone olabilirsiniz sonraki aylar 3€ {20₺} ödeyerek abone olabilirsiniz her ay farklı avantajlardan yararlanabilirsiniz www.twitch.tv/Prime');
  }
  if (msg.content.toLowerCase() === '!server') {
    msg.reply('PrimeCity = https://primecity.online/ ');
  }
});

client.login('NTk0ODIwMDEwMTA3NjAwODk2.XRiH8g.M4I-6kHQLDacS5QfsVhZLgbktTE');
