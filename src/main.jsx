import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Register Service Worker for PWA / Offline & Mobile Installation
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('Buildora PWA ServiceWorker registered with scope:', registration.scope);
      },
      (err) => {
        console.log('Buildora PWA ServiceWorker registration failed:', err);
      }
    );
  });
} else if ('serviceWorker' in navigator) {
  // In development, also allow registration if served
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

