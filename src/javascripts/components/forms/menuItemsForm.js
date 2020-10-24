import firebase from 'firebase/app';
import menuData from '../../helpers/data/menuItemsData';
import ingredientsData from '../../helpers/data/ingredientsData';
import menuView from '../views/menuView';
import menuItemIngredients from '../../helpers/data/menuItemIngredientsData';

const makeMenuItemForm = () => {
  $('#app').html(`<div id="menu-item-form">
                    <h2 class="form-title">Add Menu Item</h2>
                    <div id="success-message"></div>
                    <div id="error-message"></div>
                    <div id="input-group-menu">
                      <div class="form-group">
                        <label for="menuItemName">Menu Item</label>
                        <input type="text" class="form-control" id="menuItemName" placeholder="Menu Item">
                      </div>
                      <div class="form-group">
                        <label for="ingredientSelection">Select Ingredients</label>
                        <select multiple class="form-control" id="ingredientSelection">
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="price">Price</label>
                        <input class="form-control" id="price" class="timePicker" autocomplete="off" placeholder="Enter a price">
                      </div>
                      <button id="submitMenuItemBtn" type="button" class="btn btn-outline"></i>Add Menu Item</button>
                    </div>
                  <div>
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
    e.preventDefault(e);
    const menuItemData = {
      name: $('#menuItemName').val() || false,
      price: $('#price').val() || false,
    };
    const ingredientsIdArrray = $('#ingredientSelection').val();
    if (Object.values(menuItemData).includes(false)) {
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
