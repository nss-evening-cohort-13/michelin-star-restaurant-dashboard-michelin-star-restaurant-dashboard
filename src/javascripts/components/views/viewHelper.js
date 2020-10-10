// import loginView from

const viewHelper = (id) => {
  switch (id) {
    case 'login':
      return console.warn('loginview');
      // loginView.loginView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = () => {
  $('body').on('click', '#userBtn', () => {
    if ()
    viewHelper('login');
  });
};

export default { viewListener, viewHelper };
