import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import viewListener from './components/views/viewHelper';

const init = () => {
  navbar.navbar();
  viewListener.viewListener();
};

init();
