document.addEventListener('DOMContentLoaded', function() {

    let taskIdCounter: number = 1;

    function addTask(): void {
        const taskText: string = (document.getElementById('new-task') as HTMLInputElement).value;
        if (!taskText) return;

        const taskContainer: HTMLElement = document.getElementById('task-container')!;
        const newTask: HTMLDivElement = document.createElement('div');
        newTask.className = 'task';
        newTask.id = `task-${taskIdCounter}`;
        const remove: HTMLButtonElement = document.createElement('button');
        remove.innerHTML = 'Удалить';
        remove.addEventListener('click', ()=>{
            newTask.remove();
        })
        const complete: HTMLButtonElement = document.createElement('button');
        complete.innerHTML = 'Выполнено';
        complete.addEventListener('click', ()=>{
            const task: HTMLElement = document.getElementById(newTask.id)!;
        (task.querySelector('.text') as HTMLElement).style.textDecoration = 'line-through';
        (task.querySelector('.text') as HTMLElement).style.color = '#888';
        })
        newTask.innerHTML = `<div><div class="text">${taskText}</div></div>`;
        newTask.append(remove);
        newTask.append(complete);
        console.log(newTask.textContent)
        taskContainer.appendChild(newTask);
        taskIdCounter++;
        (document.getElementById('new-task') as HTMLInputElement).value = '';
    }

    function completeTask(taskId: string): void {
        const task: HTMLElement = document.getElementById(taskId)!;
        (task.querySelector('.text') as HTMLElement).style.textDecoration = 'line-through';
        (task.querySelector('.text') as HTMLElement).style.color = '#888';
    }

    function deleteTask(taskId: string): void {
        const task: HTMLElement = document.getElementById(taskId)!;
        task.remove();
    }

    function deleteAllTasks(): void {
        const taskContainer: HTMLElement = document.getElementById('task-container')!;
        taskContainer.innerHTML = '';
    }

    document.getElementById('add-button')!.addEventListener('click', addTask);
    document.getElementById('delete-all-button')!.addEventListener('click', deleteAllTasks);
});
