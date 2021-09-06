import { ProxyState }from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";
import { loadState} from "../Utils/LocalStorage.js"




class TaskItemService {
  constructor() {
  ProxyState.on("tasks", saveState)  
  // ProxyState.on('tasks', loadState)
  }
    
  
  createTask(taskData) {
    let tasks= ProxyState.tasks
    ProxyState.tasks =[...ProxyState.tasks, new Task(taskData)]
    console.log('task create');
  }
  

  deleteTask(taskId){
    let x = confirm("Are you sure you want to delete this task?")
        if(x == true){
  ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskId)
  ProxyState.todos = ProxyState.todos.filter(todos=> todos.taskId !== taskId)
  // todo enable once todos are wireed up
  // ProxyState.todos =ProxyState.todos.filter(T => T.taskId !== taskId)
  console.log('task delete');
  Swal.fire(
    'Deleted!',
    ' ',
    'error'
      )
  }
  }
}



export const taskItemService = new TaskItemService();
console.log('hello from task services');