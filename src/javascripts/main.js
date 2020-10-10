import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys.json';
import authData from './helpers/data/authData';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
};

init();
