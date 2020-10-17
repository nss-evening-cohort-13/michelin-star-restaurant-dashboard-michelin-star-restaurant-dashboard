import ingredientData from '../../helpers/data/ingredientsData';

const ingredientMaker = (object) => {
  const domString = `<div class="ingredient-card card" style="width: 23rem;" id="${object.uid}">
  <div class="card-body">
    <h3 class="card-text mr-auto p-2">${object.ingredient}</h3>
    <div class="button-container-ingredient ml-2">
      <button id="${object.uid}" class="btn btn-outline update-ingredient-btn" style="color: white"><i class="fas fa-edit"></i></button>
      <button id="${object.uid}" class="btn btn-outline delete-ingredient"><i id="ingredient-icon" class="fas fa-times"></i></button>
    </div>
  </div>
</div>`;

  $('body').on('click', '.delete-ingredient', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.ingredient-card#${firebaseKey}`).remove();
    ingredientData.deleteIngredient(firebaseKey);
  });

  return domString;
};

export default { ingredientMaker };
