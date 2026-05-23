const Thing = require('../models/Thing');

exports.createThing = (req, res, next) => {
    delete req.body._id; // étant donné qu'on n'a pas d'authentification, mongoDB va générer un faux _id du coup on doit le supprimer
    const thing = new Thing ({
        ...req.body // Avec l'opérateur spread ça permet d'éviter de recopier chaque champ ex : title : req.body.title l'opérateur est assez intelligent pour détailler le titre de chaque req.body
    });
    thing.save()
        .then(() => {res.status(201).json({ message: "Objet enregistré" })})
        .catch(error => {res.status(400).json({ error })});
};

exports.modifyThing = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id }) // 1er argument: objet de comparaison par rapport à celui qu'on veut modifier 2e argument: le nouvel objet
        .then(() => {res.status(200).json({ message: "Objet modifié" })})
        .catch(error => {res.status(400).json({ error })});
};

exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id }) // on prend l'id des paramètres de route
        .then(() => {res.status(200).json({ message: "Objet supprimé" })})
        .catch(error => {res.status(400).json({ error })});
};

exports.getOneThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => {res.status(200).json(thing)})
        .catch(error => {res.status(400).json({ error })});
}

exports.getAllThings = (req, res, next) => { // middleware pour recevoir une réponse à partir d'une route GET (on met en paramètres la route en plus du reste)
    Thing.find() // permet de trouver toutes les instances de Thing
        .then(things => {res.status(200).json(things)})
        .catch(error => {res.status(404).json({ error })});
}