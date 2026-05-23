const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({ // On nomme le Schema puis on le crée en entrant tous les champs
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Thing', thingSchema); // Thing est le nom de la page (ou model) la méthode model() rend le modèle utilisable