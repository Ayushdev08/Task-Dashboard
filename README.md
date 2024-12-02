Task Management Web Application

Overview

This project is a task management web application built using ReactJS, Material-UI (MUI), and Redux for state management. The application allows users to add, edit, and manage tasks efficiently. It also includes features such as notifications for task reminders based on the due date.

This application was created as part of an assignment for the Front-End Development Internship at Brand Kiln. The goal of the project was to demonstrate skills in building modern web applications using ReactJS and to showcase proficiency in state management, form handling, and responsive design.

Features

Add, Edit, and Delete Tasks: Users can create new tasks, modify existing ones, and delete tasks.
Due Date Reminders: When adding a task, the user can set a due date. If the task’s due date is approaching, the user will receive a browser notification.
Responsive Design: The application is fully responsive, ensuring usability on both desktop and mobile devices.
Dark Mode Support: The app supports a dark mode that changes the background color and text color for better readability in low-light environments.
Technologies Used

ReactJS: A JavaScript library for building user interfaces.
Material-UI: A popular React UI framework used for building modern, responsive, and accessible web applications.
Redux: A state management library to manage the global state of the application.
React Router: Used for handling navigation within the app.
CSS: For styling the components, including media queries for responsiveness.
Setup and Installation

Prerequisites
Make sure you have the following installed:

Node.js (>= 14.x.x) - Download from nodejs.org
npm (comes with Node.js) or Yarn - Package managers for handling dependencies
Installation Steps
Clone the repository:
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
Install dependencies:
If you are using npm:

npm install
If you are using Yarn:

yarn install
Run the application:
Start the development server by running the following command:

npm start
This will start the app at http://localhost:3000.
Screenshots

Here are some screenshots of the application in action:

1. Task List View 
The desktop view of the task list showing tasks and action buttons for editing and deleting.

2. Add New Task Form 
The form for adding a new task, including title, description, and due date fields.

3. Dark Mode
The app in dark mode, showing the task list and form with dark background and light text.

Folder Structure

/task-management-app

  ├── /public
  │   └── index.html
  ├── /src
  │   ├── /components
  │   │   ├── TaskForm.js
  │   │   ├── TaskList.js
  │   │   └── TaskCard.js
  │   ├── /redux
  │   │   └── taskSlice.js
  │   ├── App.js
  │   ├── index.js
  │   └── styles.css
  ├── package.json
  ├── README.md
  └── .gitignore

/public: Contains static files like index.html.
/src: Contains the main application code, including components and styles.
/redux: Contains the Redux slice for managing tasks.
App.js: The main React component, which renders the task management functionality.
styles.css: Custom styles for the application, including responsive design.
Key Features Implementation

1. Task Form
Add New Task: Users can fill in the task title, description, and due date to create a new task.
Edit Existing Task: If a task is selected for editing, the fields will be populated with the current task’s data.
Validation: Form fields are required before submission to ensure all necessary information is provided.
2. Task List
Displays a list of tasks with the ability to edit or delete each task.
Tasks are displayed in a responsive grid layout, adapting based on screen size.
3. Due Date Reminders
A reminder notification is triggered when the task’s due date approaches, based on the user's browser notification permissions.
The application calculates the difference between the current time and the task's due time, then triggers a browser notification at the specified reminder time.
Challenges & Learnings

Handling Form State: One of the key challenges was managing form state using React hooks (useState), especially when editing existing tasks. I utilized the useEffect hook to pre-populate the form when editing a task.
Browser Notifications: Implementing the browser notifications required working with the browser’s Notification API and managing the time difference between the current time and the task’s due date.
Responsive Design: Ensuring that the app is responsive on both large and small screens was important, and I used Material-UI’s grid system and media queries to achieve this.

Future Enhancements

Authentication: Implementing user authentication using JWT or Firebase so that users can sign in and access their tasks across devices.

Task Categories: Implementing categories for tasks to organize them better (e.g., Work, Personal).

Conclusion

This task management web application demonstrates my skills in ReactJS, Redux, and responsive design. I hope to continue improving my front-end development skills and look forward to contributing to the team at Brand Kiln as a Front-End Development Intern.

Contact Information
Name: Ayush Varma
GitHub: github.com/Ayushdev08
LinkedIn: www.linkedin.com/in/ayush-varma-55b09b24b

