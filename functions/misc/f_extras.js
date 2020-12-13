var extra = require('/home/runner/gtfnews/functions/misc/f_extras');
const Discord = require('discord.js');
var gtffile = process.env;
////////////////////////////////////////////////////
var emote = require('/home/runner/gtfnews/index');
var gtfuser = require('/home/runner/gtfnews/index');
var gtftools = require('/home/runner/gtfnews/functions/misc/f_tools');

var fs = require('fs');
module.exports.caremotes = function(client) {
    var axios = require('axios')
  startcaremotes()
setInterval(function() {
  startcaremotes()
}, 3600000 * 2)

function startcaremotes() {

  axios.get("https://www.kudosprime.com/gts/carlist.php?range=5000").then((response) => {
  var list = response["data"].split("\r\n").filter(x => x.includes("images/cars/side/gts_car")).map(function(x) {
    car = x.split("alt=\"")[1].split("\"/>")[0]
    image = x.split("<img src=\"")[1].split("\"")[0]
    return [car.replace(/\s+/g, "_"), "https://www.kudosprime.com/gts/" + image.replace("side", "big")]
  })
  complete(list)
  })

function complete(list) {
  var select = list[Math.floor(Math.random() * list.length)]
  var image = select[1]
  var server = client.guilds.cache.get("239493425131552778");
  var gtscar = client.emojis.cache.find(emoji => emoji.name === "gtscar");
  if (gtscar == null) {
    console.log("None")
  } else {
      server.emojis.resolve(gtscar.id).delete()
  }
  setTimeout(function() {
  server.emojis.create(image, "gtscar").then(function() {
    var gtscar = client.emojis.cache.find(emoji => emoji.name === "gtscar");
    if (gtscar == null) {
      console.log("Emoji not found")
      return
  } else {
      console.log(":gtscar: emote has been changed to " + select[0]);
  }
  })}, 5000);
};
}

}

module.exports.updatemanual = function(client) {
  var manual = JSON.parse(fs.readFileSync('./text/manual.json', 'utf8'))['manual'];
  var size = manual.length;
  var index = 0;
  gtftools.interval(
    function() {
      extra.message(client, manual[index]['title'], manual[index]['description'].join('\n\n'), manual[index]['color'], manual[index]['image'], '704114222690336800', [], index + 1);
      index++;
    },
    2000,
    size
  );
  console.log('Manual Updated.');
};

