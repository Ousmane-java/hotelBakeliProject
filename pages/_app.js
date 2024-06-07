// pages/_app.js
import React from 'react';
import '../styles/globals.css'; // Assurez-vous d'importer vos styles globaux si nécessaire

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
