const staffView = () => {
  $('#app').html('<div style="background-color: green;">Show me the staff!</div>');
  $('a.nav-link#menuLink').css({ color: 'white' });
  $('a.nav-link#reservationLink').css({ color: 'white' });
  $('a.nav-link#staffLink').css({ color: '#EA859E' });
};

export default { staffView };
