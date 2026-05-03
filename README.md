# Task Manager Fullstack Application

## Project Description
This project is a fullstack web application that allows users to manage tasks efficiently. Users can create, view, update, delete, and search tasks through a simple and user-friendly interface. The system demonstrates integration between frontend, backend, and a persistent database.

---

## Tech Stack
Frontend: React (JavaScript)  
Backend: Node.js with Express  
Database: MongoDB (persistent storage)  

---

## Features Implemented
- Create new task  
- View all tasks  
- Update existing task  
- Delete task  
- Search tasks (advanced feature)  

---

## System Architecture
The application follows a fullstack architecture:

- Frontend communicates with backend using REST API  
- Backend handles business logic and API endpoints  
- MongoDB stores data persistently  

---

## API Endpoints

GET /tasks  
Retrieve all tasks (supports search query)

POST /tasks  
Create a new task  

PUT /tasks/:id  
Update an existing task  

DELETE /tasks/:id  
Delete a task  

---

## How to Run the Project

### 1. Start MongoDB
Ensure MongoDB is running:
./mongod --dbpath ~/mongodb-data

---

### 2. Start Backend
cd backend npm install node server.js

Backend runs on: http://localhost:5050  

---

### 3. Start Frontend
cd frontend npm install npm start

Frontend runs on: http://localhost:3000  

---

## Example Usage
1. Navigate to homepage  
2. Add a new task  
3. Edit or delete existing tasks  
4. Use search function to filter tasks  

---

## Advanced Feature
Search functionality allows users to filter tasks based on keywords.

---

## Conclusion
This project fulfills the requirement of a fullstack application by integrating frontend, backend, and database. It demonstrates CRUD operations, RESTful API design, and a functional user interface.

---

## Author
pakman2ez
