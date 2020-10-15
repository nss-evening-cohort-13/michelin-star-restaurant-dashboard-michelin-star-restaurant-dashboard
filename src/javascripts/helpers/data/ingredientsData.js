import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllIngredients = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/ingredients.json`).then((response) => {
    const ingredients = response.data;
    const ingredientsArray = [];
    if (ingredients) {
      Object.keys(ingredients).forEach((item) => {
        ingredientsArray.push(ingredients[item]);
      });
    }
    resolve(ingredientsArray);
  }).catch((error) => reject(error));
});

const addIngredient = (data) => axios.post(`${baseUrl}/ingredients.json`, data).then((response) => {
  const update = { uid: response.data.name };
  axios.patch(`${baseUrl}/ingredients/${response.data.name}.json`, update).catch((error) => console.warn(error));
});

const getIngredientsByCategory = (category) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/ingredients.json?orderBy="category"&equalTo="${category}"`)
    .then((response) => {
      const categoryData = response.data;
      const categoryArray = [];
      if (categoryData) {
        Object.keys(categoryData).forEach((item) => {
          categoryArray.push(categoryData[item]);
        });
      }
      resolve(categoryArray);
    }).catch((error) => reject(error));
});

const deleteIngredient = (firebaseKey) => axios.delete(`${baseUrl}/ingredients/${firebaseKey}.json`);

export default {
  getAllIngredients,
  addIngredient,
  getIngredientsByCategory,
  deleteIngredient
};
