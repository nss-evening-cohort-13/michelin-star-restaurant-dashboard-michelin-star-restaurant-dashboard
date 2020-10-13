const ingredientMaker = (object) => {
  const domString = `<div class="card d-flex flex-row m-3 p-1" style="width: 30rem;" id="${object.uid}>
  <div class="card-body">
    <h3 class="card-text">${object.ingredient}</h3>
    <div class="button-container ml-2">
      <button id="${object.uid}" class="btn btn-warning update-ingredient-btn" style="color: white"><i class="fas fa-edit"></i></button>
      <button id="${object.uid}" class="btn btn-danger delete-ingredient"><i id="ingredient-icon" class="fas fa-times"></i></button>
    </div>
  </div>
</div>`;
  return domString;
};

export default { ingredientMaker };
