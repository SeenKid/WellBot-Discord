






module.exports = [{

name: "leave",
prototype: "slash", 
type: "interaction", 
 code: `

$leaveVC

$onlyIf[$voiceID[$clientID]!=;<a:no:938327205157699636> Je me suis déjà déconnecté du salon]

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];<a:no:938327205157699636> Vous n'êtes pas dans le même salon que moi]

$onlyIf[$voiceID[$authorID]!=;<a:no:938327205157699636> Merci de rejoindre un salon vocal]

$interactionReply[<a:yes:938327388423589938> J'ai correctement quitte le salon vocal] 
`

    
}] 