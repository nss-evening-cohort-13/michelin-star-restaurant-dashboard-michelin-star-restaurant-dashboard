import firebase from 'firebase/app';
import menuData from '../../helpers/data/menuItemsData';
import ingredientsData from '../../helpers/data/ingredientsData';
import menuView from '../views/menuView';
import menuItemIngredientsData from '../../helpers/data/menuItemIngredientsData';

const updateMenuItemForm = (menuObject) => {
  $('#updateMenuItemForm').html(`<div id="update-menu-item-form">
                    <h2 class="form-title">Update Menu Item</h2>
                    <div id="success-message"></div>
                    <div id="error-message"></div>
                    <div id="input-group-menu">
                      <div class="form-group">
                        <label for="menuItemName" class="form-label">Menu Item</label>
                        <input type="text" class="form-control" id="menuItemName" value="${menuObject.name}" placeholder="Menu Item">
                      </div>
                      <div class="form-group">
                        <label for="ingredientSelection" class="form-label">Select Ingredients</label>
                        <select multiple class="form-control" id="ingredientSelection">
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="price" class="form-label">Price</label>
                        <input class="form-control" id="price" class="timePicker" autocomplete="off" value="${menuObject.price}" placeholder="Enter a price">
                      </div>
                      <button id="updateMenuItemBtn" type="button" class="btn btn-outline"></i>Update Menu Item</button>
                    </div>
                  <div>
  `);
  ingredientsData.getAllIngredients().then((response) => {
    menuItemIngredientsData.getMenuItemIngredients(menuObject.id).then((res) => {
      $('#ingredientSelection').html('');
      response.forEach((item) => {
        if (res.find((ingredient) => ingredient === item.ingredient)) {
          $('select').append(
            `<option value="${item.ingredient}" selected ='selected'>${item.ingredient}</option>`
          );
        } else {
          $('select').append(`<option value="${item.ingredient}">${item.ingredient}</option>`);
        }
      });
    });
  });
  // menuItemIngredientsData.getMenuItemIngredients(menuObject.id).then((res) => {
  //   res.forEach((ingredientName) => {
  //     $(`select#${ingredientName}`).remove();
  //     $('select').append(`<option id="${ingredientName}" value="${ingredientName}" selected ='selected'>${ingredientName}</option>`);
  //   });
  // });
  $('#updateMenuItemBtn').on('click', (e) => {
    e.preventDefault(e);
    const menuItemData = {
      name: $('#menuItemName').val() || false,
      ingredients: $('#ingredientSelection').val() || false,
      price: $('#price').val() || false,
    };
    if (Object.values(menuItemData).includes(false) || menuItemData.ingredients.length === 0) {
      $('#error-message').html(
        '<div class="alert" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      menuData
        .updateMenuItem(menuObject.id, menuItemData)
        .then(() => {
          $('#success-message').html(
            '<div class="alert" role="alert">Your menu item was added!</div>'
          );
        }).then(() => {
          setTimeout(() => {
            firebase.auth().onAuthStateChanged((user) => {
              menuView.menuView(user);
            });
          }, 3000);
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);
      $('#menuItemName').val('');
      $('#ingredientSelection').val('');
      $('#price').val('');
    }
  });
};

export default { updateMenuItemForm };
