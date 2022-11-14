module.exports = {
    name: "feed", 
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{description: <@$interactionData[author.id]> donne à manger à <@$interactionData[options.data[0].value]> 😋}{color:RANDOM}{image:  $jsonRequest[https://nekos.life/api/v2/img/feed;url]}{footer: Justine c'est surtout pour toi mdr^^}};;;;no] <@$interactionData[options.data[0].value]>`
   } 
