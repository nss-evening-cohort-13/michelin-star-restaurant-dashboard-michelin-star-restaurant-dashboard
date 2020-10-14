import menuData from '../../helpers/data/menuItemsData';
import form from '../forms/updateMenuItemsForm';

const updateMenuItemsView = (uid) => {
  $('#app').html('<div class="update-menu-item" id="updateMenuItemForm"></div>');
  menuData.getSingleMenuItem(uid).then((response) => {
    console.warn('updateMenuItemsView', response);
    form.updateMenuItemForm(response);
  });
};

export default { updateMenuItemsView };
