const searchIngredients = () => {
  $('#searchIngredients').on('keyup', () => {
    const input = $('#searchIngredients').val().toLowerCase();
    const menuItems = $('.card-menu');

    for (let i = 0; i < menuItems.length; i += 1) {
      if (!menuItems[i].innerHTML.toLowerCase().includes(input)) {
        menuItems[i].style.display = 'none';
      } else {
        menuItems[i].style.display = 'block';
      }
    }
  });
};

export default { searchIngredients };
