module.exports = {

    name: "niveaux-off", 

    type: "interaction",

    prototype: "slash",

    code: `$setservervar[levelling;false]


$interactionReply[<a:yes:938327388423589938> Le système de niveaux a été **désactivé** avec succès !] 

$onlyPerms[admin; <a:no:938327205157699636> Vous n'êtes pas un administrateur !]

$suppressErrors[<a:no:938327205157699636> Une erreur est survenue, si l'erreur continue à apparaître rejoignez mon support \`/support\`]
`
   } 