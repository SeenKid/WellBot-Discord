module.exports ={

 name: "dm",

 type: "interaction",
 
 prototype: "slash",
 
 code: `$sendDM[{newEmbed:{title:💌 Message Officiel 💌}{description: Vous venez de recevoir un message officiel de l'équipe de WELLBOT !}{field:Message:$interactionData[options.data[1].value]}};$interactionData[options.data[0].value]]
$suppressErrors[<a:no:938327205157699636> Une erreur est survenue, On dirait que la personne n'accepte pas les **MP**. 
Si le problème viens du bot, merci de rejoindre mon support pour régler le problème en faisant \`/support\`
 $interactionReply[<a:yes:938327388423589938> Message envoyé avec succès à **__<@$interactionData[options.data[0].value]>__**. Message: **$interactionData[options.data[1].value]**;;;;;true]
$onlyForIDs[762772346620608524;804450056036024400;<a:no:938327205157699636> Vous n'êtes pas mon créateur !] 
 `

}  

