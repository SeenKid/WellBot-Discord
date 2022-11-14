module.exports = {
    name: "8ball", 
    type: "interaction", 
    prototype: "slash", 
    code: `$interactionReply[;{newEmbed: {description: **__8ball__**

❓ Question :
\`$interactionData[options.data[0].value]\`

<a:love:936625343828213850> Ma réponse :
\`$randomText[Oui;Non;C'est certain;Arrête de rêver;Je valide;C'est ton destin;Ça sera difficile mais tu arrivera;Je pense que non;Je pense que oui;Même pas en rêve;C'est se que ma boule me dit donc c'est vrai;À 100%;Bien sûr que oui;Bien sûr que non;Jamais;C'est déjà fait ou en cours] !\`} {color:RANDOM} {thumbnail: $userAvatar[$interactionData[author.id]]}}
$suppressErrors[<a:no:938327205157699636> Une erreur est survenue, rejoin mon support si sa se reproduit \`/support\`] 
`

} 

