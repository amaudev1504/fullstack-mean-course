const express = require('express'); // On installe le package express

const app = express(); // On crée l'application express

require('dotenv').config();

const mongoose = require('mongoose'); // facilite les interactions avec notre base de données MongoDB

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((error) => {
  console.log('Connexion à MongoDB échouée !');
  console.error(error.message);
});

app.use(express.json()); // Intercepte toutes les requêtes qui ont un content type en json et les met dans l'objet request

app.use((req, res, next) => { // middleware pour accepter le Cross Origin Ressource Sharing (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// route POST
app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({ Message: 'Objet créé'}); // le statut 201 signifie le succès de création
    next();
})

// route GET
app.get('/api/stuff', (req, res, next) => { // middleware pour recevoir une réponse à partir d'une route GET (on met en paramètres la route en plus du reste)
    const stuff = [
        {
            _id: 1,
            title: "Caméra Nikon",
            description : "Les infos de mon premier objet",
            imageUrl: 'https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119_1280.jpg',
            price: 100000,
            userId: 'squamomo'
        },
        {
            _id: 2,
            title: "Batterie DW Collector",
            description : "Les infos de mon deuxième objet",
            imageUrl: 'https://cdn.pixabay.com/photo/2016/11/19/13/57/drum-set-1839383_1280.jpg',
            price: 500000,
            userId: 'squamomo'
        },
    ];
    res.status(200).json(stuff);
});

module.exports = app; // On rend ce code accessible depuis les autres fichiers qui peuvent importer une des const