import menuData from '../../helpers/data/menuItemsData';
import card from '../cards/menuItemsCard';

const menuView = (user) => {
  $('#app').html(`<div id="menuView" style="background-color: #444444; color: white;">
                    <div id="error-message-menu"></div>
                    <div class="menu-buttons pt-4 pb-4">
                          <button type="button" class="btn btn-outline" id="addMenuItemBtn">Add a Menu Item</button>
                          <button type="button" class="btn btn-outline" id="viewIngredientsBtn">View Ingredients</button>
                    </div>
                    <p>Search for ingredients.</p>
                    <div><h3>MENU ITEMS</h3></div>
                    <div id="menuItems"></div>
                  </div>
  `);
  menuData.getMenuItems().then((response) => {
    if (user) {
      response.forEach((item) => {
        $('#menuItems').append(card.authMenuItemCardMaker(item));
      });
    } else {
      $('.menu-buttons').remove();
      response.forEach((item) => {
        $('#menuItems').append(card.menuItemCardMaker(item));
      });
    }
  });
  $('a.nav-link#reservationLink').css({ color: 'white' });
  $('a.nav-link#staffLink').css({ color: 'white' });
  $('a.nav-link#menuLink').css({ color: '#EA859E' });
};

export default { menuView };
