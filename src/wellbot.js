 const aoijs = require('aoi.js');

 const bot = new aoijs.Bot({

   token: "",

   prefix: "!",

   intents: "all"

  });

bot.onMessage() //enables bot to see messages (required for executing Commands)
 const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"../src/commands")

bot.variables({
logo: "https://cdn.discordapp.com/avatars/936707500416319509/3386b19100e9c97376c9972d29ed5e47.png?size=256",
    bvn: "", 
    autorole: "a", 
    levelling:"false",
    txp: "", 
  level_msg:"{user.mention}, vous êtes désormais au niveau **__{level}__** ! <a:gg:939170834189275147> <a:gg:939170834189275147>",

  level_channel:"",

  
  level_order:"",

  exp:"0",

  level_card:"https://wallpapercave.com/wp/wp2704825.jpg",

  level_msges:"",

  level_morder:"",

  req:"100",

  rank:"0",
    leave: "", 
    status: "Coucou toi 👋", 


})
 

bot.status({

  text: "/help | dans $serverCount serveurs !",

  type: "PLAYING",
 
  time: 12

})

bot.status({

  text: "$getVar[status] ",

  type: "PLAYING",

  time: 12

})

bot.onInteractionCreate();

const voice = new aoijs.Voice(bot, {

  cache: {

    cacheType: "Memory",//Disk | None

    enabled: true,

  },

}); 

bot.joinCommand({

 channel: "$getServerVar[bvn]",

 code: `

<@$authorID>

$title[1;🎉 Quelqu'un vient de rejoindre ! 🎉]

$description[1;<a:Hey:936626241950322688> Bienvenue à **$userTag[$authorID]** sur **__$serverName__** !

On est désormais $membersCount !]

$footer[1;Passe un agréable moment parmi nous ! 💗] 

$color[1;RANDOM] 

$thumbnail[1;$userAvatar[$authorID] 
 
$giveRoles[$guildID;$authorID;$getServerVar[autorole]]
$suppressErrors
`
   }) 
bot.onJoin()

bot.leaveCommand({
channel: "$getServerVar[leave]",
code: `$title[1;😢 Un membres vient de partir ! 😢] 
$description[1;😭 **$userTag[$authorID]** vient de quitter **__$serverName__** !

On est désormais $membersCount !]
$thumbnail[1;$userAvatar[$authorID] 
$color[1;RANDOM]
 $footer[1;Au revoir j'espère !] 
`
   }) 

bot.onLeave()

 
voice.trackStartCommand({

    channel: "$channelID", 

    code: `$title[1;🎵 Entrain de jouer une musiques]

$description[1;<a:music:945236918256402443> Nom :
**$songInfo[title]**

<a:flamerose:945236867102674954> Durée :
**$humanizeMS[$songInfo[duration];;s]**

<a:cur:945236850539388928> Chanteur(se):
**$songInfo[author]**

]

$color[1;RANDOM]
$thumbnail[1;$songInfo[thumbnail]]


`

})

voice.onTrackStart() 
