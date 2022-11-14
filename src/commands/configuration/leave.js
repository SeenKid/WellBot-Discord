module.exports = {

    name: "config-aurevoir", 

    type: "interaction",

    prototype: "slash",

    code: `
$setServerVar[leave;$interactionData[options.data[0].value]] 


$interactionReply[<a:yes:938327388423589938> Le salon d'au revoir à correctement été configurer sur <#$interactionData[options.data[0].value]> !] 

$onlyPerms[admin; <a:no:938327205157699636> Vous n'êtes pas un administrateur !] 

$suppressErrors[<a:no:938327205157699636> Une erreur est survenue merci de correctement choisir un salon, si l'erreur continue à apparaître rejoignez mon support \`/support\`] `
   } 