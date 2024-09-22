# Task Manager App - Todo

This is a **Task Manager App** built using the **MERN stack** (MongoDB, Express, React, Node.js) which allows users to efficiently manage their daily tasks. The app provides features such as adding, updating, and deleting tasks, with real-time feedback using toast notifications.

## Features

- **Add Task**: Create new tasks and add them to the list.

- **Update Task**: Modify existing tasks.

- **Delete Task**: Remove tasks that are no longer needed.

- **Toast Notifications**: Instant feedback for actions such as task creation, update, and deletion.

## Project Structure

The project is divided into two main parts:

- **Frontend**: Built using React for a dynamic, interactive UI.

- **Backend**: Developed with Node.js and Express, connected to a MongoDB database for storing task data.

## Tech Stack

- **Frontend**:

  - React

  - Web Vitals

  - React Toastify for notifications

- **Backend**:

  - Node.js

  - Express

  - MongoDB (using Mongoose)

## Setup

To run the project locally, follow these steps:

### 1. Clone the Repository

```bash

git clone https://github.com/Unity19207/TaskManagerApp-Todo.git

```

### 2. Navigate to the project directory

```bash

cd TaskManagerApp-Todo

```

### 3. Install Dependencies

#### Backend

Navigate to the `server` folder and run:

```bash

cd server

npm install

```

#### Frontend

Navigate to the `client` folder and run:

```bash

cd client

npm install

```

### 4. Start the Development Server

#### Backend

In the `server` folder, start the backend:

```bash

npm run dev

```

#### Frontend

In the `client` folder, start the frontend:

```bash

npm start

```

### 5. Access the App

Once both the frontend and backend servers are running, open your browser and go to `http://localhost:3000` to access the app.

## Future Improvements

- Add user authentication for personalized task management.

- Implement task categorization and filtering.

- Improve the UI with more features like sorting tasks by deadline or priority.
