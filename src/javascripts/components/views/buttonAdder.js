const addButtonsWhenAuthenticated = (reso) => {
  $('.reservation-btn-container')
    .append(`<button class="btn btn-danger edit-reservation-btn edit-btn staff-btn" id="${reso.firebaseKey}">Edit</button>
  <button class="btn btn-danger delete-reservation-btn delete-btn staff-btn" id="${reso.firebaseKey}">Delete</button>
 </div>`);
};

const takeAwayButtonsWhenLoggedOut = () => {
  $('.reservation-btn-container').remove();
};

export default { addButtonsWhenAuthenticated, takeAwayButtonsWhenLoggedOut };
