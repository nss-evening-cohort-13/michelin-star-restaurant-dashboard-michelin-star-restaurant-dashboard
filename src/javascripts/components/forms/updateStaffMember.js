import staffData from '../../helpers/data/staffData';
import staffView from '../views/staffView';

const updateStaffMemberForm = (user) => {
  $('.staff-form').html(`
      <h2>Update Staff Member</h2>
      <div id="success-message"></div>
      <div id="error-message"></div>
      <div class="form-group row">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" value="${user.name}" placeholder="Example: Gordon Ramsay">
      </div>
      <div class="form-group row">
        <label for="role">Role</label>
        <input type="text" class="form-control" id="role" value="${user.role}" placeholder="Example: Chef">
      </div>
      <div class="form-group row">
        <label for="imageUrl">Image</label>
        <input type="text" class="form-control" id="staff-image-url" value="${user.imageUrl}" placeholder="Place Image URL">
      </div>
        <button id="update-staff-btn" type="button" class="btn btn-info form-btn"><i class="fas fa-plus-circle"></i> Update Staff Member</button>
      </div>
    `);

  $('#update-staff-btn').on('click', () => {
    const data = {
      name: $('#name').val() || false,
      role: $('#role').val() || false,
      imageUrl: $('#staff-image-url').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        `<div class="alert alert-danger" role="alert">
          Please complete all fields
        </div>`
      );
    } else {
      $('#error-message').html('');

      staffData
        .updateStaffMember(data)
        .then((response) => {
          if (response === 'OK') {
            staffView.staffView(user);
          } else {
            console.warn('failed, come back later');
          }
        })
        .then(() => {
          $('#success-message').html(
            `<div class="alert alert-success" role="alert">
            Right on! New staff member was added!
          </div>`
          );
        })
        .catch((error) => console.warn(error));

      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);

      $('#name').val('');
      $('#role').val('');
      $('#staff-image-url').val('');
      $('.staff-form').remove();
    }
    $('#app').html('');
    staffView.staffView(user);
  });
};

export default { updateStaffMemberForm };
