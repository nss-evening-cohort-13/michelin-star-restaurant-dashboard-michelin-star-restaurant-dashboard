import data from '../../helpers/data/ingredientsData';
import card from '../cards/ingredientsCard';

const ingredientsView = () => {
  $('#app').html(`<div id="add-ingredients"></div>
  <button id="add-ingredient-btn" type="button" class="btn btn-outline mb-5">Add Ingredient</button>
  <div class="categories-container">
    <div id="Breads" class="category-section"><h2>Breads</h2></div>
    <div id="Vegetables" class="category-section"><h2>Vegetables</h2></div>
    <div id="Fruit" class="category-section"><h2>Fruit</h2></div>
    <div id="Dairy" class="category-section"><h2>Dairy</h2></div>
    <div id="Meat" class="category-section"><h2>Meat</h2></div>
    <div id="Nuts" class="category-section"><h2>Nuts</h2></div>
    <div id="Oils" class="category-section"><h2>Oils</h2></div>
    <div id="Spices" class="category-section"><h2>Spices</h2></div>
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
  data.getIngredientsByCategory('Oils').then((response) => {
    response.forEach((item) => {
      $('#Oils').append(card.ingredientMaker(item));
    });
  });
  data.getIngredientsByCategory('Spices').then((response) => {
    response.forEach((item) => {
      $('#Spices').append(card.ingredientMaker(item));
    });
  });
};

export default { ingredientsView };
