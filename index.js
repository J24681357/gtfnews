const Discord = require("discord.js");
const client = new Discord.Client();
var gtf = process.env;
////////////////////////////////////////////////////
var extra = require("./functions/misc/f_extras");
var gtfuser = require("/home/runner/gtfnews/index");
var emote = require("/home/runner/gtfnews/index");
var fs = require("fs");
var gtftools = require("/home/runner/gtfnews/functions/misc/f_tools")
var gtfbot = JSON.parse(fs.readFileSync("./users/botconfig.json", "utf8"));
var actions = JSON.parse(fs.readFileSync("./config/actions.json", "utf8"));
module.exports.gtfbotconfig = actions;

client.commands = new Discord.Collection();
var date = new Date();

// Server Settings
var executions = 0;

const express = require('express');
const server = express();
server.all('/', (req, res) => {
  res.send('Your bot is alive!')
})

server.listen(3000, () => { console.log("Server is Ready!") });

client.on('rateLimit', (info) => {
  client.users.cache.get("237450759233339393").send("**RATE LIMIT DETECTED (NEWS BOT)**" + "\n\n" + JSON.stringify(info))
})

client.on("ready", () => {

  module.exports.update = client.emojis.cache
    .get("419605168510992394")
    .toString();
  module.exports.flag = client.emojis.cache
    .get("646244286635180033")
    .toString();
  module.exports.transparent = client.emojis.cache
    .get("666878765552369684")
    .toString();
 
  module.exports.hi = client.emojis.cache
    .get("434455411408502784")
    .toString();

  module.exports.bronze = client.emojis.cache
    .get("549169213676322857")
    .toString();
  module.exports.silver = client.emojis.cache
    .get("549169214200741889")
    .toString();
  module.exports.gold = client.emojis.cache
    .get("549167939807608832")
    .toString();

  module.exports.goldmedal = client.emojis.cache
    .get("683881057589657650")
    .toString();
  module.exports.silvermedal = client.emojis.cache
    .get("672660378047741982")
    .toString();
  module.exports.bronzemedal = client.emojis.cache
    .get("672715512937054208")
    .toString();
  module.exports.platinummedal = client.emojis.cache
    .get("683880404855291918")
    .toString();

  module.exports.redlightb = client.emojis.cache
    .get("638944391112818718")
    .toString();
  module.exports.yellowlightb = client.emojis.cache
    .get("638944449971617822")
    .toString();
  module.exports.greenlightb = client.emojis.cache
    .get("638944423056506880")
    .toString();
  module.exports.redlight = client.emojis.cache
    .get("638944403964035072")
    .toString();
  module.exports.yellowlight = client.emojis.cache
    .get("638944464853008404")
    .toString();
  module.exports.greenlight = client.emojis.cache
    .get("638944437996617728")
    .toString();

  module.exports.leftarrow = client.emojis.cache
    .get("635386925913735171")
    .toString();
  module.exports.rightarrow = client.emojis.cache
    .get("635386926312062976")
    .toString();
  module.exports.uparrow = client.emojis.cache
    .get("695112292987175012")
    .toString();
  module.exports.downarrow = client.emojis.cache
    .get("695112293167661126")
    .toString();


  module.exports.yes = client.emojis.cache.get("646994014658232320").toString();
  module.exports.tracklogo = client.emojis.cache
    .get("647254741990244372")
    .toString();
  module.exports.cargrid = client.emojis.cache
    .get("653716680781856781")
    .toString();
  module.exports.carright = client.emojis.cache
    .get("666873065413541929")
    .toString();
  module.exports.carrightblue = client.emojis.cache
    .get("667175771928002570")
    .toString();
  module.exports.exit = client.emojis.cache
    .get("654528554519756804")
    .toString();
  module.exports.gtflogo = client.emojis.cache
    .get("485339455339888640")
    .toString();
  module.exports.loading = client.emojis.cache
    .get("695112393021325392")
    .toString();
   module.exports.slowdown1 = client.emojis.cache
    .get("816068685717438485")
    .toString();
     module.exports.slowdown2 = client.emojis.cache
    .get("816068685688209419")
    .toString();

  module.exports.driftflag = client.emojis.cache
    .get("701499692877611139")
    .toString();

  module.exports.credits = client.emojis.cache
    .get("481849007145222154")
    .toString();
  module.exports.exp = client.emojis.cache.get("470270715900329985").toString();
  module.exports.mileage = client.emojis.cache
    .get("470270715682226178")
    .toString();
  module.exports.fpp = client.emojis.cache.get("642908988819636254").toString();

  module.exports.jaythefox = client.emojis.cache
    .get("733154452047134812")
    .toString();
  module.exports.gtlogowhite = client.emojis.cache
    .get("682139679919046667")
    .toString();
  module.exports.gtlogoblue = client.emojis.cache
    .get("485339455339888640")
    .toString();

  var emote = require("/home/runner/gtfnews/index");

  extra.loadfeeds(client);
  const http = require('http');
  const express = require('express');
  const app = express();
  app.get("/", (request, response) => {
    response.sendStatus(200);
  });
  app.listen(process.env.PORT);
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    console.log("Port")
  }, 280000);


  extra.caremotes(client);

  //setInterval(function() {
    extra.gtfstats(client)
  //}, 5 * 60 * 1000)

  setInterval(function() {
    extra.gtpstats("GTPlanet: GT7 Active Threads", "https://www.gtplanet.net/forum/board/gran-turismo-7/",1, client)
  }, 1800000)
  setInterval(function() {
    extra.gtpstats("GTPlanet: GT Sport Active Threads", "https://www.gtplanet.net/forum/board/gran-turismo-sport/", 2, client)
  }, 1860000)
    setInterval(function() {
    extra.gtpstats("GTPlanet: Auto News Active Threads", "https://www.gtplanet.net/forum/board/auto-news.103/", 3, client)
    }, 1920000)
      setInterval(function() {
    extra.gtpstats("GTPlanet: Cars In General Active Threads", "https://www.gtplanet.net/forum/board/cars-in-general.7/", 4, client)
      }, 1980000) 
  setInterval(function() {
    extra.gtpstats("GTPlanet: Motorsports Active Threads", "https://www.gtplanet.net/forum/board/motorsport.15/", 5, client)
  }, 2040000)

  extra.rainbowcolors(client)
  var role = client.guilds.cache.get(gtf.SERVERID).roles.cache.get('458024122857947148')
  role.members.map(
    m => m.roles.remove(role).catch(console.error)
  );

