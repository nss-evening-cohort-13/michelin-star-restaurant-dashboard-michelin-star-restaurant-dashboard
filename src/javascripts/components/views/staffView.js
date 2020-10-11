import addStaffView from './addStaffView';

const staffView = () => {
  $('#app').html(`<div class="staff-member-container">
                   <button class="add-staff-btn" style="background-color: white;">Add Staff Member</button>
                  </div>`);
  addStaffView.addstaffView();
};

export default { staffView };
