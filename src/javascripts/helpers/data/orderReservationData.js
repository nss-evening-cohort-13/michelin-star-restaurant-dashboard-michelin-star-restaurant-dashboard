import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addOrderReservation = (data) => axios
  .post(`${baseUrl}/reservations_menuItems.json`, data)
  .then((response) => {
    const update = { fbKey: response.data.name };
    axios.patch(`${baseUrl}/reservations_menuItems/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

export default { addOrderReservation };