module.exports.settingsemotes = function(client) {
  ///Games//
  var index = 1;
  
    var title = '📺 __**Consoles**__';
  var reactions = [
    ['🟦', 'PS5'],
    ['🔵', 'PS4'],
    ['🔷', 'PS3'],
    ['🟩', 'Xbox Series X'],
    ['🟢', 'Xbox One'],
    ['💚', 'Xbox 360'],
    ['🟥', 'Nintendo Switch'],
  ];
  var message = `**🟦 Playstation 5 (Unlocks <#777229097893625908>)
🔵 PlayStation 4
🔷 PlayStation 3
🟩 Xbox Series X
🟢 Xbox One
💚 Xbox 360
🟥 Nintendo Switch

:question: You can add your own roles with the reactions below. You can mention these roles for those who have these consoles (or planning on).
:question: Role is added successfully if it toggles back to its previous number.**`;

  extra.message(client, title, message, '', '', '437070477157072898', reactions, index);
  index++

  var title = ':video_game: __**Games**__';
  var reactions = [
    ['0️⃣', 'Assetto Corsa Competizione'],
    ['1️⃣', 'Assetto Corsa'],
    ['2️⃣', 'Burnout'],
    ['3️⃣', 'BeamNG Drive'],
    ['4️⃣', 'DiRT 5'],
    ['5️⃣', 'Euro Truck Simulator 2'],
    ['6️⃣', 'Gran Turismo 7'],
    ['7️⃣', 'Gran Turismo Sport'],
    ['8️⃣', 'Gran Turismo 1-6'],
    ['9️⃣', 'Grand Theft Auto 5'],
    ['🔟', 'Forza Horizon 4'],
    ['🇦', 'Forza Motorsport'],
    ['🇧', 'Need For Speed Heat'],
    ['🇨', 'Project CARS 3'],
    ['🇩', 'rFactor 2'],
    ['🇪', 'rFactor 1'],
    ['🇫', 'The Crew 2']
  ];
  var message = `**:zero: Assetto Corsa Competizione (Unlocks <#560741220213587968>)
:one: Assetto Corsa (Unlocks <#560741220213587968>)
:two: Burnout (Unlocks <#560741220213587968>)
:three: BeamNG Drive (Unlocks <#560741220213587968>)
:four: DiRT 5 (Unlocks <#560741220213587968>)
:five: Euro Truck Simulator 2 (Unlocks <#560741220213587968>)
:six: Gran Turismo 7 (Unlocks <#367099991862411265> | <#778712498006261780>)
:seven: Gran Turismo Sport (Unlocks <#367099991862411265>)
:eight: Gran Turismo 1-6 (Unlocks <#367099991862411265>)
:nine: Grand Theft Auto 5 (Unlocks <#560741220213587968>)
:keycap_ten: Forza Horizon 4 (Unlocks <#560741220213587968>)
:regional_indicator_a: Forza Motorsport (Unlocks <#560741220213587968>)
:regional_indicator_b: Need For Speed Heat (Unlocks <#560741220213587968>)
:regional_indicator_c: Project CARS 3 (Unlocks <#560741220213587968>)
:regional_indicator_d: rFactor 2 (Unlocks <#560741220213587968>)
:regional_indicator_e: rFactor 1 (Unlocks <#560741220213587968>)
:regional_indicator_f: The Crew 2 (Unlocks <#560741220213587968>)

:question: You can add your own roles with the reactions below. You can mention these roles for those who have these games.
:question: Role is added successfully if it toggles back to its previous number.**`;

  extra.message(client, title, message, '', '', '437070477157072898', reactions, index);
  index++;
  title = '__**Channels**__';
  reactions = [['0️⃣', '🔞-enabled'], ['🦊', '🦊-enabled'], ['🚙', '🚙-enabled'], ['1️⃣', '🤖📅-disabled'], ['2️⃣', '🏁-disabled'], ['3️⃣', '⚙-disabled'], ['📊', '📊-enabled']];
  message = `**:zero: Enable <#755468331074453710>
:fox: Enable <#336262448552083456>
:blue_car: Enable <#563191263650775052>
:one: Disable <#619057599882461184>
:two: Disable <#432667283031195648> and <#687872420933271577>
:three: Disable <#327526878791598080>
📊 Enable GTF Stats

:question: These are some text channels/categories that you can enable/disable in GT Fitness.
:question: Role is added successfully if it toggles back to its previous number.**`;

  extra.message(client, title, message, '', '', '437070477157072898', reactions, index);
  index++;
  title = '__**Miscellaneous**__';
  reactions = [['🗄', 'Archives'], ['📅', 'Announcements'], ['🏁', 'Bot Updates'], ['🏆', '!dw Mode'], ['🎉', 'Seasonal Events']];
  message = `**🗄 Archives - Archives of older text channels in GT Fitness. (Unlocks 🗄 Archive Server Category)
:date: Announcements - Announcements about GT Fitness server.
:checkered_flag: Bot Updates - Updates of the GT Fitness server bot.
:trophy: Daily Workout Mode - Notifications for the !dw challenge command.
:tada: Seasonal Events - Subscribe for ongoing events in GT Fitness. (Unlocks <#489144683528978463>)

:question: These are miscellaneous settings in GT Fitness.
:question: Role is added successfully if it toggles back to its previous number.**`;

  extra.message(client, title, message, '', '', '437070477157072898', reactions, index);
  index++;
};

