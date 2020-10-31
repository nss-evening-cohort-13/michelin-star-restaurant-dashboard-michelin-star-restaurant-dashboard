import firebase from 'firebase/app';
import 'firebase/auth';
import viewHelper from '../../components/views/viewHelper';
import loginLogout from '../../components/auth/auth';
import navbar from '../../components/navbar/navbar';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      viewHelper.viewListener('home', user);
      navbar.authNavbar();
      loginLogout.logoutNavButton();
    } else {
      viewHelper.viewListener('menuLink', user);
      navbar.unauthedNavbar();
      loginLogout.loginNavButton();
    }
  });
};

export default { checkLoginStatus };
