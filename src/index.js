let taskIdCounter = 1;
function addTask() {
    const taskText = document.getElementById('new-task').value;
    if (!taskText)
        return;
    const taskContainer = document.getElementById('task-container');
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.id = `task-${taskIdCounter}`;
    newTask.innerHTML = `${taskText} <div align=center class="button"><button onclick="completeTask('${newTask.id}')">Выполнено</button> <button onclick="deleteTask('${newTask.id}')">Удалить</button></div>`;
    taskContainer.appendChild(newTask);
    taskIdCounter++;
    document.getElementById('new-task').value = '';
}
function completeTask(taskId) {
    const task = document.getElementById(taskId);
    task.style.textDecoration = 'line-through';
    task.style.color = '#888';
}
function deleteTask(taskId) {
    const task = document.getElementById(taskId);
    task.remove();
}
function deleteAllTasks() {
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';
}
