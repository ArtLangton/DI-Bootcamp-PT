import TodoList from './todo.js';

const todoList = new TodoList();

todoList.addTask('Buy groceries');
todoList.addTask('Do laundry');
todoList.addTask('Write report');

todoList.completeTask(0);

todoList.listTasks();