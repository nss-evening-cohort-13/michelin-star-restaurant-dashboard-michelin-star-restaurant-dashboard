import data from '../../helpers/data/ingredientsData';
import card from '../cards/ingredientsCard';

const ingredientsView = () => {
  $('#app').html(`<div id="add-ingredients" style="background-color: #444444;">
  <button id="add-ingredient-btn" type="button" class="btn btn-outline mb-5">Add Ingredient</button>
  <div class="categories-container">
    <div id="Dairy" class="category-section"><h1>Dairy</h1></div>
    <div id="Vegetables" class="category-section"><h1>Vegetables</h1></div>
    <div id="Meat" class="category-section"><h1>Meat</h1></div>
    <div id="Breads" class="category-section"><h1>Breads</h1></div>
    <div id="Fruit" class="category-section"><h1>Fruit</h1></div>
    <div id="Nuts" class="category-section"><h1>Nuts</h1></div>
  </div>
  </div>
  `);
  data.getIngredientsByCategory('Breads').then((response) => {
    response.forEach((item) => {
      $('#Breads').append(card.ingredientMaker(item));
    });
  });
  data.getIngredientsByCategory('Vegetables').then((response) => {
    response.forEach((item) => {
      $('#Vegetables').append(card.ingredientMaker(item));
    });
  });
  data.getIngredientsByCategory('Fruit').then((response) => {
    response.forEach((item) => {
      $('#Fruit').append(card.ingredientMaker(item));
    });
  });
  data.getIngredientsByCategory('Dairy').then((response) => {
    response.forEach((item) => {
      $('#Dairy').append(card.ingredientMaker(item));
    });
  });
  data.getIngredientsByCategory('Meat').then((response) => {
    response.forEach((item) => {
      $('#Meat').append(card.ingredientMaker(item));
    });
  });
  data.getIngredientsByCategory('Nuts').then((response) => {
    response.forEach((item) => {
      $('#Nuts').append(card.ingredientMaker(item));
    });
  });
};

export default { ingredientsView };
