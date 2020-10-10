import firebase from 'firebase/app';
import 'firebase/auth';
import viewHelper from '../../components/views/viewHelper';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    viewHelper.viewListener('home', user);
  });
};

export default { checkLoginStatus };
