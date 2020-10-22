import axios from 'axios';
import apiKeys from '../apiKeys.json';
import ingredientsData from './ingredientsData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addMenuItemIngredients = (data) => axios.post(`${baseUrl}/menuItems_ingredients.json`, data)
  .catch((error) => console.warn(error));

// const getMenuItemIngredients = (menuItemId) => new Promise((resolve, reject) => {
//   const menuItemIngredientNames = [];
//   axios
//     .get(`${baseUrl}/menuItems_ingredients.json?orderBy="menuItemId"&equalTo="${menuItemId}"`)
//     .then((res) => {
//       Object.keys(res.data).forEach((ingredientId) => {
//         axios.get(`${baseUrl}/ingredients/${res.data[ingredientId].ingredientId}.json`).then((response) => {
//           const singleIngredient = response.data;
//           menuItemIngredientNames.push(singleIngredient.ingredient);
//         });
//       });
//       if (menuItemIngredientNames.length === Object.keys(res.data).length) {
//         resolve(menuItemIngredientNames);
//       }
//     }).catch((error) => reject(error));
// });
const objToArray = (objOfObjs) => {
  const array = [];
  Object.keys(objOfObjs).forEach((key) => {
    array.push(objOfObjs[key]);
  });
  return array;
};

const getMenuItemIngredients = (menuItemId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/menuItems_ingredients.json?orderBy="menuItemId"&equalTo="${menuItemId}"`)
    .then((menuRes) => {
      const menuArray = objToArray(menuRes.data);
      ingredientsData.getAllIngredients().then((ingredientsRes) => {
        const ingredientNames = [];
        menuArray.forEach((menuIngredient) => {
          const menuObject = ingredientsRes.find((ingredient) => ingredient.uid === menuIngredient.ingredientId);
          const menuIngredientUse = menuObject.ingredient;
          ingredientNames.push(menuIngredientUse);
          resolve(ingredientNames);
        });
      });
    }).catch((error) => reject(error));
});

export default { addMenuItemIngredients, getMenuItemIngredients };
