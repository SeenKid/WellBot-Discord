module.exports ={

 name: "avatar",

type: "interaction",

 

 prototype: "slash",

 

 code: `
$interactionReply[Voici [votre avatar] ($userAvatar[$interactionData[author.id]]) <@$interactionData[author.id]> !]

$onlyIf[$findNumbers[$interactionData[options.data[0].value]];$interactionReply[Voici [l'avatar]($userAvatar[$interactionData[options.data[0].value]]) de \`$userTag[$interactionData[options.data[0].value]]\` !]]
$suppressErrors[<:no:936628470757347368> Une erreur est survenue, veillez ressayer,
Si l'erreur se produit de nombreuses fois merci de rejoindre notre support avec \`/support\` !] `
} 