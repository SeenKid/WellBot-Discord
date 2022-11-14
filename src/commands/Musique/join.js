



module.exports = [{

name: "join",
type: "interaction", 
prototype: "slash", 
 code: `

$interactionReply[<a:yes:938327388423589938> J'ai correctement rejoint le salon : 
<#$voiceID[$authorID]>] 

$joinVC[$voiceID[$authorID]]

$onlyIf[$voiceID[$authorID]!=;<a:no:938327205157699636> Merci de rejoindre un salon vocal] 


`

}] 



