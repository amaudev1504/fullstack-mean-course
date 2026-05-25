const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup); 
router.post('/login', userCtrl.login); // Le frontend poste les mail et mot de passe

module.exports = router;