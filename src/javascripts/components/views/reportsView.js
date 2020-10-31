import popularItemsCard from '../cards/popularItemsCard';

const reportsView = () => {
  $('#app').append(`<div id="popularMenuItemsDiv">
  <h3>Most Popular Menu Items</h3>
  <ol id="popularItemsList"></ol>
  </div>`);
  popularItemsCard.popularItems();
};

export default { reportsView };
