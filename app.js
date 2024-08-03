
document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value;
    if (taskText) {
        const listItem = createTaskElement(taskText);
        document.getElementById('todo-list').appendChild(listItem);
        taskInput.value = '';
    }
}

function createTaskElement(taskText) {
    const listItem = document.createElement('li');

    const taskLabel = document.createElement('label');
    taskLabel.textContent = taskText;

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change', toggleTaskCompletion);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(listItem, taskLabel));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(listItem));

    listItem.appendChild(taskCheckbox);
    listItem.appendChild(taskLabel);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

function toggleTaskCompletion(event) {
    const taskLabel = event.target.nextSibling;
    if (event.target.checked) {
        taskLabel.style.textDecoration = 'line-through';
    } else {
        taskLabel.style.textDecoration = 'none';
    }
}

function editTask(listItem, taskLabel) {
    const newTaskText = prompt('Edit your task:', taskLabel.textContent);
    if (newTaskText !== null) {
        taskLabel.textContent = newTaskText;
    }
}

function deleteTask(listItem) {
    listItem.remove();
}
