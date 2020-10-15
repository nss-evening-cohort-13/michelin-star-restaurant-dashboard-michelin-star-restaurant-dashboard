import staffData from '../../helpers/data/staffData';
import form from '../forms/updateStaffMemberForm';

const updateStaffView = (firebaseKey) => {
  $('#app').html('<div id="update-staff-form"></div>');
  staffData.getSingleStaffMember(firebaseKey).then((response) => {
    form.updateStaffMemberForm(response);
  });
};

export default { updateStaffView };
