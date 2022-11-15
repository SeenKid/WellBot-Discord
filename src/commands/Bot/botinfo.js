module.exports = {
    name: "bot-info", 
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{title:❤️ INFORMATIONS ❤️}{description:
__**WELLBOT**__


💗 [Serveur support](https://discord.gg/9CUehmUcxr)

💻 CPU: $cpu%

💻 Model CPU: $djsEval[require ('os').cpus()[0].model;yes]

🏓 Ping: $pingms

⏱️ Uptime: $uptime
 
👥 Nombre de membres: $allMembersCount

🎚️ Nombre de serveurs: $serverCount

🏅 Nombres des salons: $allChannelsCount

🚦 Ram: $ram MB/32GB

🐧 Platform: $replaceText[$djsEval[require ('os').platform();yes]; 🐧 Linux;-1]

👑 Développeur: **sorrow#9230**} {color:RANDOM}{thumbnail:$getServerVar[logo]} };;;;no] `
   } 
