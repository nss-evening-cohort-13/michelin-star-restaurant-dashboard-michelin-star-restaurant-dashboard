import staffData from '../../helpers/data/staffData';
import staffView from '../views/staffView';

const addStaffMemberForm = (user) => {
  $('.staff-form').html(`
      <h2 class="form-title">Add Staff Member</h2>
      <div id="success-message"></div>
      <div id="error-message"></div>
      <div class="form-group row">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Example: Gordon Ramsay ">
      </div>
      <div class="form-group row">
        <label for="role">Role</label>
        <input type="text" class="form-control" id="role" placeholder="Example: Chef">
      </div>
      <div class="form-group row">
        <label for="imageUrl">Image</label>
        <input type="text" class="form-control" id="staff-image-url" placeholder="Place Image URL">
      </div>
        <button id="add-staff-btn" type="button" class="btn btn-outline form-btn"><i class="fas fa-plus-circle"></i> Add Staff Member</button>
      </div>
    `);

  $('#add-staff-btn').on('click', () => {
    const data = {
      name: $('#name').val() || false,
      role: $('#role').val() || false,
      imageUrl: $('#staff-image-url').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        `<div class="alert" role="alert">
          Please complete all fields
        </div>`
      );
    } else {
      $('#error-message').html('');

      staffData
        .addStaffMember(data)
        .then((response) => {
          $('#success-message').html(
            `<div class="alert" role="alert">
            Right on! New staff member was added!
          </div>`
          );
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
          if (response === 200) {
            setTimeout(() => {
              staffView.staffView(user);
            }, 3000);
          } else {
            console.warn('failed, come back later');
          }
        })
        // .then(() => {
        //   $('#success-message').html(
        //     `<div class="alert alert-success" role="alert">
        //     Right on! New staff member was added!
        //   </div>`
        //   );
        // }).then(() => {
        //   setTimeout(() => {
        //     $('#success-message').html('');
        //   }, 3000);
        // })
        .catch((error) => console.warn(error));

      $('#name').val('');
      $('#role').val('');
      $('#staff-image-url').val('');
      // $('.staff-form').remove();
    }
  });
};

export default { addStaffMemberForm };
