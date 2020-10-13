const menuItemCardMaker = (item) => {
  const domString = `<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="d-flex justify-content-between">
                        <h5 class="mb-1" id="menuItemName">${item.name}</h5>
                        <small id="menuItemPrice">${item.price}</small>
                      </div>
                      <p class="mb-1" id="listOfIngredients">ingredients</p>
                    </a>
`;
  return domString;
};

// const authMenuItemCardMaker = (item) => {
//   const domString = ``;
//   return domString;
// };

export default { menuItemCardMaker };
