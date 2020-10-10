import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import 'bootstrap';
import navbar from './components/navbar/navbar';
// import viewListener from './components/views/viewHelper';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  navbar.navbar();
  // viewListener.viewListener();
};

init();
