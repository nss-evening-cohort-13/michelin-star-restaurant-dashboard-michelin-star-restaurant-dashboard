import staffData from '../../helpers/data/staffData';
import card from '../cards/staffMemberCard';
import formBtn from './addStaffView';

const staffView = (user) => {
  $('#app').html(`<div class="staff-member-page">
                    <div class="staff-member-navigation"></div>
                    <div class="staff-form form" id="staffForm"></div>
                    <div class="staff-member-container"></div>
                  </div>`);
  $('.staff-form').css({ display: 'none' });
  $('a.nav-link#reservationLink').css({ color: 'white' });
  $('a.nav-link#menuLink').css({ color: 'white' });
  $('a.nav-link#staffLink').css({ color: '#EA859E' });
  staffData.getAllStaff().then((response) => {
    if (user) {
      $('.staff-member-navigation').html(formBtn.staffFormBtn());
      response.forEach((item) => {
        $('.staff-member-container').append(card.authStaffView(item));
      });
    } else {
      response.forEach((item) => {
        $('.staff-member-container').append(card.unauthStaffView(item));
      });
    }
  });
};

export default { staffView };
