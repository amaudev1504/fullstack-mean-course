const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

// route POST
router.post('/', stuffCtrl.createThing);

// route PUT (modification d'un Thing spécifique)
router.put('/:id', stuffCtrl.modifyThing);

// route DELETE
router.delete('/:id', stuffCtrl.deleteThing);

// route GET pour un Thing spécifique
router.get('/:id', stuffCtrl.getOneThing);

// route GET pour tous les Things
router.get('/', stuffCtrl.getAllThings);

module.exports = router;