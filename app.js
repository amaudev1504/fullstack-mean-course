const express = require('express'); // On installe le package express

const app = express(); // On crée l'application express

app.use((req, res, next) => { // middleware pour accepter le Cross Origin Ressource Sharing (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// route GET
app.use('/api/stuff', (req, res, next) => { // middleware pour recevoir une réponse à partir d'une route GET (on met en paramètres la route en plus du reste)
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