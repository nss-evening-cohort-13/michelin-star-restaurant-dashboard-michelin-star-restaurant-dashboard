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

const deleteMenuItem = (firebaseKey) => axios.delete(`${baseUrl}/menuItems/${firebaseKey}.json`);

const updateMenuItem = (firebaseKey, dataObject) => axios.patch(`${baseUrl}/menuItems/${firebaseKey}.json`, dataObject);

const getSingleMenuItem = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/menuItems.json?orderBy="id"&equalTo="${id}"`)
    .then((response) => {
      console.warn('get response', response.data);
      const menuItem = Object.values(response.data);
      const thisMenuItem = menuItem[0];
      console.warn('this menu item', thisMenuItem);
      resolve(thisMenuItem);
    })
    .catch((error) => reject(error));
});

export default {
  addMenuItem,
  getMenuItems,
  deleteMenuItem,
  updateMenuItem,
  getSingleMenuItem
};
