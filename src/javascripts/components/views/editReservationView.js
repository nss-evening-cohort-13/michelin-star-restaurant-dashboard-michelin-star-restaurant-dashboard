import reservationData from '../../helpers/data/reservationData';
import form from '../forms/editReservation';

const editReservationView = (reservationFirebaseKey) => {
  $('#app').html('<div id="edit-reservation" style="background-color: white;">Hello</div>');
  console.warn(reservationFirebaseKey, 'res fbkey');
  reservationData.getSingleReservation(reservationFirebaseKey).then((response) => {
    console.warn(reservationFirebaseKey, 'single res fbkey');
    console.warn(response, 'sing res response');
    form.editReservationForm(response, response.uid);
  });
};

export default { editReservationView };
