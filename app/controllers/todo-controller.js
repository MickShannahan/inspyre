import TodoService from "../services/todo-service.js";
import Todo from "../models/todo.js"
import _store from "../store.js";

//TODO Create the render function
function _drawTodos() { }

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
  }

  addTask(event) {
    event.preventDefault();
    let form = event.target.newTask.value;
    console.log(form);
    let todo = {
      description: form
    }
    TodoService.addTask(new Todo(todo))

    // TodoService.addTodoAsync(todo);
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
