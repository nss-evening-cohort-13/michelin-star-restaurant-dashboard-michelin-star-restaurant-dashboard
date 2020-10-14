const ingredientMaker = (object) => {
  const domString = `<div class="card d-flex flex-row m-2 p-1" style="width: 23rem;" id="${object.uid}>
  <div class="card-body d-flex">
    <h3 class="card-text mr-auto p-2">${object.ingredient}</h3>
    <div class="button-container-ingredient ml-2">
      <button id="${object.uid}" class="btn btn-outline update-ingredient-btn" style="color: white"><i class="fas fa-edit"></i></button>
      <button id="${object.uid}" class="btn btn-outline delete-ingredient"><i id="ingredient-icon" class="fas fa-times"></i></button>
    </div>
  </div>
</div>`;

  $('body').on('click', '.delete-ingredient', (e) => {
    e.stopImmediatePropagation();
    console.warn('DELETE CLICKED', e.currentTarget.id);
  });

  return domString;
};

export default { ingredientMaker };
