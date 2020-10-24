import firebase from 'firebase/app';
import reservationView from '../views/reservationView';
import image from '../../helpers/images/seating.png';
import reservationData from '../../helpers/data/reservationData';
import staffData from '../../helpers/data/staffData';

require('jquery-ui-bundle');

const reservationTimes = () => {
  const times = ['5:00pm', '5:30pm', '6:00pm', '6:30pm', '7:00pm', '7:30pm', '8:00pm', '8:30pm', '9:00pm', '9:30pm', '10:00pm'];
  times.forEach((item) => {
    $('#time').append(`<option value="${item}">${item}</option>`);
  });
};

// First Form to Appear
const editReservationForm = (reservationObject, reservationFirebaseKey) => {
  $('#edit-reservation').html(`<h2 class="form-title">Edit Reservation</h2>
    <div id="success-message"></div>
    <div>
      <div id="error-message"></div>
<div id="input-group">
    <div class="form-group">
      <label for="image" class="form-label">Number of Guests</label>
      <input value="${reservationObject.numberOfGuests}" type="text" class="form-control" id="numberOfGuests" placeholder="# of Guests">
    </div>
      <div class="form-group">
        <label for="date" class="form-label">Date</label>
        <input value="${reservationObject.date}" class="form-control" id="datePicker" autocomplete="off" placeholder="Click to choose a date">
      </div>
      <div class="form-group">
      <label for="time" class="form-label">Time</label>
      <select class="form-control" id="time">
        <option selected ='selected' value="${reservationObject.time}">${reservationObject.time}</option>
      </select>
      </div>
      <div class="form-group">
      <label for="date" class="form-label">Seating Preference</label>
      <input value="${reservationObject.seatingPreference}" class="form-control" id="seatingPreference" placeholder="View Chart Below">
    </div>
    </div>
    <div id="input-group">
        <div class="form-group">
          <label for="server">Server</label>
          <select class="form-control" id="Server">
                <option selected ='selected' value="${reservationObject.server}">${reservationObject.server}</option>
              </select>
        </div>
          <div class="form-group">
            <label for="Busser">Busser</label>
            <select class="form-control" id="Busser">
                <option selected ='selected' value="${reservationObject.busser}">${reservationObject.busser}</option>
              </select>
          </div>
          <div class="form-group">
            <label for="Bartender">Bartender</label>
            <select class="form-control" id="Bartender">
                <option selected ='selected' value="${reservationObject.busser}">${reservationObject.busser}</option>
              </select>
          </div>
          <div class="form-group">
            <label for="Host">Host</label>
            <select class="form-control" id="Host">
                <option selected ='selected' value="${reservationObject.host}">${reservationObject.host}</option>
              </select>
          </div>
          </div>
    <div id="seating-section">
    <div id="reservation-buttons">
    <button id="seatingBtn" type="button" class="btn btn-outline">View Seating Chart</button>
    <button id="updateReservationBtn" type="button" class="btn btn-outline">Update Reservation</button>
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

  staffData.getAllStaff().then((response) => {
    response.forEach((item) => {
      const { role } = item;
      $(`#${role}`).append(`<option value="${item.name}">${item.name}</option>`);
    });
  });

  $('#updateReservationBtn').on('click', (e) => {
    e.preventDefault();
    // Capturing the first Segment of Data
    const data = {
      date: $('#datePicker').val() || false,
      numberOfGuests: $('#numberOfGuests').val() || false,
      time: $('#time').val() || false,
      seatingPreference: $('#seatingPreference').val() || false,
      server: $('#Server').val() || '',
      busser: $('#Busser').val() || '',
      bartender: $('#Bartender').val() || '',
      host: $('#Host').val() || ''
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      // editGuestInfo(reservationObject, reservationFirebaseKey);
      reservationData.updateReservation(reservationFirebaseKey, data)
        .then(() => {
          $('#success-message').html(
            `<div class="alert" role="alert">
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
