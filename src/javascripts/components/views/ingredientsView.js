import data from '../../helpers/data/ingredientsData';
import card from '../cards/ingredientsCard';

const ingredientsView = () => {
  $('#app').html(`<div id="add-ingredients"></div>
  <button id="add-ingredient-btn" type="button" class="btn btn-outline">Add Ingredient</button>
  <div class="categories-container d-flex justify-content-around" style="color: white">
    <div id="Breads">Breads</div>
    <div id="Pasta">Pasta</div>
    <div id="Vegetables">Vegetables</div>
    <div id="Fruit">Fruit</div>
    <div id="Dairy">Dairy</div>
    <div id="Meat">Meat</div>
    <div id="Nuts">Nuts</div>
    <div id="Oils">Oils</div>
    <div id="Spices">Spices</div>
  </div>
  `);
  data.getAllIngredients().then((response) => {
    console.warn(response);
    if (response.length) {
      response.forEach((item) => {
        $('#Fruit').append(card.ingredientMaker(item));
      });
    } else {
      $('.alert').html('<h1>No Ingredients</h1>');
    }
  });
};

export default { ingredientsView };
