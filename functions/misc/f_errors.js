var emote = require("../../index");

const Discord = require("discord.js");
var gtf = process.env;
////////////////////////////////////////////////////

module.exports.warning = function(name, desc, embed, msg, userdata) {
  embed.setColor(0xffff00);
  var message = msg.content.split(" ").join(" ");
  if (message.length == 0) {
    message = "";
  }
  embed.addField(name + ' "' + message + '"', desc);
  return;
};

module.exports.error = function(name, desc, embed, msg, userdata) {
  var embed = new Discord.MessageEmbed();
  var gtfhelp = "";
  embed.setAuthor(msg.author.username);
  embed.setColor(0xff0000);
  embed.addField(name + ' "' + msg.content.split(" ").join(" ") + '"', desc + gtfhelp, true);
  return msg.channel.send(embed);
};

module.exports.success = function(name, desc, time, special, embed, msg, userdata, dm) {
  var embed = new Discord.MessageEmbed();
  embed.setColor(0x216c2a);
  embed.setDescription("__**" + name + "**__" + "\n" + desc);
  if (special == true) {

    if (dm === undefined || dm === "") {
      return msg.channel.send(embed).then(msg => {
        if (time > 0) {
          msg.delete({ timeout: time });
        }
      });
    } else {
      msg.author.send(embed).then(msg => {
        if (time > 0) {
          msg.delete({ timeout: time });
        }
      });
    }
  } else {
    msg.edit(embed).then(msg => {
      if (time > 0) {
        msg.delete({ timeout: time });
      }
    });
  }
};
