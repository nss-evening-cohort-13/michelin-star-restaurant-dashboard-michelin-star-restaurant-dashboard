import staffData from '../../helpers/data/staffData';
import card from '../cards/staffMemberCard';

const filterStaffButtons = () => {
  $('.filterStaff').html(` <div class="form-group">
    <label for="filter">Filter</label>
      <select class="form-control" id="roleOfStaff">
        <option value="">Staff Roles</option>
      </select>
      <button type="submit" id="filterStaffButton" class="btn btn-outline-success">Filter Staff</button>`);

  staffData.getAllStaff().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.role}">${item.role}</option>`);
    });
  });
  $('#filterStaffButton').on('click', (e) => {
    e.preventDefault();
    const role = $('#roleOfStaff').val();
    $('.staff-member-container').html('');
    staffData.getStaffByRole(role).then((response) => {
      response.forEach((item) => {
        console.warn('item', item);
        $('.staff-member-container').append(card.authStaffView(item));
      });
    });
  });
};

export default { filterStaffButtons };
