import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../auth/auth';
import menuView from './menuView';
import reservationView from './reservationView';
import staffView from './staffView';
import addStaffForm from '../forms/addStaffMember';
import addReservationView from './addReservationView';
import ingredientsView from './ingredientsView';
import addIngredientsView from './addIngredientsView';
import addMenuItemForm from './addMenuItemView';
import homePage from './homePageView';
import editReservationView from './editReservationView';

const viewHelper = (id) => {
  $('#app').html('');
  firebase.auth().onAuthStateChanged((user) => {
    switch (id) {
      // targeting nav link id, returning respective link view
      case 'menuLink':
        return menuView.menuView(user);
      case 'reservationLink':
        return reservationView.reservationView(user);
      case 'addReservation':
        return addReservationView.addReservationView();
      case 'staffLink':
        return staffView.staffView(user);
      case 'viewIngredientsBtn':
        return ingredientsView.ingredientsView();
      case 'add-ingredient-btn':
        return addIngredientsView.addIngredientsView();
      case 'addMenuItemBtn':
        return addMenuItemForm.addMenuItemForm();
      case 'home':
        return homePage.homePageView();
      case 'edit-reservation-btn':
        return editReservationView.editReservationView();
      default:
        return console.warn('nothing clicked');
    }
  });
};

const viewListener = (view, user) => {
  viewHelper(view, user);

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

  // View Ingredients Button
  $('body').on('click', '#viewIngredientsBtn', (e) => {
    viewHelper(e.currentTarget.id);
  });

  // Add Ingredients Button
  $('body').on('click', '#add-ingredient-btn', (e) => {
    viewHelper(e.currentTarget.id);
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

  $('body').on('click', '.staff-form-btn', (e) => {
    e.stopImmediatePropagation();
    $('.staff-form').css({ display: 'block' });
    addStaffForm.addStaffMemberForm(user);
  });

  $('body').on('click', '.edit-reservation-btn', (e) => {
    console.warn('edit clicked', e.currentTarget.id);
    viewHelper('edit-reservation-btn');
    // const firebaseKey = e.currentTarget.id;
  });
};

export default { viewListener, viewHelper };
