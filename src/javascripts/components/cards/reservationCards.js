import reservationData from '../../helpers/data/reservationData';
import singleReservation from '../views/singleReservationView';

const reservationCardMaker = (reso) => {
  const domString = `<div id="${reso.uid}" class="card reservationCard" style="width: 16rem;">
    <div class="reservation-card-header">
      <h4 id="guestName">${reso.firstName} ${reso.lastName} </h4>
    </div>
    <ul class="list-group reso-list list-group-flush">
      <li class="list-group-item">Guests: ${reso.numberOfGuests}</li>
      <li class="list-group-item">When: ${reso.time} on ${reso.date}</li>
      <li class="list-group-item">Phone Number: ${reso.phoneNumber}</li>
      <li class="list-group-item">Table Preference: Table ${reso.seatingPreference}</li>
    </ul>
</div>`;
  return domString;
};
const authReservationCardMaker = (reso) => {
  let domString = `<div id="${reso.uid}" class="card reservationCard" style="width: 16rem;">
      <div class="reservation-card-header">
        <h4 id="guestName">${reso.firstName} ${reso.lastName} </h4>
      </div>
      <ul class="list-group reso-list list-group-flush">
        <li class="list-group-item">Guests: ${reso.numberOfGuests}</li>
        <li class="list-group-item">When: ${reso.time} on ${reso.date}</li>
        <li class="list-group-item">Phone Number: ${reso.phoneNumber}</li>
        <li class="list-group-item">Table Preference: Table ${reso.seatingPreference}</li>
      </ul>
       <div id="removeTarget" class="reservation-btn-container card-btn-container">
         <button class="btn edit-reservation-btn edit-btn btn-outline" id="${reso.uid}">Edit</button>
         <button class="btn delete-reservation-btn delete-btn btn-outline" id="${reso.uid}">Delete</button>
         <button class="btn details-reservation-btn btn-outline" data-toggle="modal" data-target="#exampleModal" type="button" id="${reso.uid}">Details</button>
       </div>
      </div>
  </div>`;

  domString += singleReservation.singleReservationView();
  $('body').on('click', '.delete-reservation-btn', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.reservationCard#${firebaseKey}`).remove();
    reservationData.deleteReservation(firebaseKey);
  });
  return domString;
};

export default { reservationCardMaker, authReservationCardMaker };
