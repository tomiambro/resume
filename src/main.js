import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
// import './firebase.js'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDUsU9DH82b2UkFYQWe26rUK3skgMFptgM",
    authDomain: "tomashoracioambrogi.firebaseapp.com",
    projectId: "tomashoracioambrogi",
    storageBucket: "tomashoracioambrogi.appspot.com",
    messagingSenderId: "1074284210809",
    appId: "1:1074284210809:web:5075cf555cd9e461b4c2a8",
    measurementId: "G-9S3SKBCTKN"
  };

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const app = createApp(App)

app.use(router)

app.mount('#app')
