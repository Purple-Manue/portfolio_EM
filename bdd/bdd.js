//On crée une base de données.
 var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/dbtest";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database mydb created!");
//   db.close();
// });

// On crée une collection "expPro" dans cette base de données.
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("expPro", function(err, res) {
//     if (err) throw err;
//     console.log("Collection expPro created!");
//     db.close();
//   });
// });

// On insert des données dans la collection "expPro".
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var xp = [
//     { denomination: "Formation développeur web", date: "Décembre 2017 - Juillet 2018", description:"J'y apprends plusieurs langages et technologies : HTML/CSS (SASS), Javascript (jQuery & requête AJAX), framework Angular 5, base de données via MySQL ou via fichier JSON."},
//     { denomination: "Centre social Alchimis", date: "Septembre 2017 - Décembre 2017", description:"Accompagnement scolaire de jeunes entre 12 et 15 ans à Limoges. Contrat en temps partiel le temps d'avoir une passerelle pour le développement web."},
//     { denomination: "Hyper U", date: "Septembre 2016 - Janvier 2017", description:"Temps plein en hypermaché afin de constater les différences et découvrir une gestion à plus grande échelle. Suivi du souhait de quitter la grande distribution pour le millieu du développement."},
//     { denomination: "BTS Gestionnaire d'Unités Commerciales", date: "Septembre 2014 - Septembre 2016", description:"En alternance en grande distribution où j'y ai appris la base du commerce et la gestion d' un point de vente (supermarché). Cependant je voulais voir ce qu'étais le travail en hypermarché."},
//   ];
//   dbo.collection("expPro").insertMany(xp, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });

//On supprime la collection expPro (commentaire car supprime automatiquement sinon.)
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("expPro").drop(function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// });

// On affiche dans le terminal notre bdd.
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("expPro").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
