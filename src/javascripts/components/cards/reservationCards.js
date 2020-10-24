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
        <li class="list-group-item">Server: ${reso.server}</li>
        <li class="list-group-item">Busser: ${reso.busser}</li>
        <li class="list-group-item">Bartender: ${reso.bartender}</li>
        <li class="list-group-item">Host: ${reso.host}</li>
      </ul>
       <div id="removeTarget" class="reservation-btn-container card-btn-container">
         <button class="btn edit-reservation-btn edit-btn btn-outline" id="${reso.uid}">Edit</button>
         <button class="btn delete-reservation-btn delete-btn btn-outline" id="${reso.uid}">Delete</button>
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
