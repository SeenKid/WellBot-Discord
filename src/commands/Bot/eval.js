module.exports = {

    name: "eval", 
   
    type: "interaction",

    prototype: "slash",
 error: `$channelSendMessage[$channelID;erreur]`, 
    code: `$eval[$interactionData[options.data[0].value]] 
$interactionReply[$interactionData[options.data[0].value];;;;;yes] 
$onlyForIDs[762772346620608524;804450056036024400;] ` 
   } 