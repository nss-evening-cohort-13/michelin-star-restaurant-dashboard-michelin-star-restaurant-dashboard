import staffData from '../../helpers/data/staffData';
import addStaffView from './addStaffView';
import card from '../cards/staffMemberCard';

const userStaffView = () => {
  $('#app').html(`<div class="staff-member-page">
                    <div class="staff-member-navigation">
                    <a class="btn btn-primary" data-toggle="collapse" href="#staffForm" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Add to Kennel
                    </a>
                    <div class="collapse" id="staffForm" style="background-color: white;">
                    </div>
                      <a class="staff-form-btn btn btn btn-danger" data-toggle="collapse" href="#collapseForm" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Add Staff Member
                      </a>
                      <div class="collapse" id="collapseForm">
                        Place form here
                      </div>
                      <button class="staff-form-btn btn btn btn-danger">Add Staff Member</button>
                    </div>
                    <div class="staff-member-container card-container-page"></div>
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

const staffView = () => {
  $('#app').html(`<div class="staff-member-page">
                    <h1 class="meet-staff">Meet our staff!</h1>
                    <div class="staff-member-container card-container-page"></div>
                  </div>`);
  staffData.getAllStaff().then((response) => {
    console.warn('response', response);
    if (response.length) {
      response.forEach((staffObject) => {
        $('.staff-member-container').append(card.buildStaffCard(staffObject));
        $('.staff-btn-container').remove();
        $('.staff-member-navigation').remove();
      });
    } else {
      $('#app').html('<h1>No staff members to view at the moment. Try back later!</h1>');
    }
  });
};

const staffViewConditional = (user) => {
  if (user) {
    userStaffView();
  } else {
    staffView();
  }
};

export default { userStaffView, staffView, staffViewConditional };
