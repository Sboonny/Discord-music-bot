const fs = require('fs')
const Discord = require('discord.js')
const DisTube = require('distube')
const SoundCloudPlugin = require('@distube/soundcloud')
const SpotifyPlugin = require('@distube/spotify')

require("dotenv").config();

const token =  process.env.DISCORD_TOKEN;
const prefix = '^';

const bot =  new Discord.Client({
	intents: [
		'GUILDS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
	],
})    

bot.distube = new DisTube.default(bot, {
	searchSongs: 1,
	searchCooldown: 30,
	leaveOnEmpty: true,
	emptyCooldown: 0,
	leaveOnFinish: true,
	leaveOnStop: true,
})


bot.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of commandFiles) {
  const command = require(`./commands/${file}`)
  bot.commands.set(command.name, command)
}

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);

  bot.distube.on('error', (channel, error) => {
    console.error(error)
    channel.send(`An error encouter: ${error.slice(0, 1979)}`)
  })
});

bot.on("messageCreate", message => {

  if (message.author.bot) return 'message is from a bot';
  if (message.content.indexOf(prefix.length) !== 0) return `there is no prefex try to use ${prefix}`;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(!bot.command.has(command)) return 'there is no command like this!';
  
  try {
    bot.command.get(command).execute(message, args)
  } catch(error) {
    console.log(error)
    message.reply("command failed! there was an error!")
  }
});

// const status = queue =>
// 	`Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ')
// 		|| 'Off'}\` | Loop: \`${
// 		queue.repeatMode
// 			? queue.repeatMode === 2
// 				? 'All Queue'
// 				: 'This Song'
// 			: 'Off'
// 	}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``

bot.login(token);