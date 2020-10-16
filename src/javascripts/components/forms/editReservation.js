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

// SECOND FORM TO APPEAR
// const editGuestInfo = (reservationObject, reservationFirebaseKey) => {
//   console.warn('guest info object', reservationObject);
//   $('#edit-reservation').html(`<h2>Edit Guest Info</h2>
//         <div id="success-message"></div>
//           <div id="error-message"></div>
//     <form>
//     <div id="input-group">
//         <div class="form-group">
//           <label for="firstName">First Name</label>
//           <input value="${reservationObject.firstName}" type="text" class="form-control" id="firstName" placeholder="First Name">
//         </div>
//           <div class="form-group">
//             <label for="lastName">Last Name</label>
//             <input value="${reservationObject.lastName}" class="form-control" id="lastName" autocomplete="off" placeholder="Last Name">
//           </div>
//           <div class="form-group">
//             <label for="phoneNumber">Phone Number</label>
//             <input value="${reservationObject.phoneNumber}" type="tel" class="form-control" id="phoneNumber" class="timePicker" autocomplete="off" placeholder="ex: 615-123-4567">
//           </div>
//           </div>
//           <button id="updateGuestInfoBtn" type="button" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Guest Info</button>
//         </form>`);
//   $('#updateGuestInfoBtn').on('click', (e) => {
//     e.preventDefault();
//     //   This is adding the new data to the first data object
//     const data = {
//       firstName: $('#firstName').val() || false,
//       lastName: $('#lastName').val() || false,
//       phoneNumber: $('#phoneNumber').val() || false,
//     };

//     console.warn('guest data', data);
//     if (Object.values(data).includes(false)) {
//       $('#error-message').html(
//         '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
//       );
//     } else {
//       $('#error-message').html('');
//       reservationData.updateReservation(reservationFirebaseKey, data)
//         .then(() => {
//           $('#success-message').html(
//             `<div class="alert alert-success" role="alert">
//           Your reservation was updated!
//           </div>`
//           );
//         }).catch((error) => console.warn(error));

//       setTimeout(() => {
//         $('#success-message').html('');
//       }, 3000);
//       $('#firstName').val('');
//       $('#lastName').val('');
//       $('#phoneNumber').val('');
//     }
//   });
// };

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

  // Button click to chow edit guest info form
  // $('body').on('click', '#edit-guest-btn', () => {
  //   console.warn('edit guest clicked');
  //   editGuestInfo(reservationObject, reservationFirebaseKey);
  // });

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
