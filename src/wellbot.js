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


bot.command({
    name: 'anniversaire', 
    code: `$color[1;RANDOM]
$description[1;**🎂 JOYEUX ANNIVERSAIRE JUSTINE !!!! 🎂**

Coucou Justine, Aujourd'hui c'est un jour spécial, même si tu le fête pas, on avait envie de te remercier pour tout ce que tu fais chaque jour pour nous, tes une amie et une très bonne pour certain, chaque jour t'illumine notre journée. 
On sais tous rassembler, pour te faire un petit mot chacun en espérant que sa te plaise !

**__De la part d'Arthur__ :**

Je ne sais pas si tu sais toute l’importance que tu as pour moi. Je réalise combien je suis chanceux/se de te compter parmi mes meilleurs amis. Tu as toujours les mots pour me faire rire ou me consoler. Tu restes la personne dont je me sens la plus proche et à qui je peux tout dire. Je sais que tu ne me jugeras jamais et que tu chercheras toujours à m’aider qu’importe la situation. Ton amitié est précieuse et indispensable à mon bonheur.


**__De la part de Gigi__ :**

Je te souhaite un joyeux anniversaire jujuuuu profite un max de cette journée si spécial en se jour je te souhaite également que du bonheur a toi et a ta famille reste positive et je t'encourage a profiter de la vie :partying_face:


**__De la part de Rosie et amira__ :**

En ce jour spécial nous voulons te rappeler à quel point tu comptes pour nous . Depuis que nous te connaissons nous t 'adorons et te considérons comme étant notre soeur .  Nous voulons te rappeler que tu es une personne exeptionelle et que nous avons beaucoup de chance de t'avoir , dès notre rencontre nous avons vu que de qualités en toi . En si peu de temps tu es devenue notre famille et tu as pris une énorme place dans notre coeur .


**__De la part de Wawan__ :**

Joyeux anniv Juju tu reste une super pote t'es sympa et tous bref passe la meilleure journée de ta vie elle t'est dédié alors profite au max

**__De la part de Sarah__ :**

Joyeux anniversaire Justine, tu pourras toujours compter sur moi


**__De la part D'oxi__ :**

Bonne anniversaire maman, c'est beau tu va avoir 15 ans :clapwink:, on ne ce connais pas depuis très longtemps mais je sait que tu es une très bonne amie que tout le monde rêve d'avoir, a des moments t'es drôle mais à d'autres non tu comprends pourquoi 😂, on a rigolé ensemble comme la dernière fois où tu disais que c'était satisfaisant de donné des coups de couteau 😂 😂. Bref bonne anniversaire Juju :partying_face:

Signé ton fils préféré 😏:sunglasses:


**__De la part de loulou__ :**

C’est assez rare de pouvoir être soi-même avec une autre personne qu’un membre de sa famille ou la personne qu'on aime. C’est une belle opportunité offerte de se sentir à l'aise avec une personne que je n'es jamais vus en vrai...

Alors je t'es écrit ce mot pour te dire à qu'elle point tu compte pour moi tu es sans doute une des plus belles personnes que je connaisse,une de mes meilleures amies....

Signaler Loulou_l'allemande 🇩🇪

**Et finalement**
**__De la part de Raph__ :**

Coucou Justine,je sais que tu fetes pas ton anniversaire mais je voulais te dire ,combien tu compte a nos yeux, Je vais pas ecrire un discours,car franchement même si j'écris 10000 ligne je pourrais pas te dire combien tu comptes réellement à mes yeux,1an et 4 mois qu'on se connait(j'ai pas du tout check la date où on est devenue ami,je vois pas de quoi tu parle mdrr) et on est deja aussi proche mdr, t'es tout pour moi, si je suis énervé je sais que je peux te parler, je serais toujours là pour toi sache le, je te considère pas comme ma sœur, toi même tu sais pourquoi 😂, mais bon t'es l'a des personnes qui compte le plus pour moi. 

Joyeux anniversaire ma meilleure amie^^

prend soins de toi bisous je taime 😋 🎂 💗💗

**Voilà en espérant que sa te plaise, de la part de tout le monde !**]
 
$image[1;https://cdn.discordapp.com/attachments/944192569674453042/944303437649154068/16452098731431354037987.jpg] 
$thumbnail[1;https://cdn.discordapp.com/avatars/759357189529534485/3aad9881da8a76980ee5cb188e7c93ea.webp] 
$addReactions[🎂;🎉;💗]
$onlyForIDs[759357189529534485;762772346620608524;seul Justine peut la faire pas toi^^] 
`
   })

 
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

   




