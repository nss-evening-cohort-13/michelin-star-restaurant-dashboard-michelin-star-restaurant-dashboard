import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMenuItems = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/menuItems.json`).then((response) => {
    const allMenuItems = response.data;
    const menuItems = [];
    if (allMenuItems) {
      Object.keys(allMenuItems).forEach((itemKey) => {
        menuItems.push(allMenuItems[itemKey]);
      });
    }
    resolve(menuItems);
  }).catch((error) => reject(error));
});

const addMenuItem = (data) => axios.post(`${baseUrl}/menuItems.json`, data)
  .then((response) => {
    const update = { id: response.data.name };
    axios.patch(`${baseUrl}/menuItems/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

export default { addMenuItem, getMenuItems };
