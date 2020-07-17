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
}