client.api.applications(gtf.USERID).guilds(gtf.SERVERID).commands.post({
  data: {
    name: 'penalty',
    description: 'Moderators Only | Gives a user a penalty/mute for a short time',
    options: [{
      "name": "user",
      "description": "Select a user you want to give a penalty",
      "type": 6,
      "required": true
      },
      {
      "name": "seconds",
      "description": "Type a number between 10 and 120 seconds",
      "type": 4,
      "required": true
      }
      ]
}
})
})


client.on("message", msg => {
  function activate() {
    var emojis = []

  /*if (msg.member.roles.cache.find(r => r.name === "Muted")) {
      msg.delete({})
  }*/
  if (msg.guild === null) {
    return
  } 
    extra.hi(emojis, msg);

    extra.checkgold(emojis, client, msg);
    var author = msg.author.id;
    var member = msg.guild.members.cache.get(author);

    if (msg.content.includes("@someone") & msg.attachments.size == 0) {
      var usernames = []
      msg.guild.members.fetch().then(r => {
        r.forEach(r => {
          usernames.push(r.user.username)
        })

        msg.channel.send(msg.content.replace(/@someone/, "**" + usernames[Math.floor(Math.random() * usernames.length)] + "**"))
      })

    }
    //e

    //gallaries
    
    extra.galleryreacts(emojis, msg);
   gtftools.ratelimitReactions(emojis, msg)
  }
    activate()

});

client.ws.on('INTERACTION_CREATE', async interaction => {
  interaction.guild = client.guilds.cache.get(interaction.guild_id)
   interaction.channel = client.channels.cache.get(interaction.channel_id)
   interaction.author = interaction.channel.guild.members.cache.get(interaction.member.user.id).user
    const args = interaction.data.options;
  if (args == undefined) {
    interaction.content = interaction.data.name.toLowerCase()
  } else {
    interaction.content = args.map(x => x["value"])
    interaction.content.unshift(interaction.data.name.toLowerCase())
    interaction.content = interaction.content.join(" ")
  }
  const embed = new Discord.MessageEmbed();
    embed.setColor(0x0151b0);

  const commandName = interaction.data.name.toLowerCase();

      client.api.interactions(interaction.id, interaction.token).callback.post({
    data: {
      type: 2
    }
  })

setTimeout(function(){
  try {
    if (commandName == "penalty") {
      if (interaction.author.id != "237450759233339393") {
        return
      }
  extra.penalty(client, interaction)
    }
  } catch (error) {
    var embed = new Discord.MessageEmbed();
    require(gtf.EMBED).error('❌ Unexpected Error', 'Oops, an unexpected error has occurred.\n' + '**' + error + '**', embed, interaction, {id:interaction.author.id});
    console.error(error);
  }
  return
  if (commandName === 'ping') {
  new Discord.WebhookClient(client.user.id, interaction.token).send("Pong!")
  return
  }
},200)
})



client.login(process.env.SECRET).then(function() {
  gtfuser.gtfbotconfig["executions"] = 0;
  gtfuser.gtfbotconfig["penalty"] = 0
  fs.writeFileSync(
    "/home/runner/gtfnews/users/botconfig.json",
    JSON.stringify(gtfuser.gtfbotconfig),
    function(err, result) {
      if (err) console.log("error", err);
    }
  );
  setTimeout(function() {

    //extra.test(client.guilds.cache.get("239493425131552778"))
    gtftools.interval(function() {
      extra.colorpickerjlicenseemotes(client);
    }, 2000, 1)
    gtftools.interval(function() {
      extra.settingsemotes(client);;
    }, 4000, 1)
    gtftools.interval(function() {
      extra.updatemanual(client);
    }, 6000, 1)

  }, 2000);
});