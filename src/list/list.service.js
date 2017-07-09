import { isBrowser } from '../platform-util';

export function getTodos() {
  return isBrowser() ? JSON.parse(localStorage.getItem('todos')) : [];
}

// just for now
export function createTodo(text) {
  const todos = getTodos();
  const lastTodo = todos[todos.length - 1];

  const newTodo = {
    id: lastTodo.id + 1,
    text: text,
    complete: false
  };

  todos.push(newTodo);

  return todos;
}

export function saveTodo(todo, index) {
  const todos = getTodos();
  index = index || 0;

  todos.splice(index, 1, todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function deleteTodo(todo) {
  const todos = getTodos();

  todos.splice(getTodoIndex(todo), 1);
  localStorage.setItem('todos', JSON.stringify(todos));

  return todos;
}

export function updateTodo(todo) {
  saveTodo(todo, getTodoIndex(todo));
}

export function getTodoIndex(todo) {
  return getTodos().findIndex(t => t.id === todo.id);
}
