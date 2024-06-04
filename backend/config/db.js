// backend/config/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'GestionHotel'
});

connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données: ', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

module.exports = connection;
