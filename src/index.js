import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcEmCzh1_xTvTNh_dN4pJeLE2_Azqsp6A",
  authDomain: "tradezone-aeac0.firebaseapp.com",
  projectId: "tradezone-aeac0",
  storageBucket: "tradezone-aeac0.appspot.com",
  messagingSenderId: "850703222937",
  appId: "1:850703222937:web:445fb8cc47993f390b1008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
