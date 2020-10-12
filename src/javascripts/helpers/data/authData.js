import firebase from 'firebase/app';
import 'firebase/auth';
import viewHelper from '../../components/views/viewHelper';
import loginLogout from '../../components/auth/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      viewHelper.viewListener('home');
      loginLogout.logoutNavButton();
      // viewHelper.viewListener('staffLink', user);
    } else {
      viewHelper.viewListener('home');
      loginLogout.loginNavButton();
    }
  });
};

export default { checkLoginStatus };
