import firebase from 'firebase/app';
import 'firebase/auth';
import popularItemsCard from '../cards/popularItemsCard';

const reportsView = () => {
  const user = firebase.auth().currentUser;

  if (user) {
    $('#app').append(`<div id="popularMenuItemsDiv">
    <h3>Most Popular Menu Items</h3>
    <ol id="popularItemsList"></ol>
    </div>
    <div id="leastPopularDiv">
    <h3>Least Popular Menu Items</h3>
    <ol id="leastPopularList"></ol>
    </div>`);
    popularItemsCard.popularItems();
    popularItemsCard.leastPopularItems();
    $('a.nav-link#reservationLink').css({ color: 'white' });
    $('a.nav-link#menuLink').css({ color: 'white' });
    $('a.nav-link#staffLink').css({ color: 'white' });
    $('a.nav-link#reportsLink').css({ color: '#EA859E' });
  }
};

export default { reportsView };
