import menuForm from '../forms/menuItemsForm';

const addMenuItemForm = () => {
  $('body').css({ color: 'white' });
  menuForm.makeMenuItemForm();
};

export default { addMenuItemForm };
