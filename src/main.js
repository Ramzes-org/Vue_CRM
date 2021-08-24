import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import dateFilter from './filters/date.filter';
import messagePlugin from './utils/message.plugin';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

firebase.initializeApp({
  apiKey: 'AIzaSyDPyhYFQZjiTLYJ8iAb34wjDr2yCJ23PDo',
  authDomain: 'vue-crm-f41d9.firebaseapp.com',
  projectId: 'vue-crm-f41d9',
  storageBucket: 'vue-crm-f41d9.appspot.com',
  messagingSenderId: '601466060370',
  appId: '1:601466060370:web:208134eb1c842203dfe98b',
  measurementId: 'G-SLTED14BRR',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
