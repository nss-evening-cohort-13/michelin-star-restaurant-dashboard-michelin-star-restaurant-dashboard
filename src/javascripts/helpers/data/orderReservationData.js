import axios from 'axios';
import apiKeys from '../apiKeys.json';
import objToArray from './menuItemIngredientsData';
import menuItems from './menuItemsData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addOrderReservation = (data) => axios
  .post(`${baseUrl}/reservations_menuItems.json`, data)
  .then((response) => {
    const update = { fbKey: response.data.name };
    axios.patch(`${baseUrl}/reservations_menuItems/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

const getReservationOrders = (reservationId) => axios.get(`${baseUrl}/reservations_menuItems.json?orderBy="reservationId"&equalTo="${reservationId}"`);

const orderTotal = (reservationId) => new Promise((resolve, reject) => {
  const getReservation = getReservationOrders(reservationId);
  const getMenuItems = menuItems.getMenuItems();

  Promise.all([getReservation, getMenuItems]).then(([reservationResponse, menuResponse]) => {
    const menuPrices = [];
    const orderArray = objToArray.objToArray(reservationResponse.data);
    orderArray.forEach((menuItem) => {
      const menuObject = menuResponse.find(
        (price) => price.id === menuItem.menuItemId
      );
      const menuItemUse = menuObject.price || 0;
      menuPrices.push(menuItemUse);
    });
    resolve(menuPrices);
  }).catch((error) => reject(error));
});

const getMenuOrders = (menuItemId) => axios.get(`${baseUrl}/reservations_menuItems.json?orderBy="menuItemId"&equalTo="${menuItemId}"`);

const getAllMenRes = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/reservations_menuItems.json`)
    .then((res) => {
      const resArray = objToArray.objToArray(res.data);
      resolve(resArray);
    })
    .catch((err) => reject(err));
});

const deleteReservationItems = (joinTableId) => axios.delete(`${baseUrl}/reservations_menuItems/${joinTableId}.json`);

export default {
  addOrderReservation,
  deleteReservationItems,
  orderTotal,
  getReservationOrders,
  getMenuOrders,
  getAllMenRes
};
