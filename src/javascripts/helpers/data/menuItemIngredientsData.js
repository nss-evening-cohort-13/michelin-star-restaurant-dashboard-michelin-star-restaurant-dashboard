import axios from 'axios';
import apiKeys from '../apiKeys.json';
import ingredientsData from './ingredientsData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addMenuItemIngredients = (data) => axios
  .post(`${baseUrl}/menuItems_ingredients.json`, data)
  .then((response) => {
    const update = { fbKey: response.data.name };
    axios.patch(`${baseUrl}/menuItems_ingredients/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

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
          const menuObject = ingredientsRes.find(
            (ingredient) => ingredient.uid === menuIngredient.ingredientId
          );
          const menuIngredientUse = menuObject.ingredient;
          ingredientNames.push(menuIngredientUse);
          resolve(ingredientNames);
        });
      });
    })
    .catch((error) => reject(error));
});

const getMenuIngredientIds = (menuItemId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/menuItems_ingredients.json?orderBy="menuItemId"&equalTo="${menuItemId}"`)
    .then((menuRes) => {
      const menuArray = objToArray(menuRes.data);
      ingredientsData.getAllIngredients().then((ingredientsRes) => {
        const ingredientNames = [];
        menuArray.forEach((menuIngredient) => {
          const menuObject = ingredientsRes.find(
            (ingredient) => ingredient.uid === menuIngredient.ingredientId
          );
          const menuIngredientUse = menuObject.uid;
          ingredientNames.push(menuIngredientUse);
          resolve(ingredientNames);
        });
      });
    })
    .catch((error) => reject(error));
});

const getIngredientObjs = (menuItemId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/menuItems_ingredients.json?orderBy="menuItemId"&equalTo="${menuItemId}"`)
    .then((response) => {
      const ingredients = response.data;
      const ingredientsArray = [];
      if (ingredients) {
        Object.keys(ingredients).forEach((item) => {
          ingredientsArray.push(ingredients[item]);
        });
      }
      resolve(ingredientsArray);
    })
    .catch((error) => reject(error));
});

const deleteMenuIngredients = (joinTableId) => axios.delete(`${baseUrl}/menuItems_ingredients/${joinTableId}.json`);

export default {
  addMenuItemIngredients,
  getMenuItemIngredients,
  getMenuIngredientIds,
  deleteMenuIngredients,
  getIngredientObjs,
  objToArray
};
