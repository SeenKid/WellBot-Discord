module.exports = {
    name: "bot-info", 
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{title:โค๏ธ INFORMATIONS โค๏ธ}{description:
__**WELLBOT**__


๐ [Serveur support](https://discord.gg/9CUehmUcxr)

๐ป CPU: $cpu%

๐ป Model CPU: $djsEval[require ('os').cpus()[0].model;yes]

๐ Ping: $pingms

โฑ๏ธ Uptime: $uptime
 
๐ฅ Nombre de membres: $allMembersCount

๐๏ธ Nombre de serveurs: $serverCount

๐ Nombres des salons: $allChannelsCount

๐ฆ Ram: $ram MB/32GB

๐ง Platform: $replaceText[$djsEval[require ('os').platform();yes]; ๐ง Linux;-1]

๐ Dรฉveloppeur: **sorrow#9230**} {color:RANDOM}{thumbnail:$getServerVar[logo]} };;;;no] `
   } 
