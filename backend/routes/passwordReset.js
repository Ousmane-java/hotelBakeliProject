const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Endpoint pour vérifier l'email et envoyer un formulaire de réinitialisation de mot de passe
router.post('/passwordReset', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email est requis.');
  }

  const query = 'SELECT * FROM admin WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).send('Erreur lors de la vérification de l\'email.');
    }

    if (results.length === 0) {
      return res.status(400).send('Email non trouvé.');
    }

    // Email found, proceed with reset password logic
    res.status(200).send({ message: 'Email vérifié avec succès.', email });
  });
});

module.exports = router;
