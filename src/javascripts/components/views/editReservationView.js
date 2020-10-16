import reservationData from '../../helpers/data/reservationData';
import form from '../forms/editReservation';

const editReservationView = (reservationFirebaseKey) => {
  $('#app').html('<div id="edit-reservation" style="background-color: white;">Hello</div>');
  console.warn(reservationFirebaseKey, 'res fbkey');
  reservationData.getSingleReservation(reservationFirebaseKey).then((response) => {
    form.editReservationForm(response);
    console.warn(response, 'single res');
  });
};

export default { editReservationView };
