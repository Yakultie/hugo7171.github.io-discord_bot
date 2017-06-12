const Discord = require('discord.js')
const bot = new Discord.Client()
console.log('online')
console.log(process.env.BOT_TOKEN)
loopio = 0;
function loop(channel) {
  console.log('loop started')
  var lup = setInterval(function loop2(){
    channel.send('*ass')
  }, 1000);
}


bot.on('message',(message)=>{
  if (message.content=="loop"){
    loop(message.channel)
  }
  if (message.content == 'stop') {
    clearInterval(lup)
    console.log('loop Stopped')
  }
  if (message.content=='spam') {
    for (var i = 0; i < 20; i++) {
      message.channel.send('I like potatoes')
    }
  }
  if (message.content=="burn") {
    message.channel.send('https://m.popkey.co/2e18f2/VlgXG.gif')
  }
  if (message.content=="bernard") {
    message.channel.send('is hot')
  }
})
bot.login(process.env.BOT_TOKEN)
