const distube = require("distube");

module.exports.run = async (bot, message, args) => {
  const queue = bot.distube.getQueue(message);
  if (!queue) {
    message.channel.send("Nothing playing right now!");
  } else {
    message.channel.send(
      `Current queue:\n${queue.songs
        .map(
          (song, id) =>
            `**${id ? id : "Playing"}**. ${song.name} - \`${
              song.formattedDuration
            }\``
        )
        .slice(0, 10)
        .join("\n")}`
    );
  }
  message.channel.send("here is the queue!");
};

module.exports.config = {
  name: "queue",
  allases: [],
  description: "showing the queue!",
};
