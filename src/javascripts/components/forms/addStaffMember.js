import staffData from '../../helpers/data/staffData';

const addStaffMemberForm = () => {
  $('#add-staff-form').html(`
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
    `);

  $('#add-staff-btn').on('click', () => {
    console.warn('clicked add btn');

    const data = {
      name: $('#name').val() || false,
      role: $('#role').val() || false,
      imageUrl: $('#staff-image-url').val() || false,
    };

    staffData.addStaffMember(data);

    console.warn(data, 'staff data');
  });
};

export default { addStaffMemberForm };
