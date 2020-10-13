import firebase from 'firebase/app';
import auth from '../auth/auth';
import menuView from './menuView';
import reservationView from './reservationView';
import staffView from './staffView';
import addStaffForm from '../forms/addStaffMember';
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
        return staffView.staffView(user);
      case 'add-staff-btn':
        return staffView.staffView(user);
      // case 'viewIngredientsBtn':
      //   return ingredientsView.ingredientsView();
      // case 'add-ingredient-btn':
      //   return addIngredientsView.addIngredientsView();
      // case 'addMenuItemBtn':
      //   return addMenuItemForm.addMenuItemForm();
      // case 'home':
      //   return homePage.homePageView();
      default:
        return console.warn('nothing clicked');
    }
  });
};

// const viewHelper = (id) => {
//   switch (id) {
//     // targeting nav link id, returning respective link view
//     case 'menuLink':
//       return menuView.menuView();
//     case 'reservationLink':
//       return reservationView.reservationView();
//     case 'staffLink':
//       return staffView.userStaffView();
//       // return staffView.staffViewConditional(user);
//     // case 'staffLink':
//     //   return staffView.staffViewConditional(user);
//     // case 'userStaffView':
//     //   return staffView.userStaffView();
//     case 'add-reservation-btn':
//       return addReservationView.addReservationView();
//     // case 'staffLink':
//     //   return staffView.staffView();
//     case 'home':
//       return console.warn('homeView');
//     default:
//       return console.warn('nothing clicked');
//   }
// };

const viewListener = (view, user) => {
  viewHelper(view, user);
  // console.warn(user);

  $('body').on('click', 'a.nav-link', (e) => {
    e.stopImmediatePropagation();
    viewHelper(e.currentTarget.id, user);
  });

  $('body').on('click', '#add-staff-btn', (e) => {
    console.warn('clicked add btn');
    addStaffForm.formBtnFunction();
    viewHelper(e.currentTarget.id, user);
  });

  // $('body').on('click', '#staffLink', (e) => {
  //   if (user) {
  //     viewHelper(e.currentTarget.id, user);
  //     // staffView.userStaffView();
  //   } else {
  //     console.warn('suck it');
  //     // viewHelper(e.currentTarget.id);
  //     // staffView.unauthStaffView();
  //   }
  // });

  // $('body').on('click', '#staffLink', (e) => {
  //   console.warn('staff click user', user);
  //   e.stopImmediatePropagation();
  //   if (user) {
  //     $('#app').html('');
  //     console.warn('user', user);
  //     staffView.staffView();
  //     staffView.userStaffView();
  //   } else {
  //     $('#app').html('');
  //     staffView.staffView();
  //     staffView.unauthStaffView();
  //   }
  // });

  $('body').on('click', '#add-reservation-btn', (e) => {
    if (user) {
      viewHelper(e.currentTarget.id);
    } else {
      $('#error-message-reservation').html('<div class="alert alert-danger" role="alert">Please Sign in To Make a Reservation</div>');
    }
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
    console.warn('clicked');
    // $('.staff-form-btn').remove();
    // $('.staff-member-container').remove();
    // $('#app').css('background-color', '#262626');
    addStaffForm.addStaffMemberForm();
  });

  // $('body').on('click', 'a.nav-link', (e) => {
  //   e.stopImmediatePropagation();
  //   if (user) {
  //     viewHelper(e.currentTarget.id, user);
  //   } else {
  //     staffView.staffView();
  //   }
  // });

  // $('body').on('click', '#staffLink', (e) => {
  //   e.stopImmediatePropagation();
  //   console.warn('clicked', e.currentTarget.id);
  //   if (user) {
  //     viewHelper('userStaffView', user);
  //     // staffView.userStaffView();
  //   } else {
  //     // viewHelper('staffLink');
  //     staffView.staffView();
  //   }
  // });
};

export default { viewListener, viewHelper };
