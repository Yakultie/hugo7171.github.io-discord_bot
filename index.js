console.log("back off hackerz")
const Discord = require('discord.js');
const bot = new Discord.Client();

// Basic Code

//functions


//end of functions
bot.on('message',(message)=>{
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
    if (message.content =="teo is a retard") {
      clearInterval(loop);
    }
})


bot.login('MzIyNzQ1OTU2ODg4MjE1NTc0.DBxEHA.FgxDwPi125f8oYC42j3YCyBu3BI')
