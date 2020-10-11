import image from '../../helpers/images/seating.png';
import reservationData from '../../helpers/data/reservationData';

require('jquery-ui-bundle');

const addGuestInfo = (data) => {
  $('#add-reservation').html(`<h2>Enter User Info</h2>
        <div id="success-message"></div>
          <div id="error-message"></div>
    <form>
    <div id="input-group">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" id="firstName" placeholder="Your First Name">
        </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input class="form-control" id="lastName" autocomplete="off" placeholder="Your Last Name">
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input class="form-control" id="phoneNumber" class="timePicker" autocomplete="off" placeholder="ex: (615)123-4567">
          </div>
          </div>
          <button id="addReservationBtn" type="button" class="btn btn-info"><i class="fas fa-plus-circle"></i> Complete Reservation</button>
        </form>`);
  $('#addReservationBtn').on('click', (e) => {
    e.preventDefault();
    //   This is adding the new data to the first data object
    const guestData = data;
    guestData.firstName = $('#firstName').val() || false;
    guestData.lastName = $('#lastName').val() || false;
    guestData.phoneNumber = $('#phoneNumber').val() || false;
    if (Object.values(guestData).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      reservationData
        .addReservation(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Reservation Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);
      $('#firstName').val('');
      $('#lastName').val('');
      $('#phoneNumber').val('');
    }
  });
};
// First Form to Appear
const addReservationForm = () => {
  $('#add-reservation').html(`<h2>Add A Reservation</h2>
    <div id="success-message"></div>
    <div>
      <div id="error-message"></div>
<div id="input-group">
    <div class="form-group">
      <label for="image">Number of Guests</label>
      <input type="text" class="form-control" id="numberOfGuests" placeholder="Number of Guests">
    </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input class="form-control" id="datePicker" autocomplete="off" placeholder="Click to choose a date">
      </div>
      <div class="form-group">
        <label for="date">Time</label>
        <input class="form-control" id="time" class="timePicker" placeholder="Enter Time: ex: 7:00pm">
      </div>
      <div class="form-group">
      <label for="date">Seating Preference</label>
      <input class="form-control" id="seatingPreference" placeholder="Enter a Table number from the chart">
    </div>
    </div>
    <div id="seating-section">
    <div id="reservation-buttons">
    <button id="seating-btn" type="button" class="btn btn-primary">View Seating Chart</button>
    <button id="add-guest-btn" type="button" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add Guest Info</button>
    </div>
    </div>
    <div id="viewSeats"></div>
    </div>`);
  // Code for Date dropdown
  $('#datePicker').datepicker();
  //  Code for seating chart dropdown
  let seatingChartIsNotShown = true;
  $('#seating-btn').on('click', (e) => {
    e.preventDefault();
    if (seatingChartIsNotShown) {
      $('#viewSeats').html(
        `<img id="seatingChart"src="${image}" alt="seating chart">`
      );
      seatingChartIsNotShown = false;
    } else {
      $('#viewSeats').html('');
      seatingChartIsNotShown = true;
    }
  });
  $('#add-guest-btn').on('click', (e) => {
    e.preventDefault();
    // Capturing the first Segment of Data
    const data = {
      date: $('#datePicker').val() || false,
      numberOfGuests: $('#numberOfGuests').val() || false,
      time: $('#time').val() || false,
      seatingPreference: $('#seatingPreference').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      addGuestInfo(data);
    }
    setTimeout(() => {
      $('#success-message').html('');
    }, 3000);
  });
};

export default { addReservationForm };