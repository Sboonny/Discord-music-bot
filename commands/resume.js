const distube = require('distube')

module.exports.run = async (bot, message, args) => { 
    bot.distube.resume(message)
		message.channel.send('Resuming the music!')
}


module.exports.config = {
	name: 'resume',
  allases:[],
};