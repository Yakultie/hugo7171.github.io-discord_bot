
console.log("back off hackerz")
const Discord = require('discord.js');
const bot = new Discord.Client();

// Basic Code

//functions


//end of functions
bot.on('message',(message)=>{
  if (message.content =="stop") {
    clearInterval(loop);
    console.log("Stopped")
  }
  var currentChannel = message.channel
  if(message.content=="start"){
    currentChannel.sendMessage("https://sd.keepcalm-o-matic.co.uk/i/sit-back-relax-and-enjoy--7.png")
      var loop = setInterval(backSide, 15000);
      function backSide() {
        currentChannel.sendMessage("*rule34 overwatch")
      }
  }
  if(message.content=="burn"){
    message.channel.sendMessage("https://m.popkey.co/2e18f2/VlgXG.gif")
  }
  if (message.content=="truth or dare") {
    random = Math.random()
    if (random>0.5) {
      currentChannel.sendMessage("Truth")
    }else{
      currentChannel.sendMessage("Dare")
    }
    }
    if(message.content=="spam"){
      for (var i = 0; i < 20; i++) {
        currentChannel.sendMessage("Ignore")
      }
    }

})

bot.on('message',(message)=>{
  if (message.content=="stop") {
    clearInterval(loop);
    console.log("stopped two")
  }
}
bot.login(process.env.BOT_TOKEN)
