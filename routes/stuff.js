const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/stuff');

// route POST
router.post('/', auth, stuffCtrl.createThing);

// route PUT (modification d'un Thing spécifique)
router.put('/:id', auth, stuffCtrl.modifyThing);

// route DELETE
router.delete('/:id', auth, stuffCtrl.deleteThing);

// route GET pour un Thing spécifique
router.get('/:id', auth, stuffCtrl.getOneThing);

// route GET pour tous les Things
router.get('/', auth, stuffCtrl.getAllThings);

module.exports = router;