import data from '../../helpers/data/ingredientsData';
import card from '../cards/ingredientsCard';

const ingredientsByCategory = (id) => {
  data.getIngredientsByCategory(`${id}`).then((response) => {
    response.forEach((item) => {
      $(`#${id}`).append(card.ingredientMaker(item));
    });
  });
};

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
  ingredientsByCategory('Dairy');
  ingredientsByCategory('Vegetables');
  ingredientsByCategory('Meat');
  ingredientsByCategory('Breads');
  ingredientsByCategory('Fruit');
  ingredientsByCategory('Nuts');
};

export default { ingredientsView };
