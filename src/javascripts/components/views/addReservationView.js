import form from '../forms/addReservationForm';

const addReservationView = () => {
  $('#app').html('<div class="forms" id="add-reservation"></div>');
  form.addReservationForm();
};

export default { addReservationView };
