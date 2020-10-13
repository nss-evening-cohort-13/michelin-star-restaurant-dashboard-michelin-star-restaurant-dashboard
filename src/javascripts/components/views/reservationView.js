// import form from '../forms/addReservationForm';

const reservationView = () => {
  $('#app').html(`<div id="add-reservation" style="background-color: white;"> 
  <div id="error-message-reservation"></div><div id="buttonHere"><button id="add-reservation-btn" type="button" class="btn btn-info">Add Reservation</button></div>Show me the reservations!</div>`);
};

export default { reservationView };
