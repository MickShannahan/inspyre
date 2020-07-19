import { generateId } from "../utils.js"

export default class Todo {
  constructor(data) {
    console.log('[RAW ToDO API DATA]', data);
    this._id = data._id || generateId()
    this.completed = data.completed || false
    this.user = data.user || 'mick'
    this.description = data.description
    this.deadline = data.deadline || null
  }

  get Template() {
    return `
              <div class="row">
							<div class="col ${this.completed == true ? ' cross-out' : ''}">${this.description}</div>
							<button onclick="app.todoController.toggleTask('${this._id}')" class="col-2 btn btn-outline-light text-center${this.completed == true ? ' bg-completed' : ''}"><i class="fa fa-check"></i></button>
              <button onclick="app.todoController.deleteTask('${this._id}')" class="col-2 btn btn-outline-danger text-center"><i class="fa fa-times"></i></button>
              </div>
    `
  }
}