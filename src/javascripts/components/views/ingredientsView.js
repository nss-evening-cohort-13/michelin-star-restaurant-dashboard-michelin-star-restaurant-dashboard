import data from '../../helpers/data/ingredientsData';
import card from '../cards/ingredientsCard';

const ingredientsView = () => {
  $('#app').html(`<div id="add-ingredients"></div>
  <button id="add-ingredient-btn" type="button" class="btn btn-info">Add Ingredient</button>
  `);
  data.getAllIngredients().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.ingredientMaker(item));
      });
    } else {
      $('.alert').html('<h1>No Ingredients</h1>');
    }
  });
};

export default { ingredientsView };
