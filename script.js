
const form = document.getElementById('task-form');
const input = document.getElementById('task-title');
const priority = document.getElementById('task-priority');
const count = document.getElementById('total-tasks');

const todoList = document.getElementById('todo-list');
const progressList = document.getElementById('progress-list');
const doneList = document.getElementById('done-list');

const columns = document.querySelectorAll('.column');

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add new task
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = input.value.trim();

    if (title === '') {
        alert('Enter a valid task name!');
        return;
    }

    const newTask = {
        id: crypto.randomUUID(),
        title: title,
        priority: priority.value,
        status: 'todo'
    };

    tasks.push(newTask);

    saveTasks();
    renderTasks();
    form.reset();
});

// Render all tasks
function renderTasks() {
    todoList.innerHTML = '';
    progressList.innerHTML = '';
    doneList.innerHTML = '';

    count.textContent = `${tasks.length} tasks`;

    // Update column counts
    document.getElementById('todo-count').textContent =
        tasks.filter((task) => task.status === 'todo').length;

    document.getElementById('progress-count').textContent =
        tasks.filter((task) => task.status === 'progress').length;

    document.getElementById('done-count').textContent =
        tasks.filter((task) => task.status === 'done').length;

    tasks.forEach((task) => {
        const div = document.createElement('div');
        div.classList.add('task-card');
        div.draggable = true;

        // Task title
        const heading = document.createElement('h3');
        heading.textContent = task.title;
        div.appendChild(heading);

        // Priority badge
        const span = document.createElement('span');
        span.textContent = task.priority;
        span.classList.add('priority', task.priority);
        div.appendChild(span);

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', () => {
            tasks = tasks.filter((item) => item.id !== task.id);

            saveTasks();
            renderTasks();
        });

        div.appendChild(deleteBtn);

        // Drag start
        div.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', task.id);
            event.dataTransfer.effectAllowed = 'move';
        });

        // Add card to correct column
        if (task.status === 'todo') {
            todoList.appendChild(div);
        } else if (task.status === 'progress') {
            progressList.appendChild(div);
        } else if (task.status === 'done') {
            doneList.appendChild(div);
        }
    });
}

// Drag over and drop
columns.forEach((column) => {
    column.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });

    column.addEventListener('drop', (event) => {
        event.preventDefault();

        const taskId = event.dataTransfer.getData('text/plain');

        const task = tasks.find((item) => item.id === taskId);

        if (!task) return;

        task.status = column.dataset.status;

        saveTasks();
        renderTasks();
    });
});

// Initial render
renderTasks();
