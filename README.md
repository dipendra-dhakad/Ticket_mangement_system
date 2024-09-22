Overview
This is a simple Ticket Management System built with Node.js and MongoDB. It supports basic CRUD operations (Create, Read, Update, Delete) for managing support tickets.

Features
Create new support tickets.
Retrieve all existing tickets.
Retrieve a single ticket by its unique identifier.
Update a ticket’s title, description, or status.
Delete a ticket by its unique identifier.
Input validation and error handling.
Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v12 or higher)
MongoDB (either local or cloud-based via MongoDB Atlas)


Setup Instructions
1. Clone the Repository
bash
Copy code
git clone <repository_url>
cd ticket
3. Install Dependencies
Install the project dependencies by running:

bash
Copy code
npm install
3. Create a .env File
In the root directory of your project, create a .env file and add the following content:

env
Copy code
MONGO_URI=<Your MongoDB URI>
PORT=5000
Replace <Your MongoDB URI> with your MongoDB connection string.
For local MongoDB, it might be something like mongodb://localhost:27017/ticket-management.
For MongoDB Atlas, it will be a URL provided by Atlas.
4. Run the Application
You can run the app using:

bash
Copy code
npm start
Or, if you're using nodemon for automatic restarting on code changes, use:

bash
Copy code
npm run dev
The server should be running on http://localhost:5000 (or another port if specified in .env).

5. Testing the API
You can test the API using a tool like Postman or Insomnia. The available API endpoints are listed below.

