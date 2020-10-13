// import form from '../forms/addReservationForm';

const reservationView = () => {
  $('#app').html(`<div id="add-reservation" style="background-color: white;"> 
  <div id="error-message-reservation"></div><button id="add-reservation-btn" type="button" class="btn btn-info">Add Reservation</button>Show me the reservations!</div>`);

  $('a.nav-link#menuLink').css({ color: 'white' });
  $('a.nav-link#staffLink').css({ color: 'white' });
  $('a.nav-link#reservationLink').css({ color: '#EA859E' });
};

export default { reservationView };