module.exports.colorpickerjlicenseemotes = function(client) {
  var title = '🎨 __**GT Fitness - Color Picker**__';
  var reactions = [['0️⃣', 'Red'], 
                   ['1️⃣', 'Orange'], 
                   ['2️⃣', 'Yellow'], 
                   ['3️⃣', 'Green'], 
                   ['4️⃣', 'Aqua'], 
                   ['5️⃣', 'Blue'], 
                   ['6️⃣', 'Purple'], 
                  ['7️⃣', 'Magenta'], 
                   ['8️⃣', 'White'], 
                   ['9️⃣', 'Black'], 
                   ['🇦', 'Gray'], 
                   ['🇧', 'Pink'], 
                   ['🇨', 'Tan'],
                   ['🇩', 'Default Color'], ['🔑', 'GTF Brother']];
  var message = `**:zero: Red
:one: Orange
:two: Gold
:three: Green
:four: Aqua
:five: Blue
:six: Purple
:seven: Magenta
:eight: White
:nine: Black
:regional_indicator_a: Gray (Invisible Color in Dark Theme)
:regional_indicator_b: Pink
:regional_indicator_c: Tan
:regional_indicator_d: Default Color (Discord Gray)

:question: Use the reactions to color your username!
:question: Role is added successfully if it toggles back to its previous number.**
:warning: Make sure that you don't have more than 2 color roles. They can overlap one another.`;

  return extra.message(client, title, message, '', '', '429025543329939476', reactions, 1);
};

module.exports.loadfeeds = function(client) {
  function jalolist(data) {
    return ('`' + data + '`')
      .split('<link>')
      .map(x => x.split('</link>')[0])
      .filter(x => x.includes('https://jalopnik.com'))
      .slice(1);
  }
  extra.feed('jalopniknews', 'https://jalopnik.com/rss', jalolist, 'Jalopnik News', '361638649718374411', 9, client, 'https', false);
  
  function motor1list(data) {
    return ('`' + data + '`')
      .split('<link>')
      .map(x => x.split('</link>')[0])
      .slice(3);
  }
  extra.feed('motor1news', 'https://www.motor1.com/rss/news/all/',  motor1list, 'Motor 1 News', '760412129680424961', 9, client, 'https', true);
  

  function gtplist(data) {
      return ('`' + data + '`')
        .split('\n')
        .filter(x => x.includes('\t\t<link>'))
        .map(
          x =>
            x
              .replace('k>', '|')
              .replace('</l', '|')
              .split('|')[1]
        );
    }

    extra.feed('gtpnews', 'http://feeds.feedburner.com/gtplanet', gtplist, 'GTPlanet', '310599531777622017', 9, client, 'http', true);
  /*
  
  function gtplist(data) {
      return ("`" + data + "`")
        .split("\n")
        .filter(x => x.includes("\t\t<link>"))
        .map(
          x =>
            x
              .replace("k>", "|")
              .replace("</l", "|")
              .split("|")[1]
        );
    }

    extra.feed(
      "http://feeds.feedburner.com/gtplanet",
      gtplist,
      "GTPlanet",
      "310599531777622017",
      9,
      client,
      "http"
    );
  
  function forzatwitterlist(data) {
      return ("`" + data + "`")
        .split("<link>")
        .map(x => x.split("</link>")[0])
        .slice(2);
    }
    extra.feed(
      "http://www.rssmix.com/u/11441163/rss.xml",
      forzatwitterlist,
      "Forza Twitter",
      "694367801967902802",
      10,
      client,
      "http"
    ); */

  ////INTERVALS

  setInterval(function() {
    function jalolist(data) {
      return ('`' + data + '`')
        .split('<link>')
        .map(x => x.split('</link>')[0])
        .filter(x => x.includes('https://jalopnik.com'))
        .slice(1);
    }

    extra.feed('jalopniknews', 'https://jalopnik.com/rss', jalolist, 'Jalopnik News', '361638649718374411', 9, client, 'https', false);
  }, 600000);
  setInterval(function() {
  function motor1list(data) {
    return ('`' + data + '`')
      .split('<link>')
      .map(x => x.split('</link>')[0])
      .slice(2);
  }
  extra.feed('motor1news', 'https://www.motor1.com/rss/news/all/', motor1list, 'Motor 1 News', '760412129680424961', 9, client, 'https', false);
}, 700000)

  setInterval(function() {
    function gtplist(data) {
      return ('`' + data + '`')
        .split('\n')
        .filter(x => x.includes('\t\t<link>'))
        .map(
          x =>
            x
              .replace('k>', '|')
              .replace('</l', '|')
              .split('|')[1]
        );
    }

    extra.feed('gtpnews', 'http://feeds.feedburner.com/gtplanet', gtplist, 'GTPlanet', '310599531777622017', 9, client, 'http', true);
  }, 660000);

  setInterval(function() {
    function gttwitterlist(data) {
      return ('`' + data + '`')
        .split('<link>')
        .map(x => x.split('</link>')[0])
        .slice(3);
    }
    extra.feed('gttwitternews', 'http://fetchrss.com/rss/5d706f338a93f892228b45675ee05d838a93f85d698b4567.xml', gttwitterlist, 'GT Twitter', '360871750461947905', 10, client, 'http', true);
  }, 630000);

  setInterval(function() {
    function forzatwitterlist(data) {
      return ('`' + data + '`')
        .split('<link>')
        .map(x => x.split('</link>')[0])
        .slice(2);
    }
    extra.feed('forzatwitternews', 'http://www.rssmix.com/u/11685200/rss.xml', forzatwitterlist, 'Forza Twitter', '694367801967902802', 10, client, 'http', true);
  }, 640000);
};

