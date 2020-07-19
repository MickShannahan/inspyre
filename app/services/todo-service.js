import Todo from "../models/todo.js"
import _store from "../store.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/mick/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get().then(res => {
      _store.commit('todos', res.data.data.map(task => new Todo(task)))
      console.log("updated todos from get", _store.State.todos);
    }).catch(err => console.error(err));
  }

  addTask(todo) {
    todoApi.post("", todo).then(res => {
      console.log(res)
      this.getTodos()
    }).catch(err => console.error(err))
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTask(taskId) {
    let task = _store.State.todos.find(task => task._id == taskId)
    // console.log(task);
    // console.log(_store.State.todos);
    task.completed == false ? task.completed = true : task.completed == true ? task.completed = false : console.log("some how the task was neighter true or false");
    todoApi.put(task._id, task).then(res => {
      // console.log(res);
    })
  }
  deleteTask(taskId) {
    todoApi.delete(taskId).then(res => {
      let newList = _store.State.todos.filter(task => task._id != taskId)
      _store.commit('todos', newList)
    }).catch(err => console.error(err))
  }
  toggleTodoStatusAsync(todoId) {
    let todo = _store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
