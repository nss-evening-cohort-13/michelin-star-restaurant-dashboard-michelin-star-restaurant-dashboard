const searchIngredients = () => {
  $('#searchIngredients').on('keyup', () => {
    const input = $('#searchIngredients').val().toLowerCase();
    console.log(input);
  });
};

export default { searchIngredients };
