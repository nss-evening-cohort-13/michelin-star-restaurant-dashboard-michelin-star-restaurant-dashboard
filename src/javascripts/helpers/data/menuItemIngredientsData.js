import axios from 'axios';
import apiKeys from '../apiKeys.json';
import ingredientsData from './ingredientsData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addMenuItemIngredients = (data) => axios
  .post(`${baseUrl}/menuItems_ingredients.json`, data)
  .catch((error) => console.warn(error));

const objToArray = (objOfObjs) => {
  const array = [];
  Object.keys(objOfObjs).forEach((key) => {
    array.push(objOfObjs[key]);
  });
  return array;
};

const getMenuItemIngredientsNotArray = (menuItemId) => new Promise((resolve, reject) => {
  axios
    .get(
      `${baseUrl}/menuItems_ingredients.json?orderBy="menuItemId"&equalTo="${menuItemId}"`
    )
    .then((response) => {
      const allMenuItemIngredients = response.data;
      const ingredients = [];
      if (allMenuItemIngredients) {
        Object.keys(allMenuItemIngredients).forEach((ingredientId) => {
          ingredients.push(allMenuItemIngredients[ingredientId]);
        });
      }
      console.log(ingredients);
      resolve(ingredients);
    })
    .catch((error) => reject(error));
});

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

export default {
  addMenuItemIngredients,
  getMenuItemIngredients,
  getMenuItemIngredientsNotArray,
};
