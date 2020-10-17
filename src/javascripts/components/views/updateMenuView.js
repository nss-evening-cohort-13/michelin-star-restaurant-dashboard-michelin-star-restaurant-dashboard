import menuData from '../../helpers/data/menuItemsData';
import form from '../forms/updateMenuItemsForm';

const updateMenuItemsView = (uid) => {
  $('#app').html('<div class="update-menu-item" id="updateMenuItemForm" style="background-color: #444444; color: white;"></div>');
  menuData.getSingleMenuItem(uid).then((response) => {
    form.updateMenuItemForm(response);
  });
};

export default { updateMenuItemsView };
