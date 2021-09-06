import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Task } from "../app/Models/Task.js"
import { Todo } from "../app/Models/Todo.js"


class AppState extends EventEmitter {
   /** @type {Task[]} */

  tasks = []
 /** @type {Todo[]} */
  todos = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
