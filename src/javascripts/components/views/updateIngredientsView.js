import ingredientsData from '../../helpers/data/ingredientsData';
import form from '../forms/updateIngredientForm';

const updateIngredientView = (uid) => {
  $('#app').html('<div class="forms" id="updateIngredientsForm"></div>');
  ingredientsData.getSingleIngredient(uid).then((response) => {
    form.updateIngredientsForm(response);
  });
};
export default { updateIngredientView };
