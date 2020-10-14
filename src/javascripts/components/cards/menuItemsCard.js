import menuData from '../../helpers/data/menuItemsData';

const menuItemCardMaker = (item) => {
  const domString = `<div class="card-menu m-4" id="${item.id}>
                      <div class="card-body-menu">
                        <div class="menu-item-title d-flex justify-content-between">
                          <h4 class="card-text-menu text-uppercase">${item.name}</h4>
                          <p id="menuItemPrice">${item.price}</p>
                        </div>
                        <p id="listOfIngredients" class="text-lowercase">${item.ingredients.join(' ')}</p>
                      </div>
                    </div>
`;
  return domString;
};

const authMenuItemCardMaker = (item) => {
  const domString = `<div class="card-menu m-4" id="${item.id}>
                      <div class="card-body-menu">
                        <div class="menu-item-title d-flex justify-content-between">
                          <h4 class="card-text-menu text-uppercase">${item.name}</h4>
                          <p id="menuItemPrice">${item.price}</p>
                        </div>
                        <div id="menuItemInfo" class="d-flex justify-content-between">
                          <p id="listOfIngredients" class="text-lowercase">${item.ingredients.join(' ')}</p>
                          <div class="button-container-menu">
                            <button id="${item.id}" class="btn btn-outline update-menu-item-btn" style="color: white"><i class="fas fa-edit"></i></button>
                            <button id="${item.id}" class="btn btn-outline delete-menu-item"><i id="ingredient-icon" class="fas fa-times"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
`;
  $('body').on('click', '.delete-menu-item', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card-menu#${firebaseKey}`).remove();
    menuData.deleteMenuItem(firebaseKey);
  });
  return domString;
};

export default { menuItemCardMaker, authMenuItemCardMaker };
