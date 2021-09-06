import { generateId } from"../Utils/generateId.js"
import { ProxyState} from "../AppState.js"

export class Todo{
  constructor (todoData){
    this.title =todoData.title
    this.id = todoData.id || generateId()
    this.taskId = todoData.taskId
    this.checked = todoData.checked || false
  }
  get Template(){
    return /*html*/ `
      <div class="row ">
      <div class="todos">
      </div>
      <div class="col">
    <p  class="${this.taskId}" onclick="app.todosController.completeTodo('${this.id}')">${this.title} <input type="checkbox" value="" ${this.checked ? "checked" : ""} >  </p>
    
    </div>
    <div class="col-1">
    <button class="text-danger close" onclick="app.todosController.deleteTodo('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
    </div>
    `
  }
}



//<input type="checkbox" name="completeTodo" id='${this.taskId}' unchecked > 