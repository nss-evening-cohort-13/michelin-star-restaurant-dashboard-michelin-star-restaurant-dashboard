import firebase from 'firebase/app';
import 'firebase/auth';
import viewHelper from '../../components/views/viewHelper';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      viewHelper.viewHelper('logout');
    } else {
      viewHelper.viewHelper('login');
    }
  });
};

export default { checkLoginStatus };
