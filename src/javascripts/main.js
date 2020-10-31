import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import auth from './helpers/data/authData';
// import navbar from './components/navbar/navbar';
import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.checkLoginStatus();
  // navbar.navbar();
};

init();
