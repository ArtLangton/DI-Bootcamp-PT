class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
    }

    completeTask(taskIndex) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            this.tasks[taskIndex].completed = true;
        }
    }

    listTasks() {
        console.log("Tasks:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.task} - ${task.completed ? 'Completed' : 'Pending'}`);
        });
    }
}

export default TodoList;