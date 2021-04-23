var extra = require('/home/runner/gtfnews/functions/misc/f_extras');
const Discord = require('discord.js');
var gtf = process.env;
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
  console.log('Manual Updating....');
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
    ['🔺', 'PC']
  ];
  var message = `**🟦 Playstation 5
🔵 PlayStation 4
🔷 PlayStation 3
🟩 Xbox Series X
🟢 Xbox One
💚 Xbox 360
🟥 Nintendo Switch
🔺 PC

:question: You can add your own roles with the reactions below. You can mention these roles for those who have these consoles (or planning on).
:question: Role is added successfully if it toggles back to its previous number.**`;

  setTimeout(function() {extra.message(client, title, message, '', '', '437070477157072898', reactions, 1)}, 1000);


  var title2 = ':video_game: __**Games**__';
  var reactions2 = [
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
  var message2 = `**:zero: Assetto Corsa Competizione (Unlocks <#560741220213587968> | <#824106832070705202>)
:one: Assetto Corsa (Unlocks <#560741220213587968> | <#824106832070705202>)
:two: Burnout (Unlocks <#560741220213587968>)
:three: BeamNG Drive (Unlocks <#560741220213587968>)
:four: DiRT 5 (Unlocks <#560741220213587968>)
:five: Euro Truck Simulator 2 (Unlocks <#560741220213587968>)
:six: Gran Turismo 7 (Unlocks <#367099991862411265>)
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

  setTimeout(function() {extra.message(client, title2, message2, '', '', '437070477157072898', reactions2, 2)}, 2000)
  var title3 = '__**Channels**__';
  var reactions3 = [['🔞', '🔞-enabled'], ['🚙', '🚙-enabled'], ['1️⃣', '🏁-disabled'], ['2️⃣', '⚙-disabled']];
  var message3 = `**🔞 Enable 18+ Channels
:blue_car: Enable <#563191263650775052>
:one: Disable <#432667283031195648> & <#687872420933271577>
:two: Disable <#327526878791598080>

:question: These are some text channels/categories that you can enable/disable in GT Fitness.
:question: Role is added successfully if it toggles back to its previous number.**`;

  setTimeout(function() {extra.message(client, title3, message3, '', '', '437070477157072898', reactions3, 3)}, 3000)
  var title4 = '__**Miscellaneous**__';
  var reactions4 = [['🗄', 'Archives'], ['📅', 'Announcements'], ['🏁', 'Bot Updates'], ['🏆', '!dw Mode']];
  var message4 = `**🗄 Archives - Archives of older text channels in GT Fitness. (Unlocks 🗄 Archive Server Category)
:date: Announcements - Announcements about GT Fitness server.
:checkered_flag: Bot Updates - Updates of the GT Fitness server bot.
:trophy: Daily Workout Mode - Notifications for the !dw challenge command. (This is unavailable)

:question: These are miscellaneous settings in GT Fitness.
:question: Role is added successfully if it toggles back to its previous number.**`;

  setTimeout(function(){extra.message(client, title4, message4, '', '', '437070477157072898', reactions4, 4)}, 4000)
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
  
/*
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

    extra.feed('gtpnews', 'https://www.gtplanet.net/feed/', gtplist, 'GTPlanet', '310599531777622017', 9, client, 'https', true); */
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

    extra.feed('gtpnews', 'https://www.gtplanet.net/feed/', gtplist, 'GTPlanet', '310599531777622017', 9, client, 'https', true);
  }, 720000);

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

module.exports.galleryreacts = function(emojis, msg) {
  if (msg.guild === null) {
    return
  }
  if (msg.channel.name.includes('meme') && (msg.attachments.size >= 1 || msg.content.includes("https://") || msg.content.includes("http://"))) {
    emojis.unshift("👍")
    emojis.unshift("👎")
      return
  }
  if (msg.channel.name.includes('music') && (msg.attachments.size >= 1 || msg.content.includes("https://") || msg.content.includes("http://")) ) {
    emojis.unshift("🎵")
    return
  }
  if (msg.channel.name.includes('furry') && (msg.attachments.size >= 1 || msg.content.includes("https://") || msg.content.includes("http://"))) {
    var list = ["❤","🧡","💛","💚","💙","💜","🤎","🖤","🤍"]
    emojis.unshift(list[Math.floor(Math.random() * list.length)]);
    return
  }
    if (msg.channel.name.includes('updates')) {
    emojis.push("⭐");
    return
  }
  if (msg.channel.name.includes('photos') && (msg.attachments.size >= 1 || msg.content.includes("https://") || msg.content.includes("http://"))) {
    emojis.unshift('❤');
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
          var messagess = messages.filter(msg => msg.author.id == gtf.USERID);
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

module.exports.checkgold = function(emojis, client, message) {
  var list = [
        [emote.platinummedal, 'platinum', 0x91cae1, emote.platinummedal + ' __**Platinum Medal**__ ' + emote.platinummedal, '**Platinum Medal**', 8],
        [emote.goldmedal, 'gold', 0xffd700, emote.goldmedal + ' __**Gold Medal**__ ' + emote.goldmedal, '**Gold Medal**', 6],
        [emote.silvermedal, 'silver', 0xaaa9ad, emote.silvermedal + ' __**Silver Medal**__ ' + emote.silvermedal, '**Silver Medal**', 4],
        [emote.bronzemedal, 'bronze', 0xd2825f, emote.bronzemedal + ' __**Bronze Medal**__ ' + emote.bronzemedal, '**Bronze Medal**', 3],
      ];
      var index = Math.floor(Math.random() * list.length);
      var select = list[index];
      select[0] = select[0].split(':')[2];
      select[0] = select[0].slice(0, select[0].length - 1);

  if (message.guild === null) {
    return
  }
  var activated = 0;
  var chance = gtftools.randomInt(1, 200);
    if (message.channel.name.includes('debug')) {
      chance = 100
    }
  if (!message.channel.name.includes('lobby') || message.channel.name.includes('🔞') || message.channel.name.includes('mission') || message.author.id == gtf.USERID || chance != 100) {
    return;
  }

  var channelid = message.channel.id;
  var channel = client.guilds.cache.get('239493425131552778').channels.cache.get(channelid);
  if (chance) {
      emojis.push(select[0]);
  }

  channel.messages.fetch({ limit: 1 }).then(msg => {
    var msg = msg.first();
    var check = 0;
    if (chance) {
      activated += 1;

      var filterzero = (reaction, user) => reaction.emoji.name === select[1] && activated == 1;
      const filter11 = msg.createReactionCollector(filterzero, { time: 1000 * 180 });
      var activate = false;
      
    var timer = new Date()

      filter11.on('collect', r => {
        var count = r.count

        if (count == select[5] && !activate) {
          activate = true;
          var embed = new Discord.MessageEmbed();

          msg.attachments.forEach(attachment => {
            const url = attachment.url;
            embed.setImage(url);
          });
          embed.setTitle(select[3]);
          embed.setDescription(msg.toString());
          embed.setColor(select[2])
          var elapsed = gtftools.milltominandsecs(new Date() - timer)
          embed.addField('Author', '<@' + msg.author.id + '>', true);
          embed.addField('Channel', '<#' + channelid + '>', true);
          embed.addField('Time Elapsed', elapsed, true);
          embed.addField('Link', "https://discord.com/channels/" + "239493425131552778" + "/" + channelid + "/" + msg.id, true);
          var userd = msg.guild.members.cache.get(msg.author.id);
          embed.setAuthor(userd.user.username, userd.user.displayAvatarURL());
          var embed2 = new Discord.MessageEmbed();
          embed2.setColor(select[2]);
          embed2.setDescription('Congrats, ' + userd.user.username + "'s message has earned the " + select[4] + '!' 
          + "\n" + "**Time Elapsed:** " + elapsed);
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
      if (count >= select[5]) {
          activate = true;
          var embed = new Discord.MessageEmbed();

          msg.attachments.forEach(attachment => {
            const url = attachment.url;
            embed.setImage(url);
          });
          embed.setTitle(select[3]);
          embed.setDescription(msg.toString());
          embed.setColor(select[2]);
          
          var elapsed = gtftools.milltominandsecs(new Date() - timer)
          embed.addField('Author', '<@' + msg.author.id + '>', true);
          embed.addField('Channel', '<#' + channelid + '>', true);
          embed.addField('Time Elapsed', elapsed, true);
          embed.addField('Link', "https://discord.com/channels/" + "239493425131552778" + "/" + channelid + "/" + msg.id, true);
          var userd = msg.guild.members.cache.get(msg.author.id);
          embed.setAuthor(userd.user.username, userd.user.displayAvatarURL());
          var embed2 = new Discord.MessageEmbed();
          embed2.setColor(select[2]);
          embed2.setDescription('Congrats, ' + userd.user.username + "'s message has earned the " + select[4] + '!' 
          + "\n" + "**Time Elapsed:** " + elapsed);
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
          var doit = true
        setTimeout(function() {
          var filters = function(index) {
            var filterzero = (reaction, user) => reaction.emoji.name === reactions[index][0];
            const filter11 = msg.createReactionCollector(filterzero, { timer: 1000 });


            filter11.on('collect', r => {
              try {
                if (doit) {
                for (const user of r.users.cache.values()) {
                  if (user.id == gtf.USERID) {
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
                  if (useri.guild.roles.cache.some(r => r.name === "Games ")) {
                  } else {
                    useri.roles.add(msg.guild.roles.cache.find(r => r.name === "Games ================================")).catch(console.error)
                  }
                  if (useri.guild.roles.cache.some(r => r.name === "Settings ")) {
                  } else {
                    useri.roles.add(msg.guild.roles.cache.find(r => r.name === "Settings ================================")).catch(console.error)
                  }
                  if (useri.guild.roles.cache.some(r => r.name === "GTF Items ")) {
                  } else {
                    useri.roles.add(msg.guild.roles.cache.find(r => r.name === "GTF Items ==============================")).catch(console.error)
                  }


                  if (useri.roles.cache.find(r => r.name === reactions[index][1])) {
                    useri.roles.remove(role).catch(console.error);
                  } else {
                    useri.roles.add(role).catch(console.error);
                  }
                }
                
              doit = false
              var timer = setTimeout(function() {
            doit = true
          }, 5000)
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

module.exports.gtfstats = function(client) {
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
    var sum = Boolean(user.roles.cache.find(r => (r.name == "N ovice"))) + Boolean(user.roles.cache.find(r => (r.name == "B License"))) + Boolean(user.roles.cache.find(r => (r.name == "A License")))  + Boolean(user.roles.cache.find(r => (r.name == "IC License"))) + Boolean(user.roles.cache.find(r => (r.name == "IB License")))
 + Boolean(user.roles.cache.find(r => (r.name == "IA License"))) + Boolean(user.roles.cache.find(r => (r.name == "S License"))) + Boolean(user.roles.cache.find(r => (r.name == "J License"))) + Boolean(user.roles.cache.find(r => (r.name == "J2 License")))
    if (sum == 1) {
      novice++
    } else if (sum == 2) {
      b++
    } else if (sum == 3) {
      a++
    } else if (sum == 4) {
      ic++
    } else if (sum == 5) {
      ib++
    } 
     else if (sum == 6) {
      ia++
    } 
     else if (sum == 7) {
      s++
    } 
     else if (sum == 8) {
      j++
    } 
     else if (sum == 9) {
      j2++
    } else {   
      return false
    }
  })

  //////////
  var categories = server.channels.cache.filter((c) => c.type === "category").size;
  var text = server.channels.cache.filter((c) => c.type === "text").size;

   var list = [["**Total GTF Players:**",size], 
   ["**Novice Players:**", novice],
    ["**B Players:**", b],
     ["**A Players:**", a],
     ["**IC Players:**", ic], 
     ["**IB Players:**", ib], 
     ["**IA Players:**", ia],
     ["**S Players:**", s],
    ["**J Players:**", j],
      ["**J2 Players:**", j2], 
      [" ", " "],
    ["**Categories:**", categories], 
    ["**Text Channels:**", text]]

  var currentdate = new Date(); 
var datetime = "**Updated " + (currentdate.getUTCMonth()+1) + "/"
                +   currentdate.getUTCDate() + "/" 
                + currentdate.getUTCFullYear() + "**"

  extra.message(client, "__📊 GT Fitness Stats__", list.map(x => x.join(" ")).join("\n") + "\n\n" + datetime, '', '', '829404376413765642', "", 1)
  setTimeout(function(){
     var members = server.members.cache.array(); // Create an array with every member
var latest = members.sort((a, b) => b.joinedAt - a.joinedAt)[0]
/*var channel = server.channels.cache.get("239493425131552778");
var count = 0
channel.messages.fetch({}).then(msg => msg.forEach(m=>{count++})).then(function(){
  console.log(count)
})*/

list = [
  ["**Latest Member:**", "<@" + latest.user.id + ">"]
  ]
    extra.message(client, "__📊 GT Fitness Stats__", list.map(x => x.join(" ")).join("\n") + "\n\n" + datetime, '', '', '829404376413765642', "", 2)
  }, 1000)
}

module.exports.hi = function(emojis, msg) {
  if (msg.content.length == 2 &&(msg.content == "hi" || msg.content == "Hi")) {
    emojis.push(emote.hi.split(":")[2].split(">")[0])
    return
  }
  if (msg.content.length == 3 && (msg.content == "hi!" || msg.content == "Hi!")) {
    emojis.push(emote.hi.split(":")[2].split(">")[0])
    return
  }
};
module.exports.gtpstats = function(name, url, index, client) {
  console.log("GTP Stats Updated!")
var axios = require("axios")
    axios.get(url).then((response) => {
      var data = response["data"]
    var usernames = data.split("<a href=\"members").map(x=> x.split("</span></a></dd>\n")[0]).filter(x=> x.includes("title=\"Thread starter\"")).map(function(x) {
      var name = x.split("dir=\"auto\" title=\"Thread starter\">")[1].split("</a><span")[0]
      return name
    }).splice(2,10)

  var gtp = data.split("<h3 class=\"title\">").map(x => x.split("</h3>")[0]).filter(x=>x.includes("data-previewUrl=")).map(function(x){
    var name = x.split("data-previewUrl=\"\">")[1].split("</a>")[0]
    var link = x.split("<a href=\"")[1].split("\" t")[0]
    return [name.replace(/&quot;/g, '"').replace(/&amp;/g, "&"), "https://www.gtplanet.net/forum/" + link]
  }).splice(2,10)
  first(usernames, gtp)
   })
  
  function first(usernames, gtp) {
    var threads = gtp.map(x => "[" + x[0] + "](" + x[1] + ")")
    var desc = threads.map(function(e, i) {
  return [e, usernames[i]].join("\n OP: ");
})
    var currentdate = new Date(); 
var datetime = "**Updated " + (currentdate.getUTCMonth()+1) + "/"
                +   currentdate.getUTCDate() + "/" 
                + currentdate.getUTCFullYear() + "**"
    desc.push("\n" + datetime)
  extra.message(client, "__**" + name + "**__", desc.join("\n"), "0x808080", "", '802245013287206942', [], index);
  }
}

module.exports.rainbowcolors = function(client) {
  var colors = [0xFF0000, 0xFF7F00,0xFFFF00,0x00FF00,  0x0000FF, 0xBA5CE3,0x4B0082]
var role = client.guilds.cache.get(gtf.SERVERID).roles.cache.find(r => r.name === "J24681357 License");
var index = 0

setInterval(function(){
  if (index >= colors.length) {
    index = 0
  }
  role.edit({
        color: colors[index]
      })
    index++
}, 10 * 1000)

}

module.exports.penalty = function(client, msg) {
  var author = msg.channel.guild.members.cache.get(msg.member.user.id)
  var embed = new Discord.MessageEmbed();
  if (gtfuser.gtfbotconfig["penalty"] >= 1) {
    require(gtf.EMBED).error('❌ One Penalty At A Time', 'A penalty is already in progress.', embed, msg, {id:msg.author.id});
    return
  }
   if (!author.roles.cache.find(r => r.name === "Moderators")) {
    require(gtf.EMBED).error('❌ Penalty Invalid', 'Only moderators can give out penalities.', embed, msg, {id:msg.author.id});
    return
  }
  var user = client.guilds.cache.get(gtf.SERVERID).members.cache.get(msg.data.options[0]["value"])
  var time = parseInt(msg.data.options[1]["value"])
var role = client.guilds.cache.get(gtf.SERVERID).roles.cache.find(r => r.name === "Muted");

  if (user.roles.cache.find(r => r.name === "Moderators")) {
    require(gtf.EMBED).error('❌ Penalty Invalid', 'Penalties can not be given to moderators.', embed, msg, {id:msg.author.id});
    return
  }
  if (user.user.bot) {
    require(gtf.EMBED).error('❌ Penalty Invalid', 'Penalties can not be given to bots.', embed, msg, {id:msg.author.id});
    return
  }
  embed.setColor(0xff0000);
  if (!gtftools.betweenInt(time, 10, 300)) {
    require(gtf.EMBED).error('❌ Penalty Invalid', 'Penalties must be between 10 and 300 seconds.', embed, msg, {id:msg.author.id});
    return
  }
  
  embed.setDescription(emote.slowdown1 + emote.slowdown2 + " **" + "<@" + user.id + "> " + "| Penalty +" + time + ".000" + "** " + emote.slowdown1 + emote.slowdown2)
  gtfuser.gtfbotconfig["penalty"]++
  msg.channel.send("<@" + user.id + ">",embed)

setTimeout(function() {
user.roles.add(role).catch(console.error)
setTimeout(function(){

user.roles.remove(role).catch(console.error)
 gtfuser.gtfbotconfig["penalty"] = 0
}, time * 1000)
}, 1*1000)
}
