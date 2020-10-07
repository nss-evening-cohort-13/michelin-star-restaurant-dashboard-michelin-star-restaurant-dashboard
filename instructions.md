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

## Project Requirements
* Clean code - single responsibility principle
* ES6 Modules bundled with webpack
* No errors - linters should be clean
* Jquery for any DOM manipulation (selectors, modifying css classes, events)
* SASS and Bootstrap for styling
* Completely planned out - before each section you should be making new cards before you code.  You should have wireframes and an ERD

### Planning and Setup
For planning and setup, your team will need to divide and conquer. All of these items will need to be completed and reviewed by noon on Saturday.

- Create an ERD and add to Readme
- Create Wireframes on Figma and add to Readme

#### Setup:
- Create a setup branch and setup webpack (make a ticket for this first)
  - Issue Ticket Template
  - Pull request Template
  - Set up readme
  
- Create 2 branches: `Main` and `Development`
  - Protect the `Main` branch from merging (DO NOT MERGE TO MAIN UNTIL APPROVAL FROM YOUR MENTOR IS OBTAINED)
  - All development should be done on the `Development` branch
  - When a milestone is completed, make a PR against the `Main` branch for your mentor to review.
  - DO NOT move on to another milestone until everyone on your team is completed with the milestone AND you get approval from your mentor.
  
- Create a new firebase project and enable google authentication
  - Share API keys with team (DO NOT PUSH TO GITHUB)
  - One person run deploys
___

### Expectations
- Break each section below into milestones
- Deploy each milestone
- Deployed URL on Readme
- Create a PR against the `Main` branch with:
  - The tickets completed that sprint
  - Explanation of what was completed in the sprint

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
