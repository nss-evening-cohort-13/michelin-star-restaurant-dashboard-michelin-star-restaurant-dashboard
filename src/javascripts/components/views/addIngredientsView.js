import form from '../forms/addIngredientsForm';

const addIngredientsView = () => {
  $('#app').html('<div class="forms" id="add-ingredients"></div>');
  form.addIngredientsForm();
};

export default { addIngredientsView };
