import { isBrowser } from '../platform-util';

function getTodos() {
  return isBrowser() ? JSON.parse(localStorage.getItem('todos')) : [];
}

function saveTodo(todo, index) {
  const todos = getTodos();
  index = index || 0;

  todos.splice(index, 1, todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(todo) {
  const todos = getTodos();

  todos.splice(getTodoIndex(todo), 1);
  localStorage.setItem('todos', JSON.stringify(todos));

  return todos;
}

function updateTodo(todo) {
  saveTodo(todo, getTodoIndex(todo));
}

function getTodoIndex(todo) {
  return getTodos().findIndex(t => t.id === todo.id);
}

export default { getTodos, saveTodo, deleteTodo, updateTodo };
