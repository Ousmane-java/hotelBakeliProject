const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const passwordResetRoutes = require('./routes/passwordReset');

const app = express();
const PORT = process.env.PORT || 4000;

// Options CORS pour autoriser uniquement les requêtes provenant de 'http://localhost:3000'
const corsOptions = {
  origin: 'http://localhost:3000',
};

// Utilisation de CORS avec les options spécifiées
app.use(cors(corsOptions));

// Middleware pour analyser les corps des requêtes en JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', passwordResetRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
