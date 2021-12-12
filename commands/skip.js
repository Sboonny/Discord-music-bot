const distube = require('distube')

module.exports.run = async (bot, message, args) => { 
    bot.distube.skip(message)
		message.channel.send('skip the music!')
}


module.exports.config = {
	name: 'skip',
  allases:[],
	description: 'skipping the music!',
};