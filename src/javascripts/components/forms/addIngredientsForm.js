import ingredientsData from '../../helpers/data/ingredientsData';

const availableCategories = () => {
  const categories = ['Breads', 'Pasta', 'Vegetables', 'Fruit', 'Dairy', 'Meat', 'Nuts', 'Oils', 'Spices'];
  categories.forEach((item) => {
    $('select').append(`<option value="${item}">${item}</option>`);
  });
};

const addIngredientsForm = () => {
  $('#add-ingredients').html(`
  <h2>Add An Ingredient</h2>
  <div id="success-message"></div>
  <div id="error-message"></div>
  <form>
    <div id="input-group">
      <div class="form-group">
        <label for="Ingredient">Ingredient</label>
        <input type="text" class="form-control" id="ingredient" placeholder="Sliced Pears" />
      </div>
      <div class="form-group">
      <label for="category">Category</label>
      <select class="form-control" id="category">
        <option value="">Select a Category</option>
      </select>
      </div>
    </div>
    <button id="addIngredientBtn" type="button" class="btn btn-info">
      <i class="fas fa-plus-circle"></i> Add Ingredient
    </button>
  </form>
  `);
  // Category Dropdown
  availableCategories();

  $('#addIngredientBtn').on('click', (e) => {
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
        .addIngredient(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Ingredient Was Added!</div>'
          );
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .catch((error) => console.warn(error));
      $('#ingredient').val('');
      $('#category').val('');
    }
  });
};

export default { addIngredientsForm };
