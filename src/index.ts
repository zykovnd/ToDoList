document.addEventListener('DOMContentLoaded', function() {
    let taskIdCounter: number = 1;
    let completedTasks: number = 0;
    let uncompletedTasks: number = 0;
    const completedTasksBlock: HTMLElement = document.getElementById('completed-tasks-counter')!;
    const uncompletedTasksBlock: HTMLElement = document.getElementById('uncompleted-tasks-counter')!;

    function addTask(): void {
        function removeTask(){
            const task: HTMLElement = document.getElementById(newTask.id)!;
            if ((task.querySelector('.text') as HTMLElement).style.textDecoration == 'line-through') completedTasks--;
            else uncompletedTasks--;
            updateTaskCounter();
            remove.removeEventListener('click', removeTask);
            newTask.remove();
        }
        function completeTask(){
            completedTasks++;
            uncompletedTasks--;
            updateTaskCounter();
            const task: HTMLElement = document.getElementById(newTask.id)!;
            (task.querySelector('.text') as HTMLElement).style.textDecoration = 'line-through';
            (task.querySelector('.text') as HTMLElement).style.color = '#888';
            complete.removeEventListener('click', completeTask);
        }
        uncompletedTasks++;
        const taskText: string = (document.getElementById('new-task') as HTMLInputElement).value;
        if (!taskText) return;
        const taskContainer: HTMLElement = document.getElementById('task-container')!;
        const newTask: HTMLDivElement = document.createElement('div');
        newTask.className = 'task';
        newTask.id = `task-${taskIdCounter}`;
        const remove: HTMLButtonElement = document.createElement('button');
        remove.innerHTML = 'Удалить';
        remove.addEventListener('click', removeTask)
        const currentDate : string = new Date().toLocaleString();
        const complete: HTMLButtonElement = document.createElement('button');
        complete.innerHTML = 'Выполнено';
        complete.addEventListener('click', completeTask);
        newTask.innerHTML = `<div class="text">${taskText}</div><div class="text">${currentDate}</div>`;
        newTask.append(complete);
        newTask.append(remove);
        taskContainer.appendChild(newTask);
        updateTaskCounter();
        taskIdCounter++;
        (document.getElementById('new-task') as HTMLInputElement).value = '';
    }

    function deleteAllTasks(): void {
        completedTasks = 0;
        uncompletedTasks = 0;
        updateTaskCounter();
        const taskContainer: HTMLElement = document.getElementById('task-container')!;
        taskContainer.innerHTML = '';
    }

    function updateTaskCounter(): void{
        completedTasksBlock.innerHTML = `Сделано: ${completedTasks}`;
        uncompletedTasksBlock.innerHTML = `Не сделано: ${uncompletedTasks}`;
    }

    document.getElementById('add-button')!.addEventListener('click', addTask);
    document.getElementById('delete-all-button')!.addEventListener('click', deleteAllTasks);
});
