module.exports = {
    name: 'daily', 
    type: "interaction", 
    prototype: "slash", 
    code: `
$interactionReply[;{newEmbed: {title: Daily}{description: Vous avez gagné \`$getUserVar[txp]xp\`
Votre xp actuel est de \`$getUserVar[exp]\`!}{color:RANDOM}{thumbnail: $authoravatar}};;;;no]
$wait[1s]
$setUserVar[exp;$sum[$getUserVar[exp];$getUservar[txp]]]
$wait[1s]
$setUserVar[txp;$random[50;300]] 

$cooldown[24h;{newEmbed: {title: Cooldown} {color:RED} {description: <a:no:938327205157699636> Merci de patienter **%time%** avant de refaire la commande}}]

$onlyif[$getservervar[levelling]==true;<a:no:938327205157699636> Le système de niveaux est **désactivé**]`
}