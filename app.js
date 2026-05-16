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
            title: "Mon premier objet",
            description : "Les infos de mon premier objet",
            imageUrl: '',
            price: 1000000000,
            userId: 'squamomo'
        },
        {
            _id: 2,
            title: "Mon deuxième objet",
            description : "Les infos de mon deuxième objet",
            imageUrl: '',
            price: 2000000000,
            userId: 'squamomo'
        },
    ];
    res.status(200).json(stuff);
});

module.exports = app; // On rend ce code accessible depuis les autres fichiers qui peuvent importer une des const