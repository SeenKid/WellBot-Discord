module.exports = ({

name:"$alwaysExecute",

code:`



$textsplit[$getservervar[level_order];/]

$setuservar[rank;$sum[$getuservar[rank];1]]

$setUserVar[req;$truncate[$sum[$getuservar[req];$math[$getuservar[req]*1/2]]]]

$setuservar[exp;0]

$channelsendmessage[$replacetext[$replacetext[$checkcondition[$getservervar[level_channel]==];true;$channelid];false;$getservervar[level_channel]];$replacetext[$replacetext[$replacetext[$get[msg];{user.name};$username];{user.mention};<@$authorID>];{level};$sum[$getUserVar[rank];1]]]

$let[msg;$getservervar[$replacetext[$replacetext[$checkcondition[$findtextsplitindex[$sum[$getuservar[rank];1]]==0];true;level_msg];false;level_msges]]]

$textsplit[$getservervar[level_morder];/]

$onlyIf[$getUserVar[exp]>=$getUserVar[req];]
$suppressErrors
$onlyif[$getservervar[levelling]==true;]

`})