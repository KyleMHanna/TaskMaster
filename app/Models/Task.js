import { generateId } from "../Utils/generateId.js"
import { ProxyState} from "../AppState.js"


 
export class Task {
  constructor(taskData){
    this.title = taskData.title,
    this.id = taskData.id || generateId()
    this.checked = taskData.checked || false
    this.color = taskData.color

  }
  // todo add info for tasks 
get Template() {
  return /*html*/ `
          <div class="col-sm-12 col-md-4 shadow-lg rounded p-3 " style="background-color:${this.color}">
            <h4 class="text-center" style="background-color:${this.color}">${this.title}<button class="text-danger  close" onclick="app.taskItemsController.deleteTask('${this.id}')"><span><i class="mdi mdi-delete "></i></span></button></h4>
            <div class="apps">
            <form onsubmit="app.todosController.createTodo(event, '${this.id}')">
              <input type="text" class="form-control todo-list-input" name="todoTitle" placeholder="add Todo" required minlength="3" maxlength="50">
              <button class="btn btn-primary  mt-3 mdi mdi-plus-thick " >create todo</button> 
            </form>
            
            </div>

            
            <div class="row">
              <div class="col-md-12 p-3">
              ${this.Todos} 
              </div>
              </div>
          </div>
    `     
  }  

  get Todos(){
    let template = ''
    let todos = ProxyState.todos.filter(t => t.taskId == this.id)
    console.log('after filter', todos)
    todos.forEach(t => template += t.Template)
    return template
  }
}