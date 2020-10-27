import firebase from 'firebase/app';
import menuData from '../../helpers/data/menuItemsData';
import ingredientsData from '../../helpers/data/ingredientsData';
import menuView from '../views/menuView';
import menuItemIngredientsData from '../../helpers/data/menuItemIngredientsData';

const updateMenuItemForm = (menuObject) => {
  $('#updateMenuItemForm').html(`<form id="update-menu-item-form">
                    <h2 class="form-title">Update Menu Item</h2>
                    <div id="success-message"></div>
                    <div id="error-message"></div>
                    <div id="input-group-menu">
                      <div class="form-group">
                        <label for="menuItemName" class="form-label">Menu Item</label>
                        <input type="text" class="form-control" id="menuItemName" value="${menuObject.name}" placeholder="Baguette" required>
                      </div>
                      <div class="form-group">
                        <label for="ingredientSelection" class="form-label">Select Ingredients</label>
                        <select multiple class="form-control" id="ingredientSelection" required>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="price" class="form-label">Price</label>
                        <input type="number" min="0.01" step="0.01" class="form-control" id="price" class="timePicker" autocomplete="off" value="${menuObject.price}" placeholder="0.00" required>
                      </div>
                      <button id="updateMenuItemBtn" type="button" class="btn btn-outline"></i>Update Menu Item</button>
                    </div>
                  </form>
  `);
  ingredientsData.getAllIngredients().then((response) => {
    menuItemIngredientsData.getMenuItemIngredients(menuObject.id).then((res) => {
      $('#ingredientSelection').html('');
      response.forEach((item) => {
        if (res.find((ingredient) => ingredient === item.ingredient)) {
          $('select').append(
            `<option value="${item.uid}" selected>${item.ingredient}</option>`
          );
        } else {
          $('select').append(`<option value="${item.uid}">${item.ingredient}</option>`);
        }
      });
    });
  });

  $('#updateMenuItemBtn').on('click', () => {
    const menuItemData = {
      name: $('#menuItemName').val(),
      price: Number($('#price').val()),
    };

    if (!document.getElementById('update-menu-item-form').checkValidity()) {
      $('#error-message').html(
        '<div class="alert" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      menuItemIngredientsData
        .getIngredientObjs(menuObject.id)
        .then((response) => {
          const selectedIngredients = $('#ingredientSelection').val();

          selectedIngredients.forEach((ingredient) => {
            if (response.filter((ingredientObj) => ingredientObj.ingredientId === ingredient).length === 0) {
              const newIngredient = {
                menuItemId: menuObject.id,
                ingredientId: ingredient,
              };
              menuItemIngredientsData.addMenuItemIngredients(newIngredient);
            }
          });

          response.forEach((ingredientObj) => {
            if (!selectedIngredients.includes(ingredientObj.ingredientId)) {
              menuItemIngredientsData.deleteMenuIngredients(ingredientObj.fbKey);
            }
          });
        });

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
    }
  });
};
export default { updateMenuItemForm };
