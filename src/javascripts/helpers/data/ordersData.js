const getTentativeOrders = (reservationId) => {
  const tentativeOrdersStr = window.sessionStorage.getItem(reservationId);
  const tentOrders = JSON.parse(tentativeOrdersStr);
  return tentOrders;
};

const addToOrder = (reservationId, menuItem) => {
  const tentativeOrders = getTentativeOrders(reservationId);
  if (tentativeOrders === null) {
    const tentOrders = [];
    tentOrders.push(menuItem);
    window.sessionStorage.setItem(reservationId, JSON.stringify(tentOrders));
  } else {
    tentativeOrders.push(menuItem);
    window.sessionStorage.setItem(reservationId, JSON.stringify(tentativeOrders));
  }
};

const clearOrder = (reservationId) => {
  window.sessionStorage.removeItem(reservationId);
};

const checkIndex = (array, menuItemId) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].id === menuItemId) {
      return i;
    }
  }
  return -1;
};

const removeItem = (reservationId, menuItemId) => {
  const allItems = getTentativeOrders(reservationId);
  const index = checkIndex(allItems, menuItemId);
  allItems.splice(index, 1);
  window.sessionStorage.setItem(reservationId, JSON.stringify(allItems));
};

export default {
  addToOrder, clearOrder, getTentativeOrders, removeItem
};
