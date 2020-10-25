import menuData from '../../helpers/data/menuItemsData';
import menuItemIngredientsData from '../../helpers/data/menuItemIngredientsData';

const menuItemCardMaker = (item) => {
  const domString = `<div class="card-menu m-4" id="${item.id}">
                      <div class="card-body-menu">
                        <div class="menu-item-title">
                          <h4 class="card-text-menu text-uppercase">${item.name}</h4>
                          <p id="menuItemPrice">${item.price}</p>
                        </div>
                        <p id="listOfIngredients-${item.id}" class="text-lowercase"></p>
                      </div>
                    </div>
  `;
  menuItemIngredientsData
    .getMenuItemIngredients(item.id)
    .then((response) => {
      $(`#listOfIngredients-${item.id}`).html(response.join(' | '));
    });
  return domString;
};

const authMenuItemCardMaker = (item) => {
  const domString = `<div class="card-menu m-4" id="${item.id}">
        <div class="card-body-menu">
          <div class="menu-item-title">
            <h4 class="card-text-menu text-uppercase">${item.name}</h4>
            <p id="menuItemPrice">${item.price}</p>
          </div>
          <div id="menuItemInfo" class="menuItemInfo">
          <p id="listOfIngredients-${item.id}" class="text-lowercase"></p>
            <div class="button-container-menu">
              <button id="${item.id}" class="btn btn-outline update-menu-item-btn icon-btn" style="color: white"><i class="fas fa-edit"></i></button>
              <button id="${item.id}" class="btn btn-outline delete-menu-item icon-btn"><i id="ingredient-icon" class="fas fa-times"></i></button>
            </div>
          </div>
        </div>
      </div>`;
  $('body').on('click', '.delete-menu-item', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card-menu#${firebaseKey}`).remove();
    menuData.getMenuItems().then((response) => {
      response.forEach((menuItem) => {
        menuItemIngredientsData.getIngredientObjs(menuItem.id).then((res) => {
          res.forEach((menuId) => {
            if (menuId.menuItemId === firebaseKey) {
              menuItemIngredientsData.deleteMenuIngredients(menuId.fbKey);
            }
          });
        });
      });
    });
    menuData.deleteMenuItem(firebaseKey);
  });
  menuItemIngredientsData
    .getMenuItemIngredients(item.id)
    .then((response) => {
      $(`#listOfIngredients-${item.id}`).html(response.join(' | '));
    });
  return domString;
};

export default { menuItemCardMaker, authMenuItemCardMaker };
