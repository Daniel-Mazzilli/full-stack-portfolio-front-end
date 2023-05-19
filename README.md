# Travel the W0rld
## My Full Stack Portfolio project

### DB needs to be reconfigured on Render, once that is done full functionality will be reinstated. Hoping to get to that soon

### Project Overview

For the past couple of years I have been very interested in traveling more, and decided it would be a fun Portfolio Project to create a full stack web application that could be used as a travel journal and tracker, with a dynamic map that displays the countries one has visited.
This application was built following the PERN stack, and uses RESTful routes concepts. I began the project by building first sign-up and sign-in pages, which use bcrypt and jwt for the password hashing and token authentication. I next worked on the map by using React Simple Maps, and then added full CRUD support for the trips associated to each user account.

## Getting Started

- You may try out the application by visiting the `deployed front-end` link below or:

- Clone this repo
- `cd` to the directory where the repo was cloned
- `npm install` to install the dependencies
- create a `.env` file in the outmost level and make sure it contains `REACT_APP_API_URL=` equal to either the deployed back-end link which is provided below or to your local host where you will be running the cloned back-end repo.
- run `npm start` to open the React app on localhost:3000.

### Project Links

[Back-End Repo](https://github.com/Daniel-Mazzilli/full-stack-portfolio-back-end)&emsp;
[Deployed Back-End](https://travel-app-back.onrender.com)&emsp;
[Deployed Front-End](https://travel-the-w0rld.netlify.app/)

### User Stories
- As a user, on the home page I am able to learn more about the project and dev.
- As a user, I am able to create my personal account via the sign-up page.
- As a user, I will sign-in from the sign-in page and be redirected to my index page.
- As a user, I will see on the index page a map that will dynamically update as trips are added, updated, and deleted. There is also a section in the right top corner that keeps tracks of the number of the different countries visited.
- As a user, I can zoom into the map, and by hovering over the different countries I will see tooltips appearing with the country names.
- As a user, by clicking on the large `+` symbol on the index page I will be navigated to a form that allows for the creation of new trips.
- As a user, I may click on one of the trips in the list to the left of the map from the index page. This is will take me to the individual page of that trip. On that page there will be back to index, update, and delete button options.
- As a user, I may update a trip I created by clicking on the update button from the trip page. I will be taken to a form where I can edit the trip details.
- As a user, I may remove a created trip by clicking on the delete button from the trip page.

### Some current and to be added functionality

#### current:
- During the sign-up, functionality is in place that will check if the typed in email and username are both available.
- The users and trips tables are joined with a `one-to-many` relationship. One User may have many trips.
- Full CRUD functionality is available on the trips data.
- The map is dymanic as it automatically updates as trips are added, edited, and deleted. The map is zoomable and has a a tooltip showing the name of the country being hovered over.
- There is a countries visited counter.
- Password hashing and JWT have been implemented.

#### to be added:
- Some improvement on the sign-up form, as well as a credentials recovery system.
- Mobile view.
- Dark Mode.
- A list of future trips.

### This Readme will be updated as the application gets updated and improved.

## Hope you enjoy using Travel the W0rld!