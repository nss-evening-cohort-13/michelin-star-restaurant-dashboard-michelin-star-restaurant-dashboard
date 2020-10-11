import auth from '../auth/auth';
import menuView from './menuView';
import reservationView from './reservationView';
import staffView from './staffView';
import addStaffForm from '../forms/addStaffMember';

const viewHelper = (id) => {
  switch (id) {
    // targeting nav link id, returning respective link view
    case 'menuLink':
      return menuView.menuView();
    case 'reservationLink':
      return reservationView.reservationView();
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

  // targeting nav link id on click event to print nav link respective view
  $('body').on('click', 'a.nav-link', (e) => {
    e.stopImmediatePropagation();
    viewHelper(e.currentTarget.id);
  });

  $('body').on('click', '#userLink', () => {
    if (user) {
      auth.logoutButton();
    } else {
      auth.loginButton();
    }
  });

  $('body').on('click', '.add-staff-btn', (e) => {
    e.stopImmediatePropagation();
    addStaffForm.addStaffMemberForm();
  });
};

export default { viewListener, viewHelper };
