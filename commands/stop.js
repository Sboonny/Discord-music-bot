const distube = require('distube')

module.exports.run = async (bot, message, args) => { 
	if(queue){
    bot.distube.stop(message)
		message.channel.send('Stop the music!')
		} else if (!queue) return 'there is nothing to stop'
}


module.exports.config = {
	name: 'stop',
  allases:[],
};

