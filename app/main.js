import {ProxyState} from "./AppState.js"
import { TaskItemsController } from "./Controllers/TasksController.js";
import { TodosController} from "./Controllers/TodosController.js"
import { loadState } from "./Utils/LocalStorage.js";

class App {
taskItemsController = new TaskItemsController();
todosController = new TodosController();
}


window["app"] = new App();
console.log('hellow from main js');
loadState()
