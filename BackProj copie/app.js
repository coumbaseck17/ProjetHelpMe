var express = require('express');
var bodyparser= require('body-parser');
var Site = require("./Site");

var app= express();
app.use(bodyparser.json());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"); res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"); next();
});

const site = new Site();

function estPresent(attribut) {
    return attribut !== undefined;
}

//POST pour ajouterEtudians, ajouterThemes, porterVolontaire, like
//ajouter etudiants
app.post('/api/etudiant', function (req,res){
    console.log(req.body);
    var nom= req.body._nom;
    var prenom= req.body._prenom;
    var contact=req.body._contact;
    var ville= req.body._ville;
    if(estPresent(nom) && estPresent(prenom) && estPresent(contact) && estPresent(ville)){
        var id1 =site.ajouterProfil(nom,prenom,contact,ville);
        res.send("Ajout profil ok, id1=" +id1);
    }
    else if (!estPresent(nom) || !estPresent(prenom) || !estPresent(contact) || !estPresent(ville)) {
        // on renvoie une erreur 400
        res.status(400).send('Nb de parametres insuffisants');
    }
    else{
        res.status(404).send('Pas de parametres');
    }
} )
/*{"_nom":"Seck",
 "_prenom":"Coumba",
 "_contact":"0776457823",
 "_ville":"Toulouse"}*/

//ajouter theme
app.post('/api/theme', function (req,res){
    console.log(req.body);
    var titre= req.body._titre;
    var description= req.body._description;
    var motscles= req.body._motscles;
    var nomcreateur= req.body._nomcreateur;
    if(estPresent(titre) && estPresent(description) && estPresent(motscles) && estPresent(nomcreateur)){
        site.ajouterTheme(titre,description,motscles,nomcreateur);
        res.send("Ajout theme ok");
    }
    else if (!estPresent(titre) || !estPresent(description) || !estPresent(motscles) || !estPresent(nomcreateur)) {
        // on renvoie une erreur 400
        res.status(400).send('Nb de parametres insuffisants');
    }
    else{
        res.status(404).send('Pas de parametres');
    }

})
/*{"_titre":"Math",
 "_description":"une belle matiere",
 "_motscles":"cm",
 "_nomcreateur":"Coumba"}
*/

//retirer etudiant
app.delete('/api/etudiant/:id', function (req,res){
    if ((estPresent(req.params.id)) && req.params.id>=0 && req.params.id <= site.nextId) {
        const rep=site.retirerProfil([req.params.id]);
        res.send("Profil eliminéé");}
    else if ((estPresent(req.params.id)) && req.params.id<0)
        res.status(400).send('L\'id  n\'est pas valide');
    else if ((estPresent(req.params.id)) && req.params.id > site.nextId)
        res.status(404).send('Id inexistant');
})

//retirer theme
app.delete('/api/theme/:id', function (req,res){
    if ((estPresent(req.params.id)) && req.params.id>=0 && req.params.id <= site.nextNum) {
        const rep=site.retirerTheme([req.params.id]);
        res.send("Theme eliminéé");}
    else if ((estPresent(req.params.id)) && req.params.id<0)
        res.status(400).send('L\'id  n\'est pas valide');
    else if ((estPresent(req.params.id)) && req.params.id > site.nextNum)
        res.status(404).send('Id inexistant');
})

//afficher liste profils
app.get('/api/etudiant', function(req,res) {
    // on le renvoie au format JSON
    res.json(site.listeEtudiants);
})

//afficher un profil
app.get('/api/etudiant/:id', function (req,res){
    if ((estPresent(req.params.id)) && req.params.id>=0 && req.params.id <= site.nextId){
        res.json(site.listeEtudiants[req.params.id]);
        console.log(site.listeEtudiants[req.params.id]);
    }
    else if ((estPresent(req.params.id)) && req.params.id<0)
        res.status(400).send('L\'id  n\'est pas valide');
    else if ((estPresent(req.params.id)) && req.params.id > site.nextId)
        res.status(404).send('Id inexistant');
})


//afficher liste themes
app.get('/api/theme', function(req,res) {
    // on le renvoie au format JSON
    res.json(site.listeThemes);
})

//afficher un theme
app.get('/api/theme/:id', function (req,res){
    if ((estPresent(req.params.id)) && req.params.id>=0 && req.params.id <= site.nextNum) {
        res.json(site.listeThemes[req.params.id]);
        console.log(site.listeThemes[req.params.id]);
    }
    else if ((estPresent(req.params.id)) && req.params.id<0)
        res.status(400).send('L\'id  n\'est pas valide');
    else if ((estPresent(req.params.id)) && req.params.id > site.nextNum)
        res.status(404).send('Id inexistant');
})

//la liste des themes dont l'etudiant se porter disponible
app.put('/api/etudiant/:id', function (req,res) {
    console.log(req.body);
    var num= req.body._num;
    if (estPresent(num) && (estPresent(req.params.id))) {
        site.porterVolontaire(req.params.id,num);
        res.send("Liste mise à jour");
        console.log(theme);
    } else if (!estPresent(id) || !(estPresent(req.params.id))) {
        // on renvoie une erreur 400
        res.status(400).send('Nb de parametres insuffisants');
    } else {
        res.status(404).send('Pas de parametres');
    }

})


//like
app.put('/api/like', function (req,res) {
    console.log(req.body);
    var id = req.body._id;
    var num = req.body._num;
    if (estPresent(num) && estPresent(id)) {
        var nbLike = site.like(id, num);
        res.send("Nb likes etudiant: " + nbLike);
    } else if (!estPresent(id) || !estPresent(num)) {
        // on renvoie une erreur 400
        res.status(400).send('Nb de parametres insuffisants');
    } else {
        res.status(404).send('Pas de parametres');
    }

})

//dislike
app.put('/api/dislike', function (req,res){
    console.log(req.body);
    var idEtu= req.body._id;
    var idThe= req.body._num;
    if(estPresent(idEtu) && estPresent(idThe)){
        var nbLike =site.dislike(idEtu,idThe);
        res.send("Nb likes etudiant: " +nbLike);
    }
    else if (!estPresent(idEtu) || !estPresent(idThe)) {
        // on renvoie une erreur 400
        res.status(400).send('Nb de parametres insuffisants');
    }
    else{
        res.status(404).send('Pas de parametres');
    }

})


app.listen(3000,function(){
    console.log('Server running...');
})
