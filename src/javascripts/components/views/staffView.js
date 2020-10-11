import staffData from '../../helpers/data/staffData';
import addStaffView from './addStaffView';
import card from '../cards/staffMemberCard';

const staffView = () => {
  $('#app').html(`<div class="staff-member-container" class="card-container-page">
                   <button class="staff-form-btn" style="background-color: white;">Add Staff Member</button>
                  </div>`);
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
  addStaffView.addstaffView();
};

export default { staffView };
