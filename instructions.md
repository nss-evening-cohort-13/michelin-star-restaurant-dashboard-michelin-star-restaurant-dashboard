# Michelin Star Restaurant Dashboard

Nutshell is a new product offering that you have been tasked with building. 
You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

- Functions
- Databases/API
- Github
- Objects
- CSS/SASS
- Handling user events
- Data entry/editing
- Modular code with Webpack
- Relational data
- CRUD

# Mentor
Dr. T

## Week 1

### Description
Welcome to Le Baguette.  The only restaurant in the world to have to have 27 Michelin stars. Le Baguette is a asian, russian, german, and french fusion restaurant using only the freshest ingredients from local farms.

Now that Le Baguette has received its 27th star its owners would like to bring the restaurant into the modern age and build it a nice website.  You will be helping them keep track of staff, ingredients, reservations, and Menu Items.

### Requirements

* Authenticate to perform any actions (CUD)
* Staff module
* Ingredients module
* Reservations module
* Seating module
* Menu Items module
* Filter Menu Items on ingredients

### User Stories

#### Authentication
- As a user, I should be able to log in to add, edit, or delete from any of the modules.
- As a user, if I'm not authenticated, I can only read the information.
- As a user, I should be able to login using Google
- As a user, I should be able to logout

#### Staff
- As a user, I should be able to add new staff members
- As a user, I should be able to delete staff members
- As a user, I should be able to edit the staff members
- As a user, I should be able to view all the staff members
- As a user, I should be able to filter the staff member list my staff member type (ie show only waiters or busboys)

#### Ingredients
- As a user, I should be able to add new ingredients to my restaurant inventory
- As a user, I should be able to delete ingredients
- As a user, I should be able to edit the ingredients
- As a user, I should be able to view all the ingredients

#### Reservations
- As a user, I should be able to add new reservations to my restaurant
- As a user, I should be able to delete reservations
- As a user, I should be able to edit the reservations
- As a user, I should be able to view all the reservations

#### Seating
- As a user, I should be able to view all seating options

#### Menu Items
- As a user, I should be able to add new menu items to my restaurant
- As a user, I should be able to delete menu items
- As a user, I should be able to edit the menu items
- As a user, I should be able to view all the menu items
- As a user, I should be able to view all the menu items based on the ingredients they contain (ie only show menu items that have tomatoes)
- As a user, I should be able to add ingredients to my menu items
- As a user, I should be able to remove ingredients to my menu items


## Week 2

### Description
The original team working on this project spent all their time eating the food instead of writing code so they have been let go.  The owners of Le Baguette desperately need someone to come in an hook up all the different modules the first group made.  The owners also want a way to keep track of everything happening in their restaurant.

### Requirements
* Reservations should be related to staff members, orders and tables.
* Authenticated users should be able to track restaurant revenue, inventory, and menu items

### User Stories
All of the following user stories assume the user is authenticated unless otherwise stated.

#### Reservations
- As a user I should be able to assign staff members to reservations.
- As a user there should be some way to tell if a reservation has all the staff they need (waiter, bar tender, bussboy, etc.)
- As a user I should be able to assign a table to a reservation.
- As a user I should only be able to assign a table with the appropriate number of seats for that party (ie a reservation for 4 should not be assigned to a table with 2 seats).  
- As a user I should be able to view a single reservation page that displays all the information about that reservation.

#### Orders
- As a user I should be able to assign menu items to reservations
- As a user I should not be able to assign a menu item to a reservation if any of the ingredients from that menu item are sold out.
- As a user I should be able to create a final bill for each reservation.  This bill should show up on the single reservation pages.

#### Reporting
- As a user I want to be able to see what the total revenue is for my restaurant since I opened.
- As a user I want to be able to see what the revenue is for my restaurant over a 7 day period.
- As a user I want to be able to see what the revenue is for my restaurant over a particular day.
- As a user I should be able to track the amount of ingredients used on a single day.
- As a user I should be able to track the amount of ingredients used over a 7 day period.
- As a user I should be able to track the amount of ingredients used since my restaurant opened.
- As a user I should be able to see a list of the top 10 most popular menu items.
- As a user I should be able to see a list of the 10 least popular menu items.
