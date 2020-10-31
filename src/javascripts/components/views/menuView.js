import menuData from '../../helpers/data/menuItemsData';
import card from '../cards/menuItemsCard';
import searchIngredients from '../filters/searchIngredients';

const menuView = (user) => {
  $('#app').html(`<div id="menuView" style="background-color: #444444; color: white;">
                    <div id="error-message-menu"></div>
                    <div class="menu-buttons pt-4 pb-4"></div>
                    <p></p>
                    <div><h3>MENU ITEMS</h3></div>
                    <div id="menuItems"></div>
                  </div>
  `);
  menuData.getMenuItems().then((response) => {
    if (user) {
      $('.menu-buttons').html(`<div class="d-flex justify-content-center">
      <button type="button" class="btn btn-outline mx-1" id="addMenuItemBtn">Add a Menu Item</button>
      <button type="button" class="btn btn-outline mx-5" id="viewIngredientsBtn">View Ingredients</button>
      <input class="form-control w-25" id="searchIngredients" type="text mx-5" placeholder="Search ingredients">
      </div>`);
      response.forEach((item) => {
        $('#menuItems').append(card.authMenuItemCardMaker(item));
      });
    } else {
      response.forEach((item) => {
        $('#menuItems').append(card.menuItemCardMaker(item));
      });
    }
    searchIngredients.searchIngredients();
  });
  $('a.nav-link#reservationLink').css({ color: 'white' });
  $('a.nav-link#staffLink').css({ color: 'white' });
  $('a.nav-link#reportsLink').css({ color: 'white' });
  $('a.nav-link#menuLink').css({ color: '#EA859E' });
};

export default { menuView };
