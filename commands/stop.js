const distube = require('distube')

module.exports.run = async (bot, message, args) => { 
    bot.distube.stop(message)
		message.channel.send('Stopped the music!')
}


module.exports.config = {
	name: 'stop',
  allases:[],
	description: 'stopping the music!',
};