module.exports.galleryreacts = function(msg) {
  if (msg.channel.name.includes('meme') && (msg.attachments.size >= 1 || msg.content.includes("https://") || msg.content.includes("http://"))) {
    msg.react("👍").then(() => msg.react("👎")).catch(() => console.error('One of the emojis failed to react.'));
  }
  if (msg.channel.name.includes('furry') && msg.attachments.size >= 1) {
    var list = ["❤","🧡","💛","💚","💙","💜","🤎","🖤","🤍"]
    msg.react(list[Math.floor(Math.random() * list.length)]);
    return
  }
    if (msg.channel.name.includes('updates')) {
    msg.react("⭐");
    return
  }
  if (msg.channel.name.includes('photos') && msg.attachments.size >= 1) {
    msg.react('❤');
    return
  } else {
    return;
  }
};

module.exports.feed = function(pathname, link, func, name, channelid, amount, client, type, reverse) {
var articlelist = {"list":[]}
var server = client.guilds.cache.get('239493425131552778');
var channel = server.channels.cache.get(channelid);
channel.messages.fetch({}).then(msg => {
var bot = msg.filter(msg => msg.author.id == process.env.USERID)
bot.forEach(m => {
                  articlelist["list"].push(m.content.split("\n")[1])
                }
)
funcr()         
})
var funcr = function() {
    if (type == 'https') {
    var https = require('https');
  } else {
    var https = require('http');
  }

  https.get(link, resp => {
    let data = '';
    resp.on('data', chunk => {
      data += chunk;
    });

    resp.on('end', () => {
      var list = gtftools.removeDups(func(data)).slice(0, amount);
      if (reverse) {
        list = list.reverse();
      }

      list = list.map(function(e, i) {
        return [name, e];
      });

      var rsschannel = client.channels.cache.find(channel => channel.id === channelid);

      rssfeed();

      function rssfeed() {
        rsschannel.messages.fetch().then(messages => {
          var messagess = messages.filter(msg => msg.author.id == gtffile.USERID);
          list = list.filter(function(x) {
            return !articlelist['list'].some(array => array.includes(x[1]));
          });
          
          if (list.length == 0) {
            console.log('None from ' + link + '.');
            return
          } else {
            for (var i = 0; i < list.length; i++) {
              articlelist['list'].push(list[i][1]);
              if (articlelist['list'].length > 30) {
                articlelist['list'] = articlelist['list'].slice(1);
              }
            }
            var send = {"list":articlelist["list"]}
            if (send === undefined || send.length == 0) {
              console.log("Dont send")
              return
            }
            var index = 0;
            gtftools.interval(
              function() {
                rsschannel.send('>>> 📰 | **' + list[index][0] + '**\n' + list[index][1]).then(msg => msg.react('⭐'));

                index++;
                console.log('Feed sent from ' + link + '!');
              },
              3000,
              list.length
            );
          }
        });
      }
    });
  });
};
}

