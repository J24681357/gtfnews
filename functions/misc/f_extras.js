var extra = require('/app/functions/misc/f_extras');
const Discord = require('discord.js');
var gtffile = process.env;
////////////////////////////////////////////////////
var emote = require('/app/index');
var gtfuser = require('/app/index');
var gtftools = require('/app/functions/misc/f_tools');

var fs = require('fs');
module.exports.caremotes = function(client) {
  /*var chance = gtftools.randomInt(1, 100);
  if (chance != 100) {
    return;
  }
  var str = "" + gtftools.randomInt(1, 334);
  var pad = "000";
  var number = pad.substring(0, pad.length - str.length) + str;

  var image =
    "https://www.kudosprime.com/gts/images/cars/side/gts_car_" +
    number +
    ".jpg";
  console.log(":gtscar: emote has been changed to " + image);
  var server = client.guilds.cache.get("239493425131552778");

  if (gtfuser.gtfbotconfig["CAREMOTE"].length != 0) {
    var gtscar = client.emojis.cache.find(emoji => emoji.name === "gtscar");
    if (gtscar == null) {
    } else {
      server.emojis.delete(gtscar.id).then(console.error("e"));
      gtfuser.gtfbotconfig["CAREMOTE"] = "";
    }
  }

  setTimeout(function() {
  server.emojis.create(image, "gtscar");
    var gtscar = client.emojis.cache.find(emoji => emoji.name === "gtscar").toString();
    if (gtscar == null) {
      console.log("Emoji not found")
      return
    }
    gtfuser.gtfbotconfig["CAREMOTE"] = gtscar.id;
    fs.writeFile(
      "/app/users/botconfig.json",
      JSON.stringify(gtfuser.gtfbotconfig),
      function(err, result) {
        if (err) console.log("error", err);
      }
    );
  }, 1000);
  return;
  */
};

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
  var message = `**🟦 Playstation 5 (Not Released)
🔵 PlayStation 4
🔷 PlayStation 3
🟩 Xbox Series X (Not Released)
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
    ['🇦', 'Forza Motorsport 7'],
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
:six: Gran Turismo 7 (Unlocks <#367099991862411265>)
:seven: Gran Turismo Sport (Unlocks <#367099991862411265>)
:eight: Gran Turismo 1-6 (Unlocks <#367099991862411265>)
:nine: Grand Theft Auto 5 (Unlocks <#560741220213587968>)
:keycap_ten: Forza Horizon 4 (Unlocks <#560741220213587968>)
:regional_indicator_a: Forza Motorsport 7 (Unlocks <#560741220213587968>)
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
  reactions = [['0️⃣', '🔞-enabled'], ['🦊', '🦊-enabled'], ['🚙', '🚙-enabled'], ['1️⃣', '🤖📅-disabled'], ['2️⃣', '🏁-disabled'], ['3️⃣', '⚙-disabled']];
  message = `**:zero: Enable <#348854157698138112>
:fox: Enable <#336262448552083456>
:blue_car: Enable <#563191263650775052>
:one: Disable <#619057599882461184>
:two: Disable <#432667283031195648> and <#687872420933271577>
:three: Disable <#327526878791598080>

:question: These are some text channels that you can enable/disable in GT Fitness.
:question: Role is added successfully if it toggles back to its previous number.**`;

  extra.message(client, title, message, '', '', '437070477157072898', reactions, index);
  index++;
  title = '__**Miscellaneous**__';
  reactions = [['🌐', 'open-lobby-archive'], ['🌍', 'open-lobby-ii-archive'], ['📅', 'Announcements'], ['🏁', 'Bot Updates'], ['🏆', '!dw Mode'], ['🎉', 'Seasonal Events']];
  message = `**:globe_with_meridians: Open Lobby Archive - An archive of open lobby spec I from 2/11/17 to 11/30/18. (Unlocks <#239493425131552778>)
🌍 Open Lobby II Archive - An archive of open lobby spec II from 11/30/18 to 4/30/20. (Unlocks <#518240957137944596>)
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
  if (msg.channel.name.includes('furry') && msg.attachments.size >= 1) {
    msg.react('❤');
  }
  if (msg.channel.name.includes('gtf-gallery') && msg.attachments.size >= 1) {
    msg.react('❤');
  } else {
    return;
  }
};

module.exports.feed = function(pathname, link, func, name, channelid, amount, client, type, reverse) {
  var path = '/app/rss/' + pathname + '.json';
  if (!fs.existsSync(path)) {
    fs.writeFile(path, JSON.stringify({ list: [] }), function(err, result) {
      if (err) console.log('error', err);
    });
    console.log('file success for' + pathname);
    return;
  }
  var articlelist = JSON.parse(fs.readFileSync(path, 'utf8'));

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
          } else {
            for (var i = 0; i < list.length; i++) {
              articlelist['list'].push(list[i][1]);
              if (articlelist['list'].length > 100) {
                articlelist['list'] = articlelist['list'].slice(1);
              }
            }
            fs.writeFile(path, JSON.stringify(articlelist), function(err, result) {
              if (err) {
                console.log('error', err);
              } else {
                console.log('Saved.');
              }
            });
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

module.exports.checkgold = function(client, message) {
  var activated = 0;
  var chance = gtftools.randomInt(1, 200);
  if (!message.channel.name.includes('lobby') || message.channel.name.includes('🔞') || message.channel.name.includes('venting') || message.author.id == gtffile.USERID || chance != 100) {
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
        [emote.diamondmedal, 'diamond', 0x91cae1, emote.diamondmedal + ' __**Diamond Medal**__ ' + emote.diamondmedal, '**Diamond Medal**'],
        [emote.goldmedal, 'gold', 0xffd700, emote.goldmedal + ' __**Gold Medal**__ ' + emote.goldmedal, '**Gold Medal**'],
        [emote.silvermedal, 'silver', 0xaaa9ad, emote.silvermedal + ' __**Silver Medal**__ ' + emote.silvermedal, '**Silver Medal**'],
        [emote.bronzemedal, 'bronze', 0xd2825f, emote.bronzemedal + ' __**Bronze Medal**__ ' + emote.bronzemedal, '**Bronze Medal**'],
      ];
      var index = Math.floor(Math.random() * list.length);
      var select = list[index];
      select[0] = select[0].split(':')[2];
      select[0] = select[0].slice(0, select[0].length - 1);
      msg.react(select[0]);
      var filterzero = (reaction, user) => reaction.emoji.name === select[1] && activated == 1;
      const filter11 = msg.createReactionCollector(filterzero, { timer: 1000 });
      var activate = false;

      filter11.on('collect', r => {
        var count = r.count;

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
          var userd = msg.guild.members.cache.get(msg.author.id);
          embed.setAuthor(userd.user.username, userd.user.displayAvatarURL);
          var embed2 = new Discord.MessageEmbed();
          embed2.setColor(select[2]);
          embed2.setDescription('Congrats, ' + userd.user.username + "'s message has earned the " + select[4] + '!');
          console.log('e');
          channel.send(embed2);
          setTimeout(function() {
            client.guilds.cache
              .get('239493425131552778')
              .channels.cache.get('529376959239815168')
              .send(embed);
          }, 5000);
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

module.exports.test = function(server) {}