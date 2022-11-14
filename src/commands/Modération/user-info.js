module.exports ={
    name: "user-info",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{color:BLUE} 

 {thumbnail: $userAvatar[$interactionData[options.data[0].value]]} 

{title: 🖌️ INFORMATIONS DE $username[$interactionData[options.data[0].value]]#$discriminator[$interactionData[options.data[0].value]] 🖌️} 

 
 {description: **⚡ Status Personnalisé**
$getCustomStatus[$interactionData[options.data[0].value]]

**💗 Photo de profil**
[Photo de profil\\]($userAvatar[$interactionData[options.data[0].value];2048;yes])

**💿 A rejoint le serveur le**:
$memberJoinedDate[$interactionData[options.data[0].value];$guildID;date]

🔝 **Rôle le plus élevé**:
<@&$highestRole[$interactionData[options.data[0].value]]>

📃 **Rôles**: $userRoles[$interactionData[options.data[0].value];$guildID;mention; | ]

✅ **Permissions**: $userPerms[$interactionData[options.data[0].value]]

 📛 **Pseudo**:
$username[$interactionData[options.data[0].value]]#$discriminator[$interactionData[options.data[0].value]]

💳 **ID**:
$interactionData[options.data[0].value]

🌈 **Status**:
$status[$interactionData[options.data[0].value]]

🔶 **Badges**:
$getUserBadges[$interactionData[options.data[0].value]]

🎂 **A créé son compte le**:
$creationDate[$interactionData[options.data[0].value];date] ($creationDate[$interactionData[options.data[0].value];time])}};;;;no ]` 


} 