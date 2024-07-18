# Book a Pet Sitter Web App


This repository contains a full-stack web application with user registration, login, and personalized dashboards. 
Pet sitters can list services and manage availability, while pet owners can search for providers, view service details, and book appointments using a calendar interface.
Sign Up page includes Pet Sitter & Pet Owner switch button to decompose user dashboard type.  
This project demonstrates my ability to create user-friendly, role-specific interfaces and integrate seamless scheduling features.

Tools Used:
JS, React.js, Node.js, Express
MongoDB database for login and registration functionalities.

It is divided into two main directories:

- **client**  : Contains the React frontend code.
- **server**: Contains the Node.js backend code using Express, which handles API requests and connects to the MongoDB database.

## Installation

Follow these steps to install and set up the application on your local machine:

1. **Clone the repository & Install the dependencies**

  ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name 
   cd client -> npm install
   cd ../server -> npm install
```
Ensure you have Expo CLI installed. If not, install it using npm in main folder:

```sh
npm install -g expo-cli
```

2. **Configure the environment variables**
Create a .env file in the server directory and add your MongoDB (or other database) connection string:
```sh
MONGO_URI=mongodb://your_mongodb_uri
```

## Running The Application

```sh
   cd server -> npm start ( ensure the connection with the database)
   cd ../client -> npm expo start
   
```

# Or directly review the [Web Site](https://book-a-petsitter-demo.surge.sh/)





