// Sert à la récupération de données
let express = require('express'); // On appel le module express.
let mongodb = require('mongodb'); // On appel le module mongodb.
// let bodyParser = require('body-parser');
let cors = require('cors');
// Sert à l'envoie de mail
// let  fs = require('fs');
// let path = require('path');
// let nodemailer = require('nodemailer');
//
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     secure: false,
//     port: 25,
//     auth: {
//         user: "yellowaformac@gmail.com",
//         pass: 'Snoopy87'
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });
// let HelperOption = {
//         from : "'John Snow' <johnsnow@gmail.com>",
//         to : "yellowaformac@gmail.com",
//         subject : "Hello, world!",
//         text : "Wow i'm amazing!"
// };
// transporter.sendMail(HelperOption, (error, info) => {
//     if(error){
//         return console.log(error);
//     }
//     console.log("Le message est bien envoyé.");
//     console.log(info);
// });


//Récupération de données
let app = express(); // On lance une application express.
// app.use(bodyParser());
let MongoClient = mongodb.MongoClient; // On lance le client mongodb.

let url = "mongodb://localhost:27017/mydb"; // On récupère l'url de notre BDD pré-établie.
MongoClient.connect(url, function(err, client){ // On se connecte à la BDD.
    const db = client.db('mydb'); // Sinon db.collection is not a function.
    if (err) throw err // S'il y a une erreur...
    db.collection("expPro", function(err, collection){ // On va dans la collection expPro
        app.use(cors());
        app.get("/expPro/:id", function(req, res){ // get pour récupérer des informations.
            collection.findOne({"_id" : new mongodb.ObjectID(req.params.id)}, function(err, expById){ // trouve une ressource unique dans la collection.
                if (!err) res.send(expById); // Affiche le résultat associé à l'id (id variable).
            });
        });

        app.get("/expPro", function(req, res){ // get pour récupérer des informations.
            collection.find().toArray(function(err, exp){ // trouve le tableau json correspondant à la collection.
                if(!err) res.send(exp); // S'il n'y a pas d'erreur alors envoie moi ce tableau.
            });
        });

        // app.post('/contact', function(req, resp) {
        //     resp.end(JSON.stringify(req.body));
        // });

    });
});
app.listen(3000); // On écoute les requêtes sur le port 8080.
