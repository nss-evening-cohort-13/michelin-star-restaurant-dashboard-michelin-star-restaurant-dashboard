import menuItems from '../../helpers/data/menuItemsData';
import orderCards from '../cards/ordersCard';
import reservationData from '../../helpers/data/reservationData';
import orderData from '../../helpers/data/ordersData';
import orderReservation from '../../helpers/data/orderReservationData';
import reservationView from './reservationView';

const displayTentativeOrders = (reservationId) => {
  const tentativeOrders = orderData.getTentativeOrders(reservationId);
  if (tentativeOrders !== null) {
    $('#itemsOrdered').html('');
    tentativeOrders.forEach((menuItem) => {
      $('#itemsOrdered').append(`
      <ul>
        <li>${menuItem.name}</li>
        <li>${menuItem.price}</li>
        <li class="delete-order-btn" id="${menuItem.id}"><i class="far fa-trash-alt"></i></li>
      </ul>`);
    });
  } else if (tentativeOrders === null) {
    $('#itemsOrdered').html('');
  }
};

const addOrdersView = (reservationId) => {
  $('#app').html(`
  <div id="ordersDiv">
    <h2>Add an Order</h2>
    <div id="errorMsg"></div>
    <div id="menuItemsDiv">
    </div>
    <div id="checkoutDiv">
      <h5 id="tableNum"></h5>
      <div id="itemsOrdered">
      </div>
      <div id="orderTotals">
        <button class="btn add-order-btn btn-outline" id="${reservationId}">Add Order</button>
      </div>
    </div>
  </div>`);

  menuItems
    .getMenuItems()
    .then((response) => {
      response.forEach((menuItem) => {
        $('#menuItemsDiv').append(orderCards.buildOrdersCard(menuItem));
      });
    })
    .catch((error) => console.warn(error));

  reservationData.getSingleReservation(reservationId).then((response) => {
    $('#tableNum').text(`Table ${response.table}`);
  });

  displayTentativeOrders(reservationId);

  $('body').on('click', '.order-card', (e) => {
    e.stopImmediatePropagation();
    $('#errorMsg').html('');

    const menuItemId = e.currentTarget.id;
    menuItems
      .getSingleMenuItem(menuItemId)
      .then((response) => {
        orderData.addToOrder(reservationId, response);
        displayTentativeOrders(reservationId);
      });
  });

  $('body').on('click', '.delete-order-btn', (e) => {
    e.stopImmediatePropagation();
    orderData.removeItem(reservationId, e.currentTarget.id);
    displayTentativeOrders(reservationId);
  });

  $('body').on('click', '.add-order-btn', (e) => {
    const reservId = e.currentTarget.id;
    const tentOrders = orderData.getTentativeOrders(reservationId);

    if (tentOrders === null) {
      $('#errorMsg').html(`<div class="alert alert-secondary" role="alert">
      Please select an order.
    </div>`);
    } else {
      tentOrders.forEach((menuItem) => {
        const data = {
          menuItemId: menuItem.id,
          reservationId: reservId
        };
        orderReservation.addOrderReservation(data);
        orderData.clearOrder(reservId);
        reservationView.reservationView();
      });
    }
  });
};

export default { addOrdersView };
