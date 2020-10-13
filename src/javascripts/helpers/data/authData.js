import firebase from 'firebase/app';
import 'firebase/auth';
import viewHelper from '../../components/views/viewHelper';
import loginLogout from '../../components/auth/auth';
import buttons from '../../components/views/buttonAdder';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      viewHelper.viewListener('home', user);
      loginLogout.logoutNavButton();
      buttons.addButtonsWhenAuthenticated();
    } else {
      viewHelper.viewListener('home', user);
      loginLogout.loginNavButton();
      buttons.takeAwayButtonsWhenLoggedOut();
    }
  });
};

export default { checkLoginStatus };
