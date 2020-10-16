import reservationData from '../../helpers/data/reservationData';
import form from '../forms/editReservation';

const editReservationView = (reservationFirebaseKey) => {
  $('#app').html('<div id="edit-reservation"></div>');
  reservationData.getSingleReservation(reservationFirebaseKey).then((response) => {
    form.editReservationForm(response, response.uid);
  });
};

export default { editReservationView };
