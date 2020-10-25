import menuItems from '../../helpers/data/menuItemsData';
import orderCards from '../cards/ordersCard';

const addOrdersView = () => {
  $('#app').html(`
  <div id="ordersDiv">
    <h2>Add an Order</h2>
    <div id="menuItemsDiv">
    </div>
    <div id="checkoutDiv">
    </div>
  </div>`);

  menuItems
    .getMenuItems()
    .then((response) => {
      response.forEach((menuItem) => {
        $('#menuItemsDiv').append(orderCards.buildOrdersCard(menuItem));
      });
    })
    .catch((error) => console.log(error));
};

export default { addOrdersView };
