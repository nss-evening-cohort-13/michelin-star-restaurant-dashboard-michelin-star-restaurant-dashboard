import staffData from '../../helpers/data/staffData';
import staffView from '../views/staffView';
// import staffView from '../views/staffView';

const addStaffMemberForm = () => {
  $('.staff-form').html(`
      <h2>Add Staff Member</h2>
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
        <button id="add-staff-btn" type="submit" class="btn btn-info form-btn"><i class="fas fa-plus-circle"></i> Add Staff Member</button>
      </div>
    `);

  $('#add-staff-btn').on('click', () => {
    console.warn('clicked add btn');

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
        .addStaffMember(data)
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
      staffView.userStaffView();
    }
  });
};
// const addStaffMemberForm = () => {
//   $('#add-staff-form').html(`
//   <h2>Add Staff Member</h2>
//   <div id="success-message"></div>
//   <div id="error-message"></div>
//   <div class="form-group row">
//       <label for="name">Name</label>
//       <input type="text" class="form-control" id="name" placeholder="Example: Gordon Ramsay ">
//   </div>
//   <div class="form-group row">
//       <label for="role">Role</label>
//       <input type="text" class="form-control" id="role" placeholder="Example: Chef">
//   </div>
//   <div class="form-group row">
//       <label for="imageUrl">Image</label>
//       <input type="text" class="form-control" id="staff-image-url" placeholder="Place Image URL">
//   </div>
//     <button id="add-staff-btn" type="submit" class="btn btn-info form-btn"><i class="fas fa-plus-circle"></i> Add Staff Member</button>
//     `);

//   $('#add-staff-btn').on('click', () => {
//     console.warn('clicked add btn');

//     const data = {
//       name: $('#name').val() || false,
//       role: $('#role').val() || false,
//       imageUrl: $('#staff-image-url').val() || false,
//     };

//     if (Object.values(data).includes(false)) {
//       $('#error-message').html(
//         `<div class="alert alert-danger" role="alert">
//         Please complete all fields
//       </div>`
//       );
//     } else {
//       $('#error-message').html('');

//       staffData
//         .addStaffMember(data)
//         .then(() => {
//           $('#success-message').html(
//             `<div class="alert alert-success" role="alert">
//           Right on! New staff member was added!
//         </div>`
//           );
//         })
//         .catch((error) => console.warn(error));

//       setTimeout(() => {
//         $('#success-message').html('');
//       }, 3000);

//       $('#name').val('');
//       $('#role').val('');
//       $('#staff-image-url').val('');
//     }
//     $('#add-staff-form').remove();
//   });
// };

export default { addStaffMemberForm };
