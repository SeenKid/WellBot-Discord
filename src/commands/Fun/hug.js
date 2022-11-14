module.exports = {
    name: "hug", 
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{description: <@$interactionData[author.id]> fait un câlin à <@$interactionData[options.data[0].value]> 🤗}{color:RANDOM}{image:  $jsonRequest[https://nekos.life/api/v2/img/hug;url]}};;;;no]
<@$interactionData[options.data[0].value]>`
   } 
