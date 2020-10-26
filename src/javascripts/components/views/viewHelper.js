import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../auth/auth';
import menuView from './menuView';
import reservationView from './reservationView';
import staffView from './staffView';
import addStaffForm from '../forms/addStaffMember';
import updateStaffView from './updateStaffView';
import addReservationView from './addReservationView';
import ingredientsView from './ingredientsView';
import addIngredientsView from './addIngredientsView';
import addMenuItemForm from './addMenuItemView';
import homePage from './homePageView';
import editReservationView from './editReservationView';
import updateMenuView from './updateMenuView';
import updateIngredient from './updateIngredientsView';
import ordersView from './addOrdersView';

const viewHelper = (id, argument) => {
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
      case 'edit-staff':
        return updateStaffView.updateStaffView(argument);
      case 'viewIngredientsBtn':
        return ingredientsView.ingredientsView();
      case 'add-ingredient-btn':
        return addIngredientsView.addIngredientsView();
      case 'addMenuItemBtn':
        return addMenuItemForm.addMenuItemForm();
      case 'update-menu-item-link':
        return updateMenuView.updateMenuItemsView(argument);
      case 'update-ingredient-link':
        return updateIngredient.updateIngredientView(argument);
      case 'home':
        return homePage.homePageView();
      case 'orders':
        return ordersView.addOrdersView(argument);
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
        '<div class="alert" role="alert">Please Sign in To Make a Reservation</div>'
      );
    }
  });

  // View Ingredients Button
  $('body').on('click', '#viewIngredientsBtn', (e) => {
    e.stopImmediatePropagation();
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

  // Button click event to update reservation and return to reservation view
  $('body').on('click', '.edit-reservation-btn', (e) => {
    const reservationFirebaseKey = e.currentTarget.id;
    editReservationView.editReservationView(reservationFirebaseKey);
  });

  $('body').on('click', '.update-menu-item-btn', (e) => {
    const menuItemUid = e.currentTarget.id;
    viewHelper('update-menu-item-link', menuItemUid);
  });

  $('body').on('click', '.edit-staff-btn', (e) => {
    e.stopImmediatePropagation();
    viewHelper('edit-staff', e.currentTarget.id);
  });

  $('body').on('click', '.update-ingredient-btn', (e) => {
    const ingredientUid = e.currentTarget.id;
    viewHelper('update-ingredient-link', ingredientUid);
  });
  $('body').on('click', 'a.navbar-brand', () => {
    viewHelper('home');
  });
  $('body').on('click', '.orders-reservation-btn', (e) => {
    viewHelper('orders', e.currentTarget.id);
  });
};

export default { viewListener, viewHelper };
