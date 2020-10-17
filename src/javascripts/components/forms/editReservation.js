import firebase from 'firebase/app';
import reservationView from '../views/reservationView';
import image from '../../helpers/images/seating.png';
import reservationData from '../../helpers/data/reservationData';

require('jquery-ui-bundle');

const reservationTimes = () => {
  const times = ['5:00pm', '5:30pm', '6:00pm', '6:30pm', '7:00pm', '7:30pm', '8:00pm', '8:30pm', '9:00pm', '9:30pm', '10:00pm'];
  times.forEach((item) => {
    $('select').append(`<option value="${item}">${item}</option>`);
  });
};

// First Form to Appear
const editReservationForm = (reservationObject, reservationFirebaseKey) => {
  $('#edit-reservation').html(`<h2>Edit Reservation</h2>
    <div id="success-message"></div>
    <div>
      <div id="error-message"></div>
<div id="input-group">
    <div class="form-group">
      <label for="image">Number of Guests</label>
      <input value="${reservationObject.numberOfGuests}" type="text" class="form-control" id="numberOfGuests" placeholder="# of Guests">
    </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input value="${reservationObject.date}" class="form-control" id="datePicker" autocomplete="off" placeholder="Click to choose a date">
      </div>
      <div class="form-group">
      <label for="time">Time</label>
      <select class="form-control" id="time">
        <option selected ='selected' value="${reservationObject.time}">${reservationObject.time}</option>
      </select>
      </div>
      <div class="form-group">
      <label for="date">Seating Preference</label>
      <input value="${reservationObject.seatingPreference}" class="form-control" id="seatingPreference" placeholder="View Chart Below">
    </div>
    </div>
    <div id="seating-section">
    <div id="reservation-buttons">
    <button id="seatingBtn" type="button" class="btn btn-primary">View Seating Chart</button>
    <button id="updateReservationBtn" type="button" class="btn btn-primary">Update Reservation</button>
    </div>
    </div>
    <div id="viewSeats"></div>
    </div>`);

  // Code for Date dropdown
  $('#datePicker').datepicker();

  // RESERVATION TIMES DROPDOWN
  reservationTimes();

  //  Code for seating chart dropdown
  let seatingChartIsNotShown = true;
  $('#seatingBtn').on('click', (e) => {
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

  $('#updateReservationBtn').on('click', (e) => {
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
      // editGuestInfo(reservationObject, reservationFirebaseKey);
      reservationData.updateReservation(reservationFirebaseKey, data)
        .then(() => {
          $('#success-message').html(
            `<div class="alert alert-success" role="alert">
          Your reservation was updated!
          </div>`
          );
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        }).then(() => {
          setTimeout(() => {
            firebase.auth().onAuthStateChanged((user) => {
              reservationView.reservationView(user);
            });
          }, 3000);
        }).catch((error) => console.warn(error));
    }
  });
};

export default { editReservationForm };
