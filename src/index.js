// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import "./i18n"; // Importer la configuration de i18n
import store, { persistor } from './Store';  // Import du store Redux

ReactDOM.render(
  // Enveloppe l'application avec le Provider
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>,
  document.getElementById('root')
);
