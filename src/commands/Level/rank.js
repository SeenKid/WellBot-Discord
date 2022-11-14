module.exports = {
    name: "rank", 
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{description: **__Niveaux de <@$interactionData[options.data[0].value]> !__**

<a:gg:939170834189275147> Top:
\`#$getLeaderboardInfo[rank;$interactionData[options.data[0].value];user;top]\`

<a:love3:936626331062517762> Niveaux:
\`$getUserVar[rank;$interactionData[options.data[0].value]]\`

<:urgence:936629340681150565> Avancement:
\`$getUserVar[exp;$interactionData[options.data[0].value]] / $getUserVar[req;$interactionData[options.data[0].value]]\`
}{color:RANDOM}{thumbnail:$userAvatar[$interactionData[options.data[0].value]]}};;;;no] 
$onlyif[$getservervar[levelling]==true;<a:no:938327205157699636> Le système de niveaux est désactiver sur le serveur !]

 
$suppressErrors[<a:no:938327205157699636> Une erreur est survenue, si cette dernière persiste merci de rejoindre mon support \`/support\` !] `
   } 
