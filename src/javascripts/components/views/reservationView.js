import reservations from '../../helpers/data/reservationData';
import card from '../cards/reservationCards';

const reservationView = (user) => {
  $('#app').html(`<div id="add-reservation" style="background-color: white;"> 
  <div id="error-message-reservation"></div>
  <button id="addReservation" type="button" class="btn btn-info">Add Reservation</button>
  <div id="reservationSection"</div></div>`);
  reservations.getAllReservations().then((response) => {
    if (user) {
      response.forEach((item) => {
        $('#reservationSection').append(card.authReservationCardMaker(item));
      });
    } else {
      response.forEach((item) => {
        $('#reservationSection').append(card.reservationCardMaker(item));
      });
    }
  });
};

export default { reservationView };
