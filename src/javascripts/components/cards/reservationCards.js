import reservationData from '../../helpers/data/reservationData';
import singleReservation from '../views/singleReservationView';
import orderReservationData from '../../helpers/data/orderReservationData';
import menuItemIngredientsData from '../../helpers/data/menuItemIngredientsData';

const reservationCardMaker = (reso) => {
  const domString = `<div id="${reso.uid}" class="card reservationCard" style="width: 16rem;">
    <div class="reservation-card-header">
      <h4 id="guestName">${reso.firstName} ${reso.lastName} </h4>
    </div>
    <ul class="list-group reso-list list-group-flush">
      <li class="list-group-item">Guests: ${reso.numberOfGuests}</li>
      <li class="list-group-item">When: ${reso.time} on ${reso.date}</li>
      <li class="list-group-item">Phone Number: ${reso.phoneNumber}</li>
      <li class="list-group-item">Table Preference: Table ${reso.table}</li>
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
        <li class="list-group-item">Table ${reso.table}</li>
      </ul>
       <div id="removeTarget" class="reservation-btn-container card-btn-container">
         <button class="btn edit-reservation-btn edit-btn btn-outline" id="${reso.uid}">Edit</button>
         <button class="btn delete-reservation-btn delete-btn btn-outline" id="${reso.uid}">Delete</button>
         <button class="btn orders-reservation-btn btn-outline" id="${reso.uid}">Orders</button>
         <button class="btn details-reservation-btn btn-outline" data-toggle="modal" data-target="#view-${reso.uid}" type="button" id="${reso.uid}">Details</button>
       </div>
      </div>
  </div>`;

  domString += singleReservation.singleReservationView(reso);
  $('body').on('click', '.delete-reservation-btn', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.reservationCard#${firebaseKey}`).remove();
    reservationData.getAllReservations().then((resoResponse) => {
      resoResponse.forEach((reservation) => {
        orderReservationData.getReservationOrders(reservation.uid).then((resoRes) => {
          menuItemIngredientsData.objToArray(resoRes.data).forEach((resoId) => {
            if (resoId.reservationId === firebaseKey) {
              orderReservationData.deleteReservationItems(resoId.fbKey);
            }
          });
        });
      });
    });
    reservationData.deleteReservation(firebaseKey);
  });
  return domString;
};

export default { reservationCardMaker, authReservationCardMaker };
