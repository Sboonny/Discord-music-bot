const distube = require('distube')

module.exports.run = async (bot, message, args) => { 
    bot.distube.pause(message)
		message.channel.send('Paused the music!')
}


module.exports.config = {
	name: 'pause',
  allases:[],
	description: 'pausing the music!',
};


