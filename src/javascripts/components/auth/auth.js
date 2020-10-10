import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
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

const logoutEvent = () => {
    $('#logout-button').on('click', (e) => {
      e.preventDefault();
      window.sessionStorage.removeItem('ua');
      firebase.auth().signOut();
      window.location.href = '/';
    });
  };
  
  export default { loginButton };