import reservations from '../../helpers/data/reservationData';
import card from '../cards/reservationCards';

const reservationView = () => {
  $('#app').html(`<div id="add-reservation" style="background-color: white;"> 
  <div id="error-message-reservation"></div>
  <button id="addReservation" type="button" class="btn btn-info">Add Reservation</button>
  <div id="reservationSection"</div></div>`);
  reservations.getAllReservations().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#reservationSection').append(card.reservationCardMaker(item));
      });
    } else {
      $('#reservationSection').html(
        '<h2 id="no-reservations">No Reservations Yet! Call Le Baquette at (615)342-2763 to make one today!</h2>'
      );
    }
  });
};

export default { reservationView };
