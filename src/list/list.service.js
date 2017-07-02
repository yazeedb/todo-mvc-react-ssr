import { isBrowser, isNode } from '../platform-util';

function getTodos() {
  return isBrowser() ? JSON.parse(localStorage.getItem('todos')) : [];
}

function saveTodo(todo, index) {
  const todos = getTodos();
  index = index || 0;

  todos.splice(index, 1, todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function updateTodo(todo) {
  getTodos()
    .find((t, index) => {
      if (t.id !== todo.id) {
        return;
      }

      saveTodo(todo, index);
    });
}

export default { getTodos, saveTodo, updateTodo };
