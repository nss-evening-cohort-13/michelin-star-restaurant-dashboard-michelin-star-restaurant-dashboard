import menuData from '../../helpers/data/menuItemsData';
import card from '../cards/menuItemsCard';

const menuView = (user) => {
  $('#app').html(`<div id="error-message-menu"></div>
                  <div class="container">
                    <div class="row mt-5 mb-5">
                      <div class="col">
                        <button type="button" class="btn btn-outline" id="addMenuItemBtn">Add a Menu Item</button>
                      </div>
                      <div class="col">
                        <button type="button" class="btn btn-outline" id="viewIngredientsBtn">View Ingredients</button>
                      </div>
                      <div class="col d-flex justify-content-end align-self-center">
                        Search for ingredients.
                      </div>
                    </div>
                    <div class="row">
                      <div class="col"">
                        MENU ITEMS
                      </div>
                      <div class="list-group" id="menuItems">
                      </div>
                  </div>
  `);
  menuData.getMenuItems().then((response) => {
    if (user) {
      response.forEach((item) => {
        $('#menuItems').append(card.menuItemCardMaker(item));
      });
    } else {
      response.forEach((item) => {
        $('#menuItems').append(card.menuItemCardMaker(item));
      });
    }
  });
};

export default { menuView };
