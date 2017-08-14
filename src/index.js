import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));


(() => {
  if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('./service-worker.js', {scope: '/'})
 .then(() => console.log('Service Worker registered successfully.'))// eslint-disable-line
 .catch(error => console.log('Service Worker registration failed:', error));// eslint-disable-line
 }
 })();
