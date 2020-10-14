import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import auth from './helpers/data/authData';
import 'bootstrap';
import navbar from './components/navbar/navbar';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.checkLoginStatus();
  navbar.navbar();
};

init();
