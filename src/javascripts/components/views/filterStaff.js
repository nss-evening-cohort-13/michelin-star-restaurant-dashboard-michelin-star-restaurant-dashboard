import staffData from '../../helpers/data/staffData';
import card from '../cards/staffMemberCard';

const filterStaffButtons = (user) => {
  $('.filterStaff').html(` <div class="form-group filterForm">
      <select class="form-control filterInput" id="roleOfStaff">
        <option value="">Staff Roles</option>
      </select>
      <button type="submit" id="filterStaffButton" class="btn btn-outline-success">Filter Staff</button>`);

  staffData.getAllStaff().then((response) => {
    const newArray = [];
    response.forEach((item) => {
      newArray.push(item.role);
      $('select').append(`<option value="${item.role}">${item.role}</option>`);
    });
    console.warn(newArray);
  });
  $('#filterStaffButton').on('click', (e) => {
    e.preventDefault();
    const role = $('#roleOfStaff').val();
    $('.staff-member-container').html('');

    if (user) {
      staffData.getStaffByRole(role).then((response) => {
        response.forEach((item) => {
          $('.staff-member-container').append(card.authStaffView(item));
        });
      });
    } else {
      staffData.getStaffByRole(role).then((response) => {
        response.forEach((item) => {
          $('.staff-member-container').append(card.unauthStaffView(item));
        });
      });
    }
  });
};

export default { filterStaffButtons };
