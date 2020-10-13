import auth from '../auth/auth';
import menuView from './menuView';
import reservationView from './reservationView';
import staffView from './staffView';
import addReservationView from './addReservationView';

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
    case 'home':
      return console.warn('homeView');
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, user) => {
  viewHelper(view);
  console.warn(user);

  // targeting nav link id on click event to print nav link respective view
  $('body').on('click', 'a.nav-link', (e) => {
    e.stopImmediatePropagation();
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '#add-reservation-btn', (e) => {
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
