let taskIdCounter: number = 1;

function addTask(): void {
    const taskText: string = (document.getElementById('new-task') as HTMLInputElement).value;
    if (!taskText) return;

    const taskContainer: HTMLElement = document.getElementById('task-container')!;
    const newTask: HTMLDivElement = document.createElement('div');
    newTask.className = 'task';
    newTask.id = `task-${taskIdCounter}`;
    newTask.innerHTML = `${taskText} <div align=center class="button"><button onclick="completeTask('${newTask.id}')">Выполнено</button> <button onclick="deleteTask('${newTask.id}')">Удалить</button></div>`;

    taskContainer.appendChild(newTask);
    taskIdCounter++;

    (document.getElementById('new-task') as HTMLInputElement).value = '';
}

function completeTask(taskId: string): void {
    const task: HTMLElement = document.getElementById(taskId)!;
    task.style.textDecoration = 'line-through';
    task.style.color = '#888';
}

function deleteTask(taskId: string): void {
    const task: HTMLElement = document.getElementById(taskId)!;
    task.remove();
}

function deleteAllTasks(): void {
    const taskContainer: HTMLElement = document.getElementById('task-container')!;
    taskContainer.innerHTML = '';
}