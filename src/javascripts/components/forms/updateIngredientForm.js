import categories from './addIngredientsForm';
import ingredientsData from '../../helpers/data/ingredientsData';
import ingredientsView from '../views/ingredientsView';

const updateIngredientsForm = (ingredientObject) => {
  $('#updateIngredientsForm').html(`
    <h2 style="font-family: 'Prata', serif;">Update Ingredient</h2>
    <div id="success-message"></div>
    <div id="error-message"></div>
    <form>
      <div id="input-group">
        <div class="form-group">
          <label for="Ingredient" style="font-family: 'Prata', serif;">Ingredient</label>
          <input type="text" class="form-control pr-3" id="ingredient" value="${ingredientObject.ingredient}" placeholder="Sliced Pears" />
        </div>
        <div class="form-group">
        <label for="category" style="font-family: 'Prata', serif;">Category</label>
        <select class="form-control" id="category">
          <option selected ='selected' value="${ingredientObject.category}">${ingredientObject.category}</option>
        </select>
        </div>
      </div>
      <button id="updateIngredientBtn" type="button" class="btn btn-outline-light">
        Update Ingredient
      </button>
    </form>
    `);
  // Category Dropdown
  categories.availableCategories();

  $('#updateIngredientBtn').on('click', (e) => {
    e.preventDefault();

    const data = {
      ingredient: $('#ingredient').val() || false,
      category: $('#category').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      ingredientsData
        .updateIngredient(ingredientObject.uid, data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Ingredient Was Updated!</div>'
          );
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .then(() => {
          setTimeout(() => {
            ingredientsView.ingredientsView();
          }, 3000);
        })
        .catch((error) => console.warn(error));
      $('#ingredient').val('');
      $('#category').val('');
    }
  });
};

export default { updateIngredientsForm };