module.exports.checkgold = function(client, message) {
  var activated = 0;
  var chance = gtftools.randomInt(1, 200);
    if (message.channel.name.includes('debug')) {
      chance = 100
    }
  if (!message.channel.name.includes('lobby') || message.channel.name.includes('🔞') || message.channel.name.includes('mission') || message.author.id == gtffile.USERID || chance != 100) {
    return;
  }

  var channelid = message.channel.id;
  var channel = client.guilds.cache.get('239493425131552778').channels.cache.get(channelid);

  channel.messages.fetch({ limit: 1 }).then(msg => {
    var msg = msg.first();
    if (msg.author.id == gtffile.USERID) {
      return;
    }
    var check = 0;
    if (chance) {
      activated += 1;
      var list = [
        [emote.platinummedal, 'platinum', 0x91cae1, emote.platinummedal + ' __**Platinum Medal**__ ' + emote.platinummedal, '**Platinum Medal**', 10],
        [emote.goldmedal, 'gold', 0xffd700, emote.goldmedal + ' __**Gold Medal**__ ' + emote.goldmedal, '**Gold Medal**', 8],
        [emote.silvermedal, 'silver', 0xaaa9ad, emote.silvermedal + ' __**Silver Medal**__ ' + emote.silvermedal, '**Silver Medal**', 6],
        [emote.bronzemedal, 'bronze', 0xd2825f, emote.bronzemedal + ' __**Bronze Medal**__ ' + emote.bronzemedal, '**Bronze Medal**', 4],
      ];
      var index = Math.floor(Math.random() * list.length);
      var select = list[index];
      select[0] = select[0].split(':')[2];
      select[0] = select[0].slice(0, select[0].length - 1);
      msg.react(select[0]);
      var filterzero = (reaction, user) => reaction.emoji.name === select[1] && activated == 1;
      const filter11 = msg.createReactionCollector(filterzero, { time: 1000 * 180 });
      var activate = false;

      filter11.on('collect', r => {
        var count = r.count

        if (count == 6 && !activate) {
          activate = true;
          var embed = new Discord.MessageEmbed();

          msg.attachments.forEach(attachment => {
            const url = attachment.url;
            embed.setImage(url);
          });
          embed.setTitle(select[3]);
          embed.setDescription(msg.toString());
          embed.setColor(select[2]);
          embed.addField('Author', '<@' + msg.author.id + '>', true);
          embed.addField('Channel', '<#' + channelid + '>', true);
          embed.addField('Link', "https://discord.com/channels/" + "239493425131552778" + "/" + channelid + "/" + msg.id, true);
          var userd = msg.guild.members.cache.get(msg.author.id);
          embed.setAuthor(userd.user.username, userd.user.displayAvatarURL());
          var embed2 = new Discord.MessageEmbed();
          embed2.setColor(select[2]);
          embed2.setDescription('Congrats, ' + userd.user.username + "'s message has earned the " + select[4] + '!');
          channel.send(embed2);
          setTimeout(function() {
            client.guilds.cache
              .get('239493425131552778')
              .channels.cache.get('529376959239815168')
              .send(embed);
          }, 5000);
        }
      });

      filter11.on('end', r => {
    if (!activate) {
      var count = r.size
      if (count >= 6) {
          activate = true;
          var embed = new Discord.MessageEmbed();

          msg.attachments.forEach(attachment => {
            const url = attachment.url;
            embed.setImage(url);
          });
          embed.setTitle(select[3]);
          embed.setDescription(msg.toString());
          embed.setColor(select[2]);
          embed.addField('Author', '<@' + msg.author.id + '>', true);
          embed.addField('Channel', '<#' + channelid + '>', true);
          embed.addField('Link', "https://discord.com/channels/" + "239493425131552778" + "/" + channelid + "/" + msg.id, true);
          var userd = msg.guild.members.cache.get(msg.author.id);
          embed.setAuthor(userd.user.username, userd.user.displayAvatarURL());
          var embed2 = new Discord.MessageEmbed();
          embed2.setColor(select[2]);
          embed2.setDescription('Congrats, ' + userd.user.username + "'s message has earned the " + select[4] + '!');
          channel.send(embed2);
          setTimeout(function() {
            client.guilds.cache
              .get('239493425131552778')
              .channels.cache.get('529376959239815168')
              .send(embed);
          }, 5000);
          return
      }
	msg.react("❌")
  }
 
});
    }
  });
};

