const express = require('express'); // On installe le package express
const mongoose = require('mongoose'); // facilite les interactions avec notre base de données MongoDB
require('dotenv').config(); // config pour pouvoir connecter le fichier .env à mongoose

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((error) => {
  console.log('Connexion à MongoDB échouée !');
  console.error(error.message);
});

const app = express(); // On crée l'application express
app.use(express.json()); // Intercepte toutes les requêtes qui ont un content type en json et les met dans l'objet request

app.use((req, res, next) => { // middleware pour accepter le Cross Origin Ressource Sharing (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app; // On rend ce code accessible depuis les autres fichiers qui peuvent importer une des const