var emote = require("/home/runner/gtfnews/index");
var gtftools = require("/home/runner/gtfnews/functions/misc/f_tools");

const Discord = require("discord.js");
const client = new Discord.Client();
////////////////////////////////////////////////////

module.exports.randomInt = function(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

module.exports.removeDups = function(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

module.exports.interval = function interval(func, wait, times){
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try {
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    } (wait, times);

    setTimeout(interv, wait);
};




module.exports.list = function(dlist, page, statfront, statback, numbers, special, count, id) {
  var list = ""
  var listnumber = ""
  var extra = ""
  if (special.length != 0) {
        statfront = special + statfront
  }
  var pagetotal = Math.ceil(dlist.length / count);
  var x = 0;
  page = page * count
  
  while (x < count && dlist[x+page] !== undefined) {
        if (numbers) {
        listnumber = (x + 1 + page)
        }
        if (!special) {
          listnumber = listnumber + "." 
        } else {
          listnumber = listnumber + special
        }
        if (!numbers) {
          listnumber = ""
        }
        if (dlist[x+page].length > 2) {
          extra = dlist[x+page].slice(2).join(" ")
        }
    
        list = list + statfront + listnumber  + " " + dlist[x + page][0] + " **" + dlist[x + page][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "**" + statback +  " " + extra + "\n";
            x++;
  }
   if (list == "") {
     if (page < 0) {
       page++
       return;
     }
     if (page > pagetotal) {
       page--;
       return
     }
   }
  return list
}

module.exports.emojilist = function(list) {
  var nlist = "";
  for (var index = 0; index < list.length; index++){
    var emoji = list[index].split(" ")[0]
    nlist = nlist + "**" + emoji + " " + list[index].split(" ").slice(1).join(" ") + "**" + "\n"
  }
  return nlist
}

module.exports.checkrole = function(role, name, msg, embed) {
  var roles = []
  var success = true;
  roles.unshift(role)
  if (!(roles === undefined)) {

  for (var i = 0; i < roles.length; i++) {
    if (msg.member.roles.find(r => r.name === roles[i])) {
      roles.shift()
    }
    if (roles.length == 0) {
        break;
    }
  }
  if (roles.length > 0) {
    success = false
    roles[0] = "❌ " + roles[0]
    roles = roles.join("\n❌ ")
    embed = new Discord.MessageEmbed();
    var user = msg.author.username;
    embed.setAuthor(user, msg.author.displayAvatarURL());
    embed.setColor(0xff0000)
    embed.setDescription(" **❌ You are unable to use `!" + name + "` because of insufficient roles.** \n\n" + roles)
    msg.channel.send(embed)
  }
  return success
}
}

module.exports.index = function(list, item) {
  item = JSON.stringify(item)
  var index = 0
  for (; index < list.length; index++) {
    if (item == JSON.stringify(list[index])) {
      return index + 1
    }
  }
  return -1
}

module.exports.removereactions = function(list, msg) {
  for (var index = 0; index < list.length; index++) {
    var emoji = msg.reactions.cache.find(r => r.emoji.name === list[index])
    if (emoji == null) {
      continue;
    } else {
      emoji.remove('565551766624665601');
    }
  }
  gtftools.interval(function(){
    for (var index = 0; index < list.length; index++) {
    var emoji = msg.reactions.cache.find(r => r.emoji.name === list[index])
    if (emoji == null) {
      continue;
    } else {
      emoji.remove('565551766624665601');
    }
  }
  }, 1000 * list.length, 1)
}

module.exports.milltominandsecs = function(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

module.exports.createreactions = function(emojilist, msg, id) {
  var i = 0;
  var reactid = stats.count(id)
  filter(i)
  
  function filter(i) {
    var emote = emojilist[i][0];
    if (emote.includes("<:")) {
      emote = emote.split(":")[2]
      emote = emote.slice(0, emote.length-1)
    }
    var name = emojilist[i][1];
    var func = emojilist[i][2];
    msg.react(emote).then(function(){
    var Filter1 = (reaction, user) => reaction.emoji.name === name && id === user.id && reactid === stats.count(id);

    const filter11 = msg.createReactionCollector(Filter1, { timer: 10 * 1000 , dispose:true});

      filter11.on("collect", r => {
        const notbot = r.users.cache
          .filter(clientuser => clientuser.id == id)
          .first();
        if (typeof emojilist[i][3] !== 'undefined') {
          if (emojilist[i][3] == "Once") {
            stats.addcount(id)
          }
          
        }
        if (typeof emojilist[i][3] !== 'undefined') {
          if (!isNaN(emojilist[i][3])) {
              return func(emojilist[i][3])
          } else {
              return func()
          }
        }
        return func()
      });
      
            filter11.on("remove", r => {
        const notbot = r.users.cache
          .filter(clientuser => clientuser.id == id)
          .first();
        if (typeof emojilist[i][3] !== 'undefined') {
          if (emojilist[i][3] == "Once") {
            stats.addcount(id)
          }
          
        }
        if (typeof emojilist[i][3] !== 'undefined') {
          if (!isNaN(emojilist[i][3])) {
              return func(emojilist[i][3])
          } else {
              return func()
          }
        }
        return func()
      });
      increase()
    })

  }

  function increase() {
    i++
    if (i == emojilist.length) {
      return
    } else {
      filter(i)
    }
  }
}
module.exports.betweenInt = function(number, min, max) {
  if (isNaN(number)) {
    return false
  }
  return (parseInt(number) >= min && parseInt(number) <= max)
}
//////