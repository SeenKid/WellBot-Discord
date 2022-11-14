module.exports = {
    name: "slap", 
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{description: <@$interactionData[author.id]> gifle <@$interactionData[options.data[0].value]> 🤕}{color:RANDOM}{image:  $jsonRequest[https://nekos.life/api/v2/img/slap;url]}};;;;no] <@$interactionData[options.data[0].value]>
 `
   } 
