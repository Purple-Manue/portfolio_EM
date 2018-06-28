// Sert à la récupération de données
let express = require('express'); // On appel le module express.
let mongodb = require('mongodb'); // On appel le module mongodb.
let cors = require('cors');
let path = require('path');
let nodeMailer = require('nodemailer');
let bodyParser = require('body-parser'); // Permet d'obtenir toutes les données des champs du coté server. (method POST).


//Récupération de données pour mail.
let app = express(); // On lance une application express.
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.render('index');
});

app.post('/send-email', function (req, res) {
  let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: 'yellowaformac@gmail.com',
          pass: 'Snoopy87'
      }
  });
  let mailOptions = {
      from: req.body.from, // sender address
      to: "yellowaformac@gmail.com", // list of receivers
      subject: req.body.subject, // Subject line
      html: req.body.from + " / " + req.body.name + " : " + req.body.body // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
          res.render('index');
      });
  });
// fin mail.

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

    });
});
app.listen(3000, function(req, res){
    console.log('Server is running at port 3000 !');
}); // On écoute les requêtes sur le port 3000.
