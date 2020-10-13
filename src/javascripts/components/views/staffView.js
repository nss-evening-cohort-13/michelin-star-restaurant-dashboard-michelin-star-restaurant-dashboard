import staffData from '../../helpers/data/staffData';
// import addStaffView from './addStaffView';
import card from '../cards/staffMemberCard';

const staffView = () => {
  $('#app').html(`<div class="staff-member-page">
                    <div class="staff-member-navigation">
                      <button class="staff-form-btn btn btn-danger">Add Staff Member</button>
                    </div>
                    <div class="staff-form form" id="staffForm"></div>
                    <div class="staff-member-container"></div>
                  </div>`);
  $('.staff-form').css({ display: 'none' });
};

const userStaffView = () => {
  staffData.getAllStaff().then((response) => {
    console.warn('response', response);
    if (response.length) {
      response.forEach((staffObject) => {
        $('.staff-member-container').append(card.buildStaffCard(staffObject));
      });
    } else {
      $('#app').html('<h1>No staff members have been added.</h1>');
    }
  });
};

const unauthStaffView = () => {
  staffData.getAllStaff().then((response) => {
    console.warn('response', response);
    if (response.length) {
      response.forEach((staffObject) => {
        $('.staff-member-container').append(card.buildStaffCard(staffObject));
        $('.staff-btn-container').remove();
        $('.staff-member-navigation').remove();
      });
    } else {
      $('#app').html(
        '<h1>No staff members to view at the moment. Try back later!</h1>'
      );
    }
  });
};

// const staffView = () => {
//   $('#app').html(`<div class="staff-member-page">
//                     <h1 class="meet-staff">Meet our staff!</h1>
//                     <div class="staff-member-container card-container-page"></div>
//                   </div>`);
//   staffData.getAllStaff().then((response) => {
//     console.warn('response', response);
//     if (response.length) {
//       response.forEach((staffObject) => {
//         $('.staff-member-container').append(card.buildStaffCard(staffObject));
//         $('.staff-btn-container').remove();
//         $('.staff-member-navigation').remove();
//       });
//     } else {
//       $('#app').html('<h1>No staff members to view at the moment. Try back later!</h1>');
//     }
//   });
// };

// const staffViewConditional = (user) => {
//   if (user) {
//     userStaffView();
//   } else {
//     staffView();
//   }
// };

export default { userStaffView, staffView, unauthStaffView };
