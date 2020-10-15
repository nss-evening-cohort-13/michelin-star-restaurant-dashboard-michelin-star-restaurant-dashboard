import reservationData from '../../helpers/data/reservationData';

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
       <div id="removeTarget" class="reservation-btn-container card-btn-container">
         <button class="btn btn-warning edit-reservation-btn edit-btn staff-btn" id="${reso.uid}">Edit</button>
         <button class="btn btn-danger delete-reservation-btn delete-btn staff-btn" id="${reso.uid}">Delete</button>
       </div>
      </div>
  </div>`;
  $('body').on('click', '.delete-reservation-btn', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.reservationCard#${firebaseKey}`).remove();
    reservationData.deleteReservation(firebaseKey);
  });
  return domString;
};

export default { reservationCardMaker, authReservationCardMaker };
