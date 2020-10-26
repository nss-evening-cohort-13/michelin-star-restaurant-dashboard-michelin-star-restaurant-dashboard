const tentativeOrders = [];

const addToOrder = (reservationId, menuItem) => {
  tentativeOrders.push(menuItem);
  window.sessionStorage.setItem(reservationId, JSON.stringify(tentativeOrders));
};

const getTentativeOrders = (reservationId) => {
  const tentativeOrdersStr = window.sessionStorage.getItem(reservationId);
  const tentOrders = JSON.parse(tentativeOrdersStr);
  return tentOrders;
};

const clearOrder = (reservationId) => {
  window.sessionStorage.removeItem(reservationId);
};

const removeItem = (reservationId, menuItemId) => {
  const allItems = getTentativeOrders(reservationId);
  const filteredItems = allItems.filter((item) => item.id !== menuItemId);
  window.sessionStorage.setItem(reservationId, JSON.stringify(filteredItems));
};

export default {
  addToOrder, clearOrder, getTentativeOrders, removeItem
};
