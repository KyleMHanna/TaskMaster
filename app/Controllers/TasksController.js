import {ProxyState} from "../AppState.js";
import { taskItemService } from "../Services/TaskItemService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"


function _drawTasksItems() {
  let template  = ''
  ProxyState.tasks.forEach(todos => template += todos.Template)
  document.getElementById('app').innerHTML = template
}

export class TaskItemsController {
  constructor(){
    console.log('hello from task controller');
    ProxyState.on ('todos', _drawTasksItems)
    ProxyState.on ('todos', saveState)
    ProxyState.on ('tasks', _drawTasksItems)
    ProxyState.on ('tasks', saveState)
    _drawTasksItems();
  }

  createTask(event){
    event.preventDefault()
    let form = event.target

    let taskData = {
      title: form.title.value,
      color: form.colorPicker.value
    
  }
  taskItemService.createTask(taskData)
  form.reset()
  }

  deleteTask(id){
    taskItemService.deleteTask(id)
  }
  

} 