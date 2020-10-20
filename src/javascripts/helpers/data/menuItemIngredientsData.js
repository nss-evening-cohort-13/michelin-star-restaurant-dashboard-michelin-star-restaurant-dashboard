/* eslint-disable guard-for-in */
import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addMenuItemIngredients = (data) => axios.post(`${baseUrl}/menuItems_ingredients.json`, data)
  .catch((error) => console.warn(error));

const getMenuItemIngredients = (menuItemId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/menuItems_ingredients.json?orderBy="menuItemId"&equalTo="${menuItemId}"`)
    .then((response) => {
      // const menuItemIngredientsData = response.data;
      // console.log(menuItemIngredientsData);
      // const menuItemIngredientObjs = [];
      // if (menuItemIngredientsData) {
      //   Object.keys(menuItemIngredientsData).forEach((menuItemIngredientId) => {
      //     menuItemIngredientObjs.push(menuItemIngredientsData[menuItemIngredientId]);
      //   });
      resolve(response);
    })
    .catch((error) => reject(error));
});

export default { addMenuItemIngredients, getMenuItemIngredients };
