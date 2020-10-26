import firebase from 'firebase/app';
import reservationView from '../views/reservationView';
import image from '../../helpers/images/seating.png';
import reservationData from '../../helpers/data/reservationData';
import staffData from '../../helpers/data/staffData';
import tablesData from '../../helpers/data/tablesData';

require('jquery-ui-bundle');

const reservationTimes = () => {
  const times = ['5:00pm', '5:30pm', '6:00pm', '6:30pm', '7:00pm', '7:30pm', '8:00pm', '8:30pm', '9:00pm', '9:30pm', '10:00pm'];
  times.forEach((item) => {
    $('#time').append(`<option value="${item}">${item}</option>`);
  });
};

const guestNumber = () => {
  const numGuests = [1, 2, 3, 4];
  numGuests.forEach((guest) => {
    $('#numberOfGuests').append(`<option value="${guest}">${guest}</option>`);
  });
};

const tables = (guests) => {
  tablesData.getAllTables().then((response) => {
    response.sort((a, b) => a.number - b.number).forEach((item) => {
      if (guests <= item.numberOfSeats) {
        $('#table').append(`<option value="${item.number}">Table ${item.number} - ${item.numberOfSeats} Seats</option>`);
      }
    });
  });
};

const editStaffReservation = (data, reservationObject, reservationFirebaseKey) => {
  $('#edit-reservation').html(`<h2 class="form-title">Edit Reservation</h2>
  <div id="success-message"></div>
  <div id="input-group">
    <div class="form-group">
      <label for="table" class="form-label">Table</label>
      <select class="form-control" id="table">
        <option selected hidden value="${reservationObject.table}">Table ${reservationObject.table}</option>
      </select>
    </div>
  </div>
      <div id="input-group">
        <div class="form-group">
          <label for="server">Server</label>
          <select class="form-control" id="Server">
                <option selected hidden value="${reservationObject.server}">${reservationObject.server}</option>
              </select>
        </div>
          <div class="form-group">
            <label for="Busser">Busser</label>
            <select class="form-control" id="Busser">
                <option selected hidden value="${reservationObject.busser}">${reservationObject.busser}</option>
              </select>
          </div>
          <div class="form-group">
            <label for="Bartender">Bartender</label>
            <select class="form-control" id="Bartender">
                <option selected hidden value="${reservationObject.bartender}">${reservationObject.bartender}</option>
              </select>
          </div>
          <div class="form-group">
            <label for="Host">Host</label>
            <select class="form-control" id="Host">
                <option selected hidden value="${reservationObject.host}">${reservationObject.host}</option>
              </select>
          </div>
        </div>
        <div id="seating-section">
          <button id="seatingBtn" type="button" class="btn btn-outline">View Seating Chart</button>
          <button id="updateReservationStaffBtn" type="button" class="btn btn-outline"><i class="fas fa-plus-circle"></i>Update Staff</button>
          <div id="viewSeats"></div>
        </div>`);

  // TABLES DROPDOWN
  tables(data.numberOfGuests);

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

  $('#Server').append('<option value=""></option>');
  $('#Busser').append('<option value=""></option>');
  $('#Bartender').append('<option value=""></option>');
  $('#Host').append('<option value=""></option>');

  staffData.getAllStaff().then((response) => {
    response.forEach((item) => {
      const { role } = item;
      $(`#${role}`).append(`<option value="${item.name}">${item.name}</option>`);
    });
  });

  $('#updateReservationStaffBtn').on('click', (e) => {
    e.preventDefault();
    const reservData = data;
    reservData.table = $('#table').val() || '';
    reservData.server = $('#Server').val() || '';
    reservData.busser = $('#Busser').val() || '';
    reservData.bartender = $('#Bartender').val() || '';
    reservData.host = $('#Host').val() || '';
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
  });
};

// First Form to Appear
const editReservationForm = (reservationObject, reservationFirebaseKey) => {
  $('#edit-reservation').html(`<h2 class="form-title">Edit Reservation</h2>
    <div>
      <div id="error-message"></div>
<div id="input-group">
<div class="form-group">
<label for="image">Number of Guests</label>
<select class="form-control" id="numberOfGuests">
    <option selected hidden value="${reservationObject.numberOfGuests}">${reservationObject.numberOfGuests}</option>
  </select>
</div>
      <div class="form-group">
        <label for="date" class="form-label">Date</label>
        <input value="${reservationObject.date}" class="form-control" id="datePicker" autocomplete="off" placeholder="Click to choose a date">
      </div>
      <div class="form-group">
      <label for="time" class="form-label">Time</label>
      <select class="form-control" id="time">
        <option selected hidden value="${reservationObject.time}">${reservationObject.time}</option>
      </select>
      </div>
    </div>
    <div id="reservation-buttons">
    <button id="updateReservationBtn" type="button" class="btn btn-outline"><i class="fas fa-plus-circle"></i>Update Reservation</button>
    </div>
    </div>
    `);

  // Code for Date dropdown
  $('#datePicker').datepicker();

  // RESERVATION TIMES DROPDOWN
  reservationTimes();

  // Number of Guests Dropdown
  guestNumber();

  $('#updateReservationBtn').on('click', (e) => {
    e.preventDefault();
    // Capturing the first Segment of Data
    const data = {
      date: $('#datePicker').val() || false,
      numberOfGuests: $('#numberOfGuests').val() || false,
      time: $('#time').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      editStaffReservation(data, reservationObject, reservationFirebaseKey);
    }
  });
};

export default { editReservationForm };
