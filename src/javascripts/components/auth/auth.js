import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  $('#app').html('');
};
const logoutNavButton = () => {
  $('#loginLogout').html('<a class="userLinkLogout" href="#"><i class="fa fa-user" id="userLink" aria-hidden="true"></i></a>');
};
const loginNavButton = () => {
  $('#loginLogout').html('<a class="userLinkLogin" href="#"><i class="fa fa-user" id="userLink" aria-hidden="true"></i></a>');
};

const loginButton = () => {
  const domString = `<div id="auth">
                        <span style="font-size: 5em; color: Tomato;"><i class="fas fa-utensils"></i></span>
                        <h4>Login to Le Baquette</h4>
                        <button id="google-auth" class="btn btn-primary btn-lg">
                          <i class="fab fa-google"></i></i>oogle Login
                        </button>
                      </div>`;
  $('#app').html(domString);
  $('#google-auth').on('click', signMeIn);
};

const logoutEvent = () => {
  $('#logout-button').on('click', (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem('ua');
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

const logoutButton = () => {
  const domString = `<div id="auth">
                          <span style="font-size: 5em; color: Tomato;"><i class="fas fa-utensils"></i></span>
                          <h4>Logout from Le Baquette</h4>
                          <button id="logout-button" class="btn btn-primary btn-lg">
                            Logout
                          </button>
                        </div>`;
  $('#app').html(domString);
  logoutEvent();
};

export default {
  loginButton,
  logoutButton,
  logoutNavButton,
  loginNavButton
};
