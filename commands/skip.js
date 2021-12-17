const distube = require('distube')

module.exports.run = async (bot, message, args) => { 
	 if(queue.length > 1){
    bot.distube.skip(message)
		message.channel.send('skip the music!')
		} else if (!queue) return 'there is nothing to skip'
}


module.exports.config = {
	name: 'skip',
  allases:[],
};