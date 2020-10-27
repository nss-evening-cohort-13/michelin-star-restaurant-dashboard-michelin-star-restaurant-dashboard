import menuItems from '../../helpers/data/menuItemsData';
import orderCards from '../cards/ordersCard';
import reservationData from '../../helpers/data/reservationData';
import orderData from '../../helpers/data/ordersData';
import orderReservation from '../../helpers/data/orderReservationData';
import reservationView from './reservationView';
import menuIngredients from '../../helpers/data/menuItemIngredientsData';

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
  <div id="ordersDiv" class="container">
    <h2 class="prat-font">Add an Order</h2>
    <div id="errorMsg"></div>
    <div class="row">
      <div id="menuItemsDiv" class="col-md"></div>
      <div id="checkoutDiv" class="col-sm">
        <h5 id="tableNum" class="mont-font"></h5>
        <table class="table table-borderless" id="itemsOrdered"></table>
        <div id="orderTotals">
          <button class="btn add-order-btn btn-outline" id="${reservationId}">Add Order</button>
        </div>
      </div>
    </div>
  </div>`);

  // const arr = [];

  // const promiseArr = arr.map(() => menuItems.getMenuItems().then((response) => {
  //   response.forEach((menuItem) => {
  //     menuIngredients.getQuantity(menuItem.id).then((res) => {
  //       if (res.includes(0)) {
  //         $('#menuItemsDiv').append(orderCards.buildOrdersCard(menuItem));
  //       }
  //     });
  //   });
  // }));

  const printAvailableMenu = () => {
    menuItems.getMenuItems().then((response) => {
      response.forEach((menuItem) => {
        menuIngredients.getQuantity(menuItem.id).then((res) => {
          if (!res.includes(0)) {
            $('#menuItemsDiv').append(orderCards.buildOrdersCard(menuItem));
          }
        });
      });
    });
  };

  printAvailableMenu();

  // menuItems
  //   .getMenuItems()
  //   .then((response) => {
  //     response.forEach((menuItem) => {
  //       menuIngredients.getQuantity(menuItem.id).then((res) => {
  //         if (res.includes(0)) {
  //           $('#menuItemsDiv').append(orderCards.buildOrdersCard(menuItem));
  //         }
  //       });
  //     });
  //   })
  //   .catch((error) => console.warn(error));

  // const coolFunction = (id) => menuIngredients.getQuantity(id);

  // const hasIngredients = () => new Promise(() => {
  //   menuItems.getMenuItems().then((res) => {
  //     console.warn(res);
  //     return res;
  //   }).then((re) => {
  //     console.warn('inner', re);
  //     const ids = [];
  //     re.forEach((menuItem) => {
  //       ids.push(menuItem.id);
  //     });
  //     console.warn(ids);
  //     return ids;
  //   }).then((id) => {
  //     id.forEach((menuId) => {
  //       coolFunction(menuId).then((r) => {
  //         console.warn(r);
  //       });
  //     });
  //   });
  // }).then(console.warn('outer'));
  // .then((response) => response).then((res) => {
  //   res.forEach((menuItem) => {
  //     menuIngredients.getQuantity(menuItem.id).then((re) => {
  //       if (!re.includes(0)) {
  //         $('#menuItemsDiv').append(orderCards.buildOrdersCard(menuItem));
  //       }
  //     });
  //   });
  // });

  // hasIngredients();

  // const getQuan = menuIngredients.getQuantity();

  // Promise.all([getMenu, getQuan]).then(([menuResponse, quantityResponse]) => {
  //   menuResponse.forEach((menuItem) => {
  //     getQuan(menuItem.id).then(() => {
  //       if (!quantityResponse.includes(0)) {
  //         $('#menuItemsDiv').append(orderCards.buildOrdersCard(menuItem));
  //       }
  //     });
  //   });
  // });

  // const menu = menuItems.getMenuItems((response) => response);
  // console.log(menu);
  // // const menuIds = menu.map((x) => x.id);

  // const promiseArray = (arr) => {
  //   const promises = [];
  //   arr.forEach((item) => {
  //     promises.push(item);
  //   });
  //   return promises;
  // };

  // console.warn(promiseArray(menu));
  // const x = [];
  // x[0] = new Promise((resolve) => {
  //   resolve(menuIngredients.getQuantity(menuIds[0]));
  // });
  // console.log(x);

  // menuItems.getMenuItems().then((response) => {
  //   response.forEach((item) => {
  //     menuIngredients.getQuantity(item.id).then((res) => {
  //       res.forEach((re) => {
  //         if (!re.includes(0)) {
  //           $('#menuItemsDiv').append(orderCards.buildOrdersCard(item));
  //         }
  //       });
  //     });
  //   });
  // });

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
        menuIngredients.subtractQuantity(menuItem.id);
        orderReservation.addOrderReservation(data);
        orderData.clearOrder(reservId);
        reservationView.reservationView();
      });
    }
  });
};

export default { addOrdersView };
