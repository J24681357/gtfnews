const Discord = require("discord.js");
const client = new Discord.Client();
var gtffile = process.env;
////////////////////////////////////////////////////
var extra = require("/app/functions/misc/f_extras");
var gtfuser = require("/app/index");
var emote = require("/app/index");
var fs = require("fs");
var gtftools = require("/app/functions/misc/f_tools")

client.commands = new Discord.Collection();
var date = new Date();

var gtfbot = JSON.parse(fs.readFileSync("./users/botconfig.json", "utf8"));
module.exports.gtfbotconfig = gtfbot;

// Server Settings
var executions = 0;

https://gtswiki.gt-beginners.net/decal/?searchword=gts&type=0&noid=1


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
  module.exports.s1 = client.emojis.cache.get("666878765552369684").toString();
  module.exports.s1r1 = client.emojis.cache
    .get("674172865087799296")
    .toString();

  module.exports.s2 = client.emojis.cache.get("673749991940161546").toString();
  module.exports.s2r1 = client.emojis.cache
    .get("674172864555122709")
    .toString();

  module.exports.s3 = client.emojis.cache.get("673749992007270420").toString();
  module.exports.s3r1 = client.emojis.cache
    .get("674172864890535936")
    .toString();

  module.exports.c142 = client.emojis.cache
    .get("673938767316516880")
    .toString();

  module.exports.c242 = client.emojis.cache
    .get("673938767329099806")
    .toString();
  module.exports.c242r1 = client.emojis.cache
    .get("674130136865701888")
    .toString();
  module.exports.c242r2 = client.emojis.cache
    .get("674355507867418654")
    .toString();
  module.exports.c242r3 = client.emojis.cache
    .get("674355507955499008")
    .toString();
  
  module.exports.c342 = client.emojis.cache
    .get("673938767190687745")
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
  module.exports.diamondmedal = client.emojis.cache
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

  module.exports.greensquare = client.emojis.cache
    .get("648557360587079740")
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
    .get("561743692059246592")
    .toString();
  module.exports.gtlogowhite = client.emojis.cache
    .get("682139679919046667")
    .toString();
  module.exports.gtlogoblue = client.emojis.cache
    .get("485339455339888640")
    .toString();

  var emote = require("/app/index");

  extra.loadfeeds(client);

  const http = require('http');
const express = require('express');
const app = express();
  console.log("d")
  app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
  });
  app.listen(process.env.PORT);
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    console.log("Port")
  }, 280000);
  


  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("message", msg => {
  function activate() {
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
  extra.galleryreacts(msg);
  //emotes
  extra.checkgold(client, msg);
  //gtscaremotes
  extra.caremotes(client);
  }
  gtfuser.gtfbotconfig["executions"]++;
      fs.writeFile(
      "/app/users/botconfig.json",
      JSON.stringify(gtfuser.gtfbotconfig),
      function(err, result) {
        if (err) console.log("error", err);
      }
    );
    if (gtfuser.gtfbotconfig["executions"] >= 3) {
      console.log("WAITING");
      setTimeout(function() {
        activate(),
          1000 * gtfuser.gtfbotconfig["executions"];
        gtfuser.gtfbotconfig["executions"]--;
            fs.writeFile(
      "/app/users/botconfig.json",
      JSON.stringify(gtfuser.gtfbotconfig),
      function(err, result) {
        if (err) console.log("error", err);
      }
    );
      });
    } else {
      activate()
      if (gtfuser.gtfbotconfig["executions"] == 1) {
        setTimeout(function() {
          gtfuser.gtfbotconfig["executions"] = 0
          fs.writeFile(
      "/app/users/botconfig.json",
      JSON.stringify(gtfuser.gtfbotconfig),
      function(err, result) {
        if (err) console.log("error", err);
      }
    );
        }, 5000);
      }
    }
});

client.login(process.env.SECRET).then(function() {
   gtfuser.gtfbotconfig["executions"] = 0;
      fs.writeFile(
      "/app/users/botconfig.json",
      JSON.stringify(gtfuser.gtfbotconfig),
      function(err, result) {
        if (err) console.log("error", err);
      }
    );
  setTimeout(function() {
    

    extra.test(client.guilds.cache.get("239493425131552778"))
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