import firebase from 'firebase/app';
import 'firebase/auth';
import viewHelper from '../../components/views/viewHelper';
import loginlogout from '../../components/auth/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      viewHelper.viewListener('home');
      loginlogout.logoutNavButton();
    } else {
      viewHelper.viewListener('home');
      loginlogout.loginNavButton();
    }
  });
};

export default { checkLoginStatus };
