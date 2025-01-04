# Online Tutor Booking Platform

## Project Name
**Online Tutor Booking Platform**

## Project Purpose
The **Online Tutor Booking Platform** is designed to connect users with tutors across various languages and subjects. The platform simplifies the process of finding, reviewing, and booking tutors through an interactive, user-friendly interface. It enhances accessibility to learning opportunities worldwide and streamlines the tutor hiring process. Users can browse categories, view detailed tutor profiles, and book sessions securely. It aims to support the global community in achieving their educational goals.

## Live URL
https://assignment-eleven-3bd98.web.app

## Key Features
- **Authentication**: Login and Registration system using Email/Password and Google Sign-In.
- **Tutor Profiles**: Users can view detailed tutor profiles, including language, price, description, and reviews.
- **Booking System**: Secure booking of tutors with session details stored in the database.
- **Search Functionality**: Search tutors based on languages.
- **Add Tutorials**: Users can add their own tutorials to the platform with essential details.
- **Review System**: Users can leave reviews for tutors, contributing to the tutor’s rating.
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop.
- **Dark/Light Theme**: Toggle between dark and light themes for better user experience.
- **Admin Controls**: Tutors can manage their tutorials (add, update, delete).
  
## Technologies Used
- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token) for secure authentication
- **Hosting**: Firebase (for frontend), Vercel (for server-side)
- **Others**: CORS, cookie-parser

## NPM Packages Used
- `express`: Web framework for building the backend.
- `cors`: Middleware for enabling cross-origin requests.
- `jsonwebtoken`: For JWT authentication.
- `cookie-parser`: For handling cookies in requests.
- `dotenv`: To manage environment variables.
- `mongodb`: MongoDB Node.js driver for database connection.
- `react-router-dom`: For routing in React.
- `react-bootstrap`: For UI components.
- `axios`: For making HTTP requests from React.
- `react-icons`: For adding icons in the UI.

## Setup Instructions

### Client-Side Setup
1. Clone the client repository:
   
   

2. Install the required dependencies:

     npm install
3. Run the development server:
    npm start
    Visit http://localhost:5174 in browser to view the project.


### Client-Side Setup

1. Clone the server repository:
   
  

2. Install the required dependencies:
      npm install
3. Create a .env file and add the necessary environment variables:
   
   DB_USER=your-db-user
   DB_PASS=your-db-password
   ACCESS_TOKEN_SECRET=your-secret-key

4. Start the server:
    npm start


### Usage
#### Login: Use your email and password or Google Sign-In to access the platform.
#### Browse Tutors: Click on "Find Tutors" to search for tutors by language or category.
#### Book a Session: After selecting a tutor, click "Book" to schedule a session.
#### Add a Tutorial: As a tutor, you can add your tutorial details under the "Add Tutorials" section.
#### Manage Tutorials: View, edit, and delete your tutorials under the "My Tutorials" section.
#### Review a Tutor: Leave reviews for tutors you have booked under the "My Booked Tutors" section.

### Deployment:
#### Client-Side: Deployed on Firebase Hosting
#### Server-Side: Deployed on Vercel
Ensure that the server is working perfectly on production and does not throw any CORS or 404 errors. You can access the live version of the application at the provided URL.

### Environment Variables
Ensure that the following environment variables are configured in both client and server setups:

#### DB_USER: MongoDB username
#### DB_PASS: MongoDB password
#### ACCESS_TOKEN_SECRET: Secret key for JWT authentication


