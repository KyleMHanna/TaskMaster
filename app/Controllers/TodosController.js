import { todosItemService } from "../Services/TodoItemService.js"
import {ProxyState} from "../AppState.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

console.log('hello from todo controller');
export class TodosController{
  constructor(){


  console.log('hello from todo controller');
    ProxyState.on('tasks', saveState)
  }
  createTodo(event, taskId){
  event.preventDefault()
  let form = event.target
  let todo ={
    title: form.todoTitle.value,
    taskId: taskId,
    checked: false
  }

  todosItemService.createTodo(todo)
  console.log('hello from todo controller');
  form.reset()
}
deleteTodo(id){
todosItemService.deleteTodo(id)
}

completeTodo(id){
  
  todosItemService.completeTodo(id)
  }

uncompletedTodo(id){
  todosItemService.uncompletedTodo(id)

}
}