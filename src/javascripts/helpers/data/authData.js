import firebase from 'firebase/app';
import 'firebase/auth';
import viewHelper from '../../components/views/viewHelper';
import loginLogout from '../../components/auth/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      viewHelper.viewListener('home', user);
      loginLogout.logoutNavButton();
    } else {
      viewHelper.viewListener('home', user);
      loginLogout.loginNavButton();
    }
  });
};

export default { checkLoginStatus };
