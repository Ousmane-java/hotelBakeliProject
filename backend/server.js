const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 4000;

// Options CORS pour autoriser uniquement les requêtes provenant de 'http://localhost:3000'
const corsOptions = {
  origin: 'http://localhost:3000',
};

// Utilisation de CORS avec les options spécifiées
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
