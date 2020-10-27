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
      <tr class="orderedItem mont-font">
        <td class="order-name td-orders">${menuItem.name}</td>
        <td class="td-small td-orders">${menuItem.price}</td>
        <td class="td-orders delete-order-btn" id="${menuItem.id}"><i class="far fa-trash-alt"></i></td>
      </tr>`);
    });
  } else if (tentativeOrders === null) {
    $('#itemsOrdered').html('');
  }
};

const addOrdersView = (reservationId) => {
  $('#app').html(`
  <div id="ordersDiv" class="container-fluid">
    <h2 class="prat-font">Add an Order</h2>
    <div id="errorMsg"></div>
    <div class="row order-body">
      <div id="menuItemsDiv" class="col-7"></div>
      <div id="checkoutDiv" class="col-5">
        <h5 id="tableNum" class="mont-font"></h5>
        <table class="table table-borderless" id="itemsOrdered"></table>
        <div id="orderTotals">
          <button class="btn add-order-btn btn-outline" id="${reservationId}">Add Order</button>
        </div>
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

    if (tentOrders === null || tentOrders.length === 0) {
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
