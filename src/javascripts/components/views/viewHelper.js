import auth from '../auth/auth';

const viewHelper = (id) => {
  switch (id) {
    case 'home':
      return console.warn('homeView');
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, user) => {
  viewHelper(view);
  $('body').on('click', '#userBtn', () => {
    if (user) {
      auth.logoutButton();
    } else {
      auth.loginButton();
    }
  });
};

export default { viewListener, viewHelper };
