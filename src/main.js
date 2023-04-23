import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin, faIgloo)


const firebaseConfig = {
    apiKey: 'AIzaSyDUsU9DH82b2UkFYQWe26rUK3skgMFptgM',
    authDomain: 'tomashoracioambrogi.firebaseapp.com',
    projectId: 'tomashoracioambrogi',
    storageBucket: 'tomashoracioambrogi.appspot.com',
    messagingSenderId: '1074284210809',
    appId: '1:1074284210809:web:5075cf555cd9e461b4c2a8',
    measurementId: 'G-9S3SKBCTKN'
}

const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
