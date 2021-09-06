import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { Todo } from "../Models/Todo.js";

export function saveState() {
  localStorage.setItem('TaskMaster', JSON.stringify({
    tasks: ProxyState.tasks,
    todos: ProxyState.todos
  }))
}


export function loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  console.log(data);
  if(data != null){
    ProxyState.tasks = data.tasks.map(t => new Task(t))
    ProxyState.todos = data.todos.map(todos => new Todo(todos))
  }
}