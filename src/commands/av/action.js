module.exports = {
    name: "action", 
    type: "interaction", 
    prototype: "slash", 
    code: ` $interactionReply[ok, <@$interactionData[author.id]>, 
Tu voudrais choisir une** action **pour **$usertag[$interactionData[options.data[0].value]]** 
Oh j'ai une idée d'action ! 
**$randomText[Envoie je t'aime à la première personne dans tes mp;Mange 1 piment;Fait un hug au 3 personne que t'aime les plus sur le serveur(/hug);Fait une gifle au personne que t'aime le moins sur le serveur(/slap);Fait un baiser à ton crush et si t'en as pas fait un à ta meilleur(e) ami(e)(/kiss);Met tes pieds dans de l'eau froide durant 30 secondes;Appelle un de tes proches et raconte lui n'importe quoi;Envoie une photo sexy de toi à la 1ère personne dans tes mp;chante Bella et envoie la à $usertag[$interactionData[author.id]];Fait une déclaration d'amour à ton meilleur(e) ami(e) et screen;Fait un truc gênant en publique;Fait une mime d'un objet que $usertag[$interactionData[author.id]] ta proposer;Fait le tour de la maisons à 4 pattes;Fait une liste de compliment pour la personne qui compte le plus pour toi sur Discord;Crie Au secours;Avoue tes sentiments en public;Chante une chanson de ton choix à voix haute en enregistrant puis envoie;Danse en enregistrant puis envoie;Lèche ton coude;Imite un joueur et laisse les autres deviner de qui il s’agit;Fais un concours de celui qui dira le plus de gros mots contre le joueur de ton choix;Choisis un vêtement et enlève-le et prend toi en photo;Fais un compliment à chacun des joueurs;Essaye de deviner la taille du pénis ou le bonnet de soutien gorge de $usertag[$interactionData[author.id]];Finis toutes tes phrases par “ça ne fait aucun doute” jusqu’à ton prochain tour;Fais une phrase qui contient les mots : concombre, enfance et Napoléon;Fais un bras de fer avec la personne la plus proche de toi;Montre un bout de sous vêtement à la personne que t'apprécie le plus sur Discord] !**] `
    
   } 