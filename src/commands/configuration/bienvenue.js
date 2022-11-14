module.exports = {

    name: "config-bienvenue", 

    type: "interaction",

    prototype: "slash",

    code: `$setServerVar[autorole;$interactionData[options.data[1].value]]
$setServerVar[bvn;$interactionData[options.data[0].value]] 


$interactionReply[<a:yes:938327388423589938> Le salon de bienvenue à correctement été configurer sur <#$interactionData[options.data[0].value]> et le rôle $interactionData[options.data[1].value] sera désormais attribué automatiquement au nouveaux !] 

$onlyPerms[admin; <a:no:938327205157699636> Vous n'êtes pas un administrateur !] 

$suppressErrors[<a:no:938327205157699636> Une erreur est survenue merci de correctement choisir un salon, si l'erreur continue à apparaître rejoignez mon support \`/support\`] `
   } 