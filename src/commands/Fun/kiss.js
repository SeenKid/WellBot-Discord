module.exports = {
    name: "kiss", 
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{description: <@$interactionData[author.id]> embrasse <@$interactionData[options.data[0].value]> ❤️}{color:RANDOM}{image:  $jsonRequest[https://nekos.life/api/v2/img/kiss;url]}};;;;no] <@$interactionData[options.data[0].value]>`
   } 
