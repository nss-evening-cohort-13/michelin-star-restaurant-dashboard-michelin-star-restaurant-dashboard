import staffData from '../../helpers/data/staffData';

const updateStaffMemberForm = (staffObject) => {
  $('#update-staff-form').html(`
      <h2>Update Staff Member</h2>
      <div id="success-message"></div>
      <div id="error-message"></div>
      <div class="form-group row">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" value="${staffObject.name}">
      </div>
      <div class="form-group row">
        <label for="role">Role</label>
        <input type="text" class="form-control" id="role" value="${staffObject.role}">
      </div>
      <div class="form-group row">
        <label for="imageUrl">Image</label>
        <input type="text" class="form-control" id="staff-image-url" value="${staffObject.imageUrl}">
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

      staffData.updateStaffMember(staffObject.firebaseKey, data)
        .then(() => {
          $('#success-message').html(
            `<div class="alert alert-success" role="alert">
            Right on! Staff member was updated!
          </div>`
          );
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .catch((error) => console.warn(error));
    }
  });
};

export default { updateStaffMemberForm };
