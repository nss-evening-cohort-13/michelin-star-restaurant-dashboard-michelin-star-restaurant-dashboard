const reservationCardMaker = (reso) => {
  const domString = `<div id="${reso.uid}" class="card reservationCard" style="width: 16rem;">
    <div class="card-header">
      <h6 id="guestName">${reso.firstName} ${reso.lastName} </h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Guests: ${reso.numberOfGuests}</li>
      <li class="list-group-item">When: ${reso.time} on ${reso.date}</li>
      <li class="list-group-item">Phone Number: ${reso.phoneNumber}</li>
      <li class="list-group-item">Table Preference: Table ${reso.seatingPreference}</li>
    </ul>
  </div>`;
  return domString;
};

export default { reservationCardMaker };
