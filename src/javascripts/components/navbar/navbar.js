// TODO: call the logout function at the bottom of the navbar function and pass the current user name to the welcome li

const navbar = () => {
  $('#nav').html(`
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" style="color: white;">Le Baguette</a>
    <button id="navBarToggle" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item mx-3"  id="menuLink">
      <a class="nav-link" id="menuLink" href="#" style="color: white;">Menu</a>
    </li>
    <li class="nav-item mx-3" id="reservationLink">
      <a class="nav-link" id="reservationLink" href="#" style="color: white;">Reservation</a>
    </li>
    <li class="nav-item mx-3" id="staffLink">
      <a class="nav-link" id="staffLink" href="#" style="color: white;">Staff</a>
    </li>
  </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item" id="loginLogout">
        </li>
      </ul>
    </div>
  </nav>
  `);
};

export default { navbar };
