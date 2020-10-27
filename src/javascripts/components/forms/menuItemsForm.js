import firebase from 'firebase/app';
import menuData from '../../helpers/data/menuItemsData';
import ingredientsData from '../../helpers/data/ingredientsData';
import menuView from '../views/menuView';
import menuItemIngredients from '../../helpers/data/menuItemIngredientsData';

const makeMenuItemForm = () => {
  $('#app').html(`<form id="menu-item-form">
                    <h2 class="form-title">Add Menu Item</h2>
                    <div id="success-message"></div>
                    <div id="error-message"></div>
                    <div id="input-group-menu">
                      <div class="form-group">
                        <label for="menuItemName">Menu Item</label>
                        <input type="text" class="form-control" id="menuItemName" placeholder="Baguette" required>
                      </div>
                      <div class="form-group">
                        <label for="ingredientSelection">Select Ingredients</label>
                        <select multiple class="form-control" id="ingredientSelection" required>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="price">Price</label>
                        <input type="number" min="0.01" step="0.01" class="form-control" id="price" class="timePicker" autocomplete="off" placeholder="0.00" required>
                      </div>
                      <button id="submitMenuItemBtn" type="button" class="btn btn-outline"></i>Add Menu Item</button>
                    </div>
                  </form>
  `);
  ingredientsData.getAllIngredients().then((response) => {
    $('#ingredientSelection').html('');
    response.forEach((ingredient) => {
      $('#ingredientSelection').append(
        `<option value="${ingredient.uid}">${ingredient.ingredient}</option>`
      );
    });
  });
  $('#submitMenuItemBtn').on('click', (e) => {
    e.preventDefault();
    const menuItemData = {
      name: $('#menuItemName').val(),
      price: Number($('#price').val()),
    };
    const ingredientsIdArrray = $('#ingredientSelection').val();
    if (!document.getElementById('menu-item-form').checkValidity()) {
      $('#error-message').html(
        '<div class="alert" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      menuData
        .addMenuItem(menuItemData)
        .then((response) => {
          ingredientsIdArrray.forEach((ingredient) => {
            const menuItemIngredientsData = {
              menuItemId: response.data.name,
              ingredientId: ingredient,
            };
            menuItemIngredients.addMenuItemIngredients(menuItemIngredientsData);
          });
          $('#success-message').html(
            '<div class="alert" role="alert">Your menu item was added!</div>'
          );
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .then(() => {
          setTimeout(() => {
            firebase.auth().onAuthStateChanged((user) => {
              menuView.menuView(user);
            });
          }, 3000);
        })
        .catch((error) => console.warn(error));
      $('#menuItemName').val('');
      $('#ingredientSelection').val('');
      $('#price').val('');
    }
  });
};

export default { makeMenuItemForm };
