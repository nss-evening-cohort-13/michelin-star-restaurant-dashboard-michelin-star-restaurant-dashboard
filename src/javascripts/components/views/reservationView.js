import firebase from 'firebase/app';
import 'firebase/auth';
import reservations from '../../helpers/data/reservationData';
import card from '../cards/reservationCards';
import singleReservation from './singleReservationView';

const reservationView = (user) => {
  const currentUser = user || firebase.auth().currentUser;
  $('#app').html(`<div id="add-reservation"> 
  <div id="error-message-reservation"></div>
  <button id="addReservation" type="button" class="btn btn-outline">Add Reservation</button>
  <div id="reservationSection"</div></div>
  <div id="edit-reservation"></div>`);
  $('a.nav-link#menuLink').css({ color: 'white' });
  $('a.nav-link#staffLink').css({ color: 'white' });
  $('a.nav-link#reservationLink').css({ color: '#EA859E' });
  reservations.getAllReservations().then((response) => {
    if (currentUser) {
      response.forEach((item) => {
        $('#reservationSection').append(card.authReservationCardMaker(item));
        singleReservation.calculateTotal(item).then((res) => {
          $(`#total-${item.uid}`).html(`Total: $${res}`);
        });
      });
    } else {
      response.forEach((item) => {
        $('#reservationSection').append(card.reservationCardMaker(item));
      });
    }
  });
};

export default { reservationView };
