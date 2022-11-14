module.exports = {

    name: "config-niveaux", 

    type: "interaction",

    prototype: "slash",

    code: `$setservervar[levelling;true]

$setservervar[level_channel;$interactionData[options.data[0].value]]

$interactionReply[<a:yes:938327388423589938> Le système de niveaux a correctement été **activé** et le salon de niveaux est désormais <#$interactionData[options.data[0].value]> !] 

$onlyPerms[admin; <a:no:938327205157699636> Vous n'êtes pas un administrateur !]

$suppressErrors[<a:no:938327205157699636> Une erreur est survenue merci de correctement choisir un salon, si l'erreur continue à apparaître rejoignez mon support \`/support\`]
`
   } 