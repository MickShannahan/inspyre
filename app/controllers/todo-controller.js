import TodoService from "../services/todo-service.js";
import Todo from "../models/todo.js"
import _store from "../store.js";
import { generateTodoPhrase } from "../utils.js"

//TODO Create the render function
function _drawTodos() {
  let todosLeft = 0
  let template = ''
  _store.State.todos.forEach(task => template += task.Template)
  document.getElementById('tasks').innerHTML = template

  _store.State.todos.forEach(task => {
    task.completed == false
    todosLeft += 1
  })
  document.getElementById('todo-message').innerText = generateTodoPhrase() + ": " + todosLeft + ' left'
}

export default class TodoController {
  constructor() {
    _store.subscribe('todos', _drawTodos)
    TodoService.getTodos();
    _drawTodos()
  }

  addTask(event) {
    event.preventDefault();
    let form = event.target.newTask.value;
    // console.log(form);
    let todo = {
      description: form
    }
    TodoService.addTask(new Todo(todo))
  }

  toggleTask(taskId) {
    TodoService.toggleTask(taskId)
    _drawTodos()
  }

  deleteTask(taskId) {
    TodoService.deleteTask(taskId)
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