module.exports.message = function(client, title, text, color, image, channelid, reactions, number) {
  var server = client.guilds.cache.get('239493425131552778');
  var channel = server.channels.cache.get(channelid);
  var embed = new Discord.MessageEmbed();
  var description = text;

  if (typeof channel == 'undefined') {
    channel.send('Invalid');
    return;
  }

  channel.messages.fetch().then(msg => {
    var arr = Array.from(msg.entries()).reverse();

    if (typeof arr[number - 1] === 'undefined') {
      embed.setTitle(title);
      embed.setDescription(description);
      if (color.length != 0) {
        embed.setColor(color);
      }
      if (typeof image !== 'undefined') {
        if (image.length != 0) {
          embed.setThumbnail(image);
        }
      }
      channel.send(embed);
      return;
    }

    channel.messages.fetch(arr[number - 1][0]).then(msg => {
      if (msg == undefined) {
        embed.setTitle(title);
        embed.setDescription(description);
        if (color.length != 0) {
          embed.setColor(color);
        }
        if (typeof image !== 'undefined') {
          if (image.length != 0) {
            embed.setThumbnail(image);
          }
        }
        channel.send(embed);
        return;
      }

      var otitle = msg.embeds[0].title;
      var odescription = msg.embeds[0].description;

      if (odescription === undefined || otitle === undefined) {
        embed.setTitle(title);
        embed.setDescription(description);
        if (color.length != 0) {
          embed.setColor(color);
        }
        if (typeof image !== 'undefined') {
          if (image.length != 0) {
            embed.setThumbnail(image);
          }
        }
        msg.edit(embed);
        return;
      }

      if (JSON.stringify(odescription) !== JSON.stringify(description) || JSON.stringify(otitle) !== JSON.stringify(title)) {
        embed.setTitle(title);
        embed.setDescription(description);
        if (color.length != 0) {
          embed.setColor(color);
        }
        if (typeof image !== 'undefined') {
          if (image.length != 0) {
            embed.setThumbnail(image);
          }
        }
        msg.edit(embed);
      }
      var time = 0;
      if (reactions.length != 0) {
        if (msg.reactions.cache.size < reactions.length) {
          time = 3000 * (reactions.length + 1);
          var i = 0;
          gtftools.interval(
            function() {
              msg.react(reactions[i][0]);
              i++;
            },
            3000,
            reactions.length
          );
        }

        setTimeout(function() {
          var filters = function(index) {
            var filterzero = (reaction, user) => reaction.emoji.name === reactions[index][0];
            const filter11 = msg.createReactionCollector(filterzero, { timer: 1000 });

            filter11.on('collect', r => {
              try {
                for (const user of r.users.cache.values()) {
                  if (user.id == gtffile.USERID) {
                    continue;
                  }
                  r.users.remove(user).then(
                    x =>
                      function() {
                        console.log('E');
                      }
                  );
                  var useri = msg.guild.members.cache.get(user.id);
                  var role = msg.guild.roles.cache.find(r => r.name === reactions[index][1]);
                  
                  if (useri.guild.roles.cache.some(r => r.name === "Consoles ")) {
                  } else {
                    useri.roles.add(msg.guild.roles.cache.find(r => r.name === "Consoles ===============================")).catch(console.error)
                  }

                  if (useri.roles.cache.find(r => r.name === reactions[index][1])) {
                    useri.roles.remove(role).catch(console.error);
                  } else {
                    useri.roles.add(role).catch(console.error);
                  }
                }
              } catch (error) {
                console.error(error);
              }
            });
          };
          for (var i = 0; i < reactions.length; i++) {
            filters(i);
          }
        }, time);
      }
    });
  });
};

