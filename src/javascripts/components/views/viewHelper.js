import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../auth/auth';
import menuView from './menuView';
import reservationView from './reservationView';
import staffView from './staffView';
import addReservationView from './addReservationView';

const viewHelper = (id) => {
  $('#app').html('');
  firebase.auth().onAuthStateChanged((user) => {
    switch (id) {
      // targeting nav link id, returning respective link view
      case 'menuLink':
        return menuView.menuView();
      case 'reservationLink':
        return reservationView.reservationView(user);
      case 'addReservation':
        return addReservationView.addReservationView();
      case 'staffLink':
        return staffView.staffView();
      case 'home':
        return console.warn('homeView');
      default:
        return console.warn('nothing clicked');
    }
  });
};

const viewListener = (view, user) => {
  viewHelper(view);

  // targeting nav link id on click event to print nav link respective view
  $('body').on('click', 'a.nav-link', (e) => {
    e.stopImmediatePropagation();
    viewHelper(e.currentTarget.id, user);
  });
  $('body').on('click', '#addReservation', (e) => {
    if (user) {
      viewHelper(e.currentTarget.id, user);
    } else {
      $('#error-message-reservation').html(
        '<div class="alert alert-danger" role="alert">Please Sign in To Make a Reservation</div>'
      );
    }
  });

  $('body').on('click', '.userLinkLogout', () => {
    auth.logoutButton();
  });
  $('body').on('click', '.userLinkLogin', () => {
    auth.loginButton();
  });
};

export default { viewListener, viewHelper };
