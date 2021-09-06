import {ProxyState} from"../AppState.js"
import { Todo } from"../Models/Todo.js";
import { saveState } from "../Utils/LocalStorage.js";
import { loadState} from "../Utils/LocalStorage.js"

class TodosItemService {
  constructor(){
    ProxyState.on("todos", saveState) 
  }
  createTodo(todoData){
    
    ProxyState.todos = [...ProxyState.todos, new Todo(todoData)]
    ProxyState.todos = ProxyState.todos
    console.log('hello from todo service', ProxyState.todos);
    Swal.fire(
        'Todo added!',
        'Success!'
      )
  }
  deleteTodo(id){
    let x = confirm("Are you sure you want to delete this todo?")
        if(x == true){
    ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    Swal.fire(
    'Deleted!',
    ' ',
    'error'
      )
    console.log("delete todo");
    }
  }

  completeTodo(id){
    let todo = ProxyState.todos.find(t => id == t.id)
    console.log(todo);
    todo.checked = !todo.checked;

    ProxyState.todos = ProxyState.todos


    }
}

export const todosItemService = new TodosItemService()
console.log('hello from todo service')