import 'bootstrap';
import navbar from './components/navbar/navbar';
import viewListener from './components/views/viewHelper';

import '../styles/main.scss';

const init = () => {
  navbar.navbar();
  viewListener.viewListener();
};

init();
