const viewHelper = (id) => {
  switch (id) {
    case 'login':
      return loginView.loginView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = () => {
  $('body').on('click', '#userBtn', () => {
    viewHelper('login');
  });
};

export default { viewListener };
