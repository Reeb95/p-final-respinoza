import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
// import store from "./store.js"
// import * as firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
  
  apiKey: "AIzaSyDesq5VyjOnZ7TwyUkSv1yWBDUzmorDlD4",
  authDomain: "logry-9f2df.firebaseapp.com",
  projectId: "logry-9f2df",
  storageBucket: "logry-9f2df.appspot.com",
  messagingSenderId: "337341633922",
  appId: "1:337341633922:web:3c9ad707f13f222319ab9b",
  measurementId: "G-1QKEETZ7EQ"
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
