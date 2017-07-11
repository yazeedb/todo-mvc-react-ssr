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

export function updateTodo(todoList, todo) {
  const index = getTodoIndex(todoList, todo);
  todoList.splice(index, 1, todo);
}

export function deleteTodo(todoList, todo) {
  const index = getTodoIndex(todoList, todo);
  todoList.splice(index, 1);
}

export function getTodoIndex(todoList, todo) {
  return todoList.findIndex(t => t.id === todo.id);
}

export function toggleTodos(todoList, toggleValue) {
  todoList.forEach(t => t.complete = toggleValue);
}
