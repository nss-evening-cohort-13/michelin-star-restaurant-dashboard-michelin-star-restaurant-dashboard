const singleReservationView = (reso) => {
  const domString = `<div class="modal fade reservation-modal" id="view-${reso.uid}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h2 class="modal-header">${reso.firstName} ${reso.lastName}</h2>
        <h5>Reservation for a party of ${reso.numberOfGuests}, ${reso.date} at ${reso.time}</h5>
        <div id="reservationStaff">
          <h3 class="modal-header">Assigned Staff</h3>
          <p>Host: ${reso.host}</p>
          <p>Server: ${reso.server}</p>
          <p>Busser: ${reso.busser}</p>
          <p>Bartender: ${reso.bartender}</p>
        </div>
        <div id="guestInfo">
          <h3 class="modal-header">Guest Information</h3>
          <p>${reso.firstName} ${reso.lastName} · ${reso.phoneNumber}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
  return domString;
};

export default { singleReservationView };
