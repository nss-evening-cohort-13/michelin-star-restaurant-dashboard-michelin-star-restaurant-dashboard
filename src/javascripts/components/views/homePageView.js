const homePageView = () => {
  $('#app').html(
    '<div id="titleContainer"><h1 class="titleHome" id="homePageTitleEat">EAT</h1><h1 class="titleHome">DRINK</h1><h1 class="titleHome">ENJOY</h1></div>'
  );
  $('a.nav-link#menuLink').css({ color: 'white' });
  $('a.nav-link#staffLink').css({ color: 'white' });
  $('a.nav-link#reportsLink').css({ color: 'white' });
  $('a.nav-link#reservationLink').css({ color: 'white' });
};

export default { homePageView };
