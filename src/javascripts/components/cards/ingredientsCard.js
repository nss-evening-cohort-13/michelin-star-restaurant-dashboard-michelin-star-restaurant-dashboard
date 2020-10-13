const ingredientMaker = (object) => {
  const domString = `<div class="card" style="width: 18rem;" id="${object.uid}>
  <div class="card-body">
    <h5 class="card-title">Category: ${object.category}</h5>
    <h3 class="card-text">Ingredient: ${object.ingredient}</h3>
    <div class="button-container">
      <button id="${object.uid}" class="btn btn-warning update-ingredient-btn" style="color: white"><i class="fas fa-edit"></i></button>
      <button id="${object.uid}" class="btn btn-danger delete-ingredient"><i id="ingredient-icon" class="fas fa-times"></i></button>
    </div>
  </div>
</div>`;
  return domString;
};

export default { ingredientMaker };
