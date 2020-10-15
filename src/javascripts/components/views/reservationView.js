import reservations from '../../helpers/data/reservationData';
import card from '../cards/reservationCards';

const reservationView = (user) => {
  $('#app').html(`<div id="add-reservation"> 
  <div id="error-message-reservation"></div>
  <button id="addReservation" type="button" class="btn btn-outline">Add Reservation</button>
  <div id="reservationSection"</div></div>`);
  $('a.nav-link#menuLink').css({ color: 'white' });
  $('a.nav-link#staffLink').css({ color: 'white' });
  $('a.nav-link#reservationLink').css({ color: '#EA859E' });
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
