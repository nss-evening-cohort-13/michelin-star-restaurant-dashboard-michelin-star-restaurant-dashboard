import form from '../forms/addIngredientsForm';

const addIngredientsView = () => {
  $('#app').html('<div class="forms" id="add-ingredients" style="background-color: #444444; color: white;"></div>');
  form.addIngredientsForm();
};

export default { addIngredientsView };
