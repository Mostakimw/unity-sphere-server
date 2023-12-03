# User Management Web Application - Backend

## Overview

This is the backend component of the User Management Web Application. It is built using TypeScript, Node.js and Express.js, with MongoDB as the database and Mongoose for object modeling.

## Features

### CRUD API for Users:

- `GET /api/users`: Retrieve all users with pagination support.
- `GET /api/users/:id`: Retrieve a specific user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update an existing user.
- `DELETE /api/users/:id`: Delete a user.

### Filtering, Searching, and Pagination:

- Filtering logic for Domain, Gender.
- Searching logic to search for users by their names.
- Pagination logic to retrieve a specific number of users per page.

### Team Operations API:

- `POST /api/team`: Create a new team by selecting users with unique domains and availability.
- `GET /api/team/:id`: Retrieve the details of a specific team by ID.

## Tech Stack

- **MongoDB:** Used for strict type checking.
- **Node.js and Express.js:** Used for server development and handling API requests.
- **MongoDB:** Database for storing user and team information.
- **Mongoose:** Object modeling with MongoDB.

## How to Run

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mostakimw/unity-sphere-server

   ```

2. Navigate to the project directory:

   ```bash
   cd your-project-directory

   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a .env file in the root of the project and configure the following variables:
   ```PORT=5000
   DATABASE_URL_LOCAL=mongodb://127.0.0.1:27017/
   ```
   Adjust the values based on your preferences and local MongoDB setup

## Database Setup

- Ensure MongoDB is running on your machine.

- The application will create the necessary collections and indexes on startup.

## Build and Compilation

- Build the TypeScript code using:

  ```bash
  npm run build

  ```

## How to Run

- Start the application with the following command:
  ```bash
  npm run start:dev
  ```

You can find more build command in package.json file.

## Contact Information

For any questions, feedback, or inquiries, feel free to reach out to me:

- Email: [mostakimahamed401@gmail.com](mailto:mostakimahamed401@gmail.com)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/mostakim-ahamed/)
