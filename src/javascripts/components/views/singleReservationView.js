import orderReservationData from '../../helpers/data/orderReservationData';

const calculateTotal = (reso) => new Promise((resolve, reject) => {
  orderReservationData.orderTotal(reso.uid).then((res) => {
    if (res === null || res.length === 0) {
      resolve('0');
    }
    const orderTotalFinal = res.reduce((total, price) => total + price, 0);
    resolve(Number(orderTotalFinal.toFixed(2)));
  }).catch((error) => reject(error));
});

const singleReservationView = (reso) => {
  const domString = `<div class="modal fade reservation-modal" id="view-${reso.uid}" tabindex="-1" aria-labelledby="reservationModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h2 class="modal-header">${reso.firstName} ${reso.lastName} — Table ${reso.table}</h2>
        <p class="modal-header">Reservation for a party of ${reso.numberOfGuests}, ${reso.date} at ${reso.time}</p>
        <div id="reservationStaff">
          <h3 class="modal-header">Assigned Staff</h3>
          <p>Host: ${reso.host || 'Not Assigned'}</p>
          <p>Server: ${reso.server || 'Not Assigned'}</p>
          <p>Busser: ${reso.busser || 'Not Assigned'}</p>
          <p>Bartender: ${reso.bartender || 'Not Assigned'}</p>
        </div>
        <div id="billTotal">
          <h3 class="modal-header">Bill Info</h3>
          <p id="total-${reso.uid}"></p>
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

export default { singleReservationView, calculateTotal };
