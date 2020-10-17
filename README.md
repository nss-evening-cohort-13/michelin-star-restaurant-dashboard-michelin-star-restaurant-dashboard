# Michelin Star Restaurant Dashboard
Our job is to build a website/dashboard for the faux restaurant Le Baquette! This site should keep track of staff, ingredients, reservations, and menu items.
Authenticated users should be able to update, create and delete any of the data on the website.

## The Motivation
The motivation is to show our proficiency with CRUD, while doing API calls to and from a firebase database. 

## Build Status
Deployed

## Site Link
### [Le Baguette](https://michelin-star-35c92.web.app/)

## Code Style
We are using webpack with Eslintrc with Airbnb strict rules

## Screenshots
- Not Authenticated View
![Non-Auth View](https://i.postimg.cc/RVwST618/not-auth-menu.png)
- Authenticated View
![Auth View](https://i.postimg.cc/j20VWc1j/auth-menu.png)

## Tech/Framework
Javascript Es6, Sass, HTML5

## Features
* Authenticate to perform any actions (CUD)
* Staff module
* Ingredients module
* Reservations module
* Seating module
* Menu Items module
* Filter Menu Items on ingredients

## Code Example
```
const viewHelper = (id, argument) => {
  $('#app').html('');
  firebase.auth().onAuthStateChanged((user) => {
    switch (id) {
      case 'menuLink':
        return menuView.menuView(user);
      case 'reservationLink':
        return reservationView.reservationView(user);
      case 'addReservation':
        return addReservationView.addReservationView();
      case 'staffLink':
        return staffView.staffView(user);
      case 'edit-staff':
        return updateStaffView.updateStaffView(argument);
      case 'viewIngredientsBtn':
        return ingredientsView.ingredientsView();
      case 'add-ingredient-btn':
        return addIngredientsView.addIngredientsView();
      case 'addMenuItemBtn':
        return addMenuItemForm.addMenuItemForm();
      case 'update-menu-item-link':
        return updateMenuView.updateMenuItemsView(argument);
      case 'update-ingredient-link':
        return updateIngredient.updateIngredientView(argument);
      case 'home':
        return homePage.homePageView();
      default:
        return console.warn('nothing clicked');
    }
  });
};
```

## ERD
![ERD](https://i.postimg.cc/bNRHYqzb/ERD-michelin-star.png)

## Wireframe
[Wireframe](https://www.figma.com/file/mgcTKkbXSx81KxopQasZaw/Wireframe?node-id=0%3A1)

## Contributors
* [Chris Lojacono](https://github.com/chrislojacono)
* [Joseph Martin](https://github.com/josephtmartin)
* [Kaitlyn VanHook](https://github.com/kaitvan)
* [Liz Barnes](https://github.com/liz-barnes)
