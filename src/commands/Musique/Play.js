module.exports = {

name: "play",
prototype: "slash", 
type: "interaction", 
$if: 'v4',

code:  `


$if[$voiceID[$clientID]==$voiceID]

 $playerConfig[yes;1m]



$interactionReply[**<a:music:945236918256402443> $interactionData[options.data[0].value] a correctement était ajouté au queue !**] 



]

 



$color[1;RANDOM] 

$let[a;$playTrack[youtube;$interactionData[options.data[0].value]]] 

$else

 



$interactionReply[**<a:music:945236918256402443> $interactionData[options.data[0].value] a correctement était ajouté au queue**]

 
$playerConfig[yes;1m]

$color[1;RANDOM] 

$let[a;$playTrack[youtube;$interactionData[options.data[0].value]]] 

$joinVc

$endif

$suppressErrors[<a:no:938327205157699636> Une erreur est survenue]

$onlyIf[$voiceID[$authorID]!=;<a:no:938327205157699636> Merci de rejoindre un salon vocal] 

`

}   

