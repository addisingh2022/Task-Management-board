TaskFlow — Kanban Task Management Board

TaskFlow is a responsive, Trello-inspired task management application built with HTML, CSS, and Vanilla JavaScript. It provides a simple and intuitive Kanban board to create, organize, and manage tasks across different workflow stages.

Features

- Task Creation — Create tasks with custom titles and priority levels.
- Kanban Board — Organize tasks across To Do, In Progress, and Done columns.
- Drag & Drop — Move tasks between columns using the HTML Drag and Drop API.
- Priority Management — Assign Low, Medium, or High priority to tasks.
- Task Deletion — Remove tasks directly from the board.
- Persistent Storage — Automatically save and restore tasks using localStorage.
- Task Counters — Display total tasks and individual column counts.
- Responsive Design — Layout adapts to different screen sizes.

Tech Stack

Technology| Usage
HTML5| Application structure
CSS3| Styling and responsive layout
JavaScript (ES6+)| Application logic and DOM manipulation
HTML Drag and Drop API| Task movement between columns
Web Storage API| Client-side data persistence

Getting Started

Clone the Repository

git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

Run Locally

1. Navigate to the project directory.
2. Open "index.html" in your browser.

Alternatively, use the Live Server extension in VS Code.

No additional dependencies or build tools are required.

Usage

1. Enter a task title and select a priority level.
2. Click Add Task to create a new task.
3. Drag tasks between columns to update their status.
4. Delete tasks when they are no longer needed.
5. Tasks are automatically saved and restored after refreshing the page.

Note: Native HTML Drag and Drop is primarily designed for mouse-based interactions. Touch support may vary across browsers.

Project Structure

taskflow/
├── index.html
├── style.css
├── script.js
└── README.md

Data Storage

TaskFlow uses the browser's "localStorage" API to persist task data locally.

Each task is stored as an object containing a unique identifier, title, priority, and status.

{
  "id": "unique-task-id",
  "title": "Complete project documentation",
  "priority": "high",
  "status": "todo"
}

Task data is serialized using "JSON.stringify()" and restored using "JSON.parse()".

All data remains in the user's browser. No backend server or external database is required.

---

TaskFlow — Simple task management, organized workflow.