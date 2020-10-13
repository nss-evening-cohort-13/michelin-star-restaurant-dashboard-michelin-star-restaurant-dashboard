import auth from '../auth/auth';
import menuView from './menuView';
import reservationView from './reservationView';
import staffView from './staffView';
import addReservationView from './addReservationView';
import addMenuItemForm from './addMenuItemView';

const viewHelper = (id) => {
  switch (id) {
    // targeting nav link id, returning respective link view
    case 'menuLink':
      return menuView.menuView();
    case 'reservationLink':
      return reservationView.reservationView();
    case 'add-reservation-btn':
      return addReservationView.addReservationView();
    case 'staffLink':
      return staffView.staffView();
    case 'addMenuItemBtn':
      return addMenuItemForm.addMenuItemForm();
    case 'home':
      return console.warn('homeView');
    default:
      return console.warn('nothing clicked');
  }
};

// const hideUserButtons = (user) => {
//   if (user) {
//     $('button').css({ display: 'inline' });
//   } else {
//     $('button').css({ display: 'none' });
//   }
// };

const viewListener = (view, user) => {
  viewHelper(view);
  // targeting nav link id on click event to print nav link respective view
  $('body').on('click', 'a.nav-link', (e) => {
    e.stopImmediatePropagation();
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '#add-reservation-btn', (e) => {
    if (user) {
      viewHelper(e.currentTarget.id);
    } else {
      $('#error-message-reservation').html('<div class="alert alert-danger" role="alert">Please Sign in To Make a Reservation</div>');
    }
  });
  $('body').on('click', '#addMenuItemBtn', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.userLinkLogout', () => {
    auth.logoutButton();
  });
  $('body').on('click', '.userLinkLogin', () => {
    auth.loginButton();
  });
};

export default { viewListener, viewHelper };
