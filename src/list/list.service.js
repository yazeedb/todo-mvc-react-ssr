import { isBrowser } from '../platform-util';

export function getTodos() {
  return isBrowser() ? JSON.parse(localStorage.getItem('todos')) : [];
}

export function createTodo(text) {
  const { generate } = require('shortid');

  return {
    id: generate(),
    text: text,
    complete: false
  };
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
