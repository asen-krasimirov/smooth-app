# Smooth
"Smooth" is a React Application in which you can create job posts as a <b>Company</b> or look for job opportunities as an <b>Applicant</b>.

## Purpose
I made this project as part of Softuni's course "ReactJS - November 2021". For the making of this project I used Django Rest Framework for the back-end of the application and I utilized the knowledge I gained during the course for the front-end. In this project I used techniques like react hooks, contexts, components, front-end routing and many more.

### Backend Repository:
The GitHub repository of the back-end is here: https://github.com/asen-krasimirov/smooth-app-api

### Deployed to:
The application is deployed on Firebase here- https://smooth-ec517.web.app/

### Technologies used:
* Python 
* Django
* Javascript
* React
* React-Router
* HTML
* CSS

## Project Description
### Dynamic Pages
This app has 8 dynamic pages:
#### * Jobs Browser (Catalog)
#### * Job Details (Details)
#### * Job Update
#### * Applicant Profiles
#### * Business Profiles
#### * Applicant Profiles Update
#### * Business Profiles Update
#### * Applied Jobs (For Applicant Accoutns)

### Data Collections
#### * Job Collection (Main Collection)
#### * AppliedJobs Collection (For Applicant Accounts)
#### * User Collection (Using Custom Django User)
#### * ApplicantProfile Collection (Profiles for Applicant Accounts)
#### * BusinessProfile Collection (Profiles for Business Accounts)

### Authentication
This app supports two account types, both having unique functionalities.
There are three types of accounts:
* Guests
* Business Accounts
* Applican Accounts

### User Privilages:
#### Not Authenticated (Public Part)
* Guests- These users are able to browse the posted job offers, view their details and view creator's profiles.
#### Authenticated (Private Part)
* Business Accounts- These users have all the privileges of the guest users plus having the ability to create their own jobs posts.<br>
Users with business accounts create jobs posts (as well as edit and delete them) and view who has applied to them.
* Applicant Accounts- These users have all the privileges of the guest users plus having the ability to apply to job posts.<br>
They can browser all available jobs, pick the best for them and apply. They can also see a list of all the jobs they have applied to.
