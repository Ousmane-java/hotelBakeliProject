const express = require('express');
const router = express.Router();
const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const SECRET_KEY = 'EIpKUpg0L7ceeRFNLUImx2UriRTeIZ5ko070hynlcOI'; // Changez cela par une clé secrète plus sécurisée

// Inscription
router.post('/register', (req, res) => {
  const { nom, email, mot_de_passe } = req.body;

  if (!nom || !email || !mot_de_passe) {
    return res.status(400).send('Tous les champs sont requis.');
  }

  bcrypt.hash(mot_de_passe, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).send('Erreur lors du cryptage du mot de passe.');
    }

    const query = 'INSERT INTO admin (nom, email, mot_de_passe) VALUES (?, ?, ?)';
    db.query(query, [nom, email, hash], (err, result) => {
      if (err) {
        return res.status(500).send('Erreur lors de l\'inscription de l\'utilisateur.');
      }
      res.status(201).send('Utilisateur inscrit avec succès.');
    });
  });
});

// Connexion
router.post('/login', (req, res) => {
  const { email, mot_de_passe } = req.body;

  if (!email || !mot_de_passe) {
    return res.status(400).send('Tous les champs sont requis.');
  }

  const query = 'SELECT * FROM admin WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).send('Erreur lors de la récupération de l\'utilisateur.');
    }

    if (results.length === 0) {
      return res.status(400).send('Utilisateur non trouvé.');
    }

    const user = results[0];
    bcrypt.compare(mot_de_passe, user.mot_de_passe, (err, result) => {
      if (err) {
        return res.status(500).send('Erreur lors de la vérification du mot de passe.');
      }

      if (!result) {
        return res.status(400).send('Mot de passe incorrect.');
      }

      // Générer un token JWT
      const token = jwt.sign({ id: user.id, email: user.email, nom: user.nom }, SECRET_KEY, { expiresIn: '1h' });

      res.status(200).json({ token, user: { id: user.id, email: user.email, nom: user.nom } });
    });
  });
});

module.exports = router;