module.exports.gtfstats = function(list, client) {
   var server = client.guilds.cache.get('239493425131552778');
   var totmembers = server.members.cache.filter(member => !member.user.bot)
   var size = totmembers.size
   var ids = totmembers.map(member => member.user.id)
    var novice = 0
    var b = 0
    var a = 0
    var ic = 0
    var ib = 0
    var ia = 0
    var s = 0
    var j = 0
    var j2 = 0
  ids.filter(function(x) {
    var user = server.members.cache.get(x)
    var sum = !user.roles.cache.find(r => (r.name == "B License")) + !user.roles.cache.find(r => (r.name == "A License")) + !user.roles.cache.find(r => (r.name == "IC License")) + !user.roles.cache.find(r => (r.name == "IB License")) + !user.roles.cache.find(r => (r.name == "IA License")) + !user.roles.cache.find(r => (r.name == "S License")) + !user.roles.cache.find(r => (r.name == "J License")) + !user.roles.cache.find(r => (r.name == "J2 License"))
    if (sum == 8) {
      novice++
    } else if (sum == 7) {
      b++
    } else if (sum == 6) {
      a++
    } else if (sum == 5) {
      ic++
    } else if (sum == 4) {
      ib++
    } 
     else if (sum == 3) {
      ia++
    } 
     else if (sum == 2) {
      s++
    } 
     else if (sum == 1) {
      j++
    } 
     else if (sum == 0) {
      j2++
    } else {   
      return false
    }
  })

  //////////
var categories = server.channels.cache.filter((c) => c.type === "category").size;
var text = server.channels.cache.filter((c) => c.type === "text").size;

  //////////


   var list = [["Total GTF Players:",size], 
   ["Novice Players:", novice],
    ["B Players:", b],
     ["A Players:", a],
     ["IC Players:", ic], 
     ["IB Players:", ib], 
     ["IA Players:", ia],
     ["S Players:", s],
      ["J Players:", j],
       ["J2 Players:", j2], 
       ["Categories:", categories], ["Text Channels:", text]]

   var index = 0
  gtftools.interval(function(){
      start(index)
    index++
  }, 1000, list.length)

  function start(index) {
    var regex = new RegExp("^"+list[index][0],"g") 
  let channel = server.channels.cache.find(c => c.name.match(regex))
  if (!channel) {
   server.channels.create(list[index].join(" "), { type: 'voice'})
  .then(channel => {
    let category = server.channels.cache.find(c => c.name == "GTF Stats 📊" && c.type == "category")

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
  } else {
channel.setName(list[index].join(" "))
  }
  }

}

module.exports.hi = function(msg) {
  if (msg.content.length == 2 &&(msg.content == "hi" || msg.content == "Hi")) {
    
    msg.react(emote.hi.split(":")[2].split(">")[0])
    return
  }
  if (msg.content.length == 3 && (msg.content == "hi!" || msg.content == "Hi!")) {
    msg.react(emote.hi.split(":")[2].split(">")[0])
    return
  }
};