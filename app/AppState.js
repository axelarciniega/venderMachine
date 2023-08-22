import { Animal} from "./models/animal.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"


class ObservableAppState extends EventEmitter {
  page = ''

  animals = [
  
  new Animal('bears','$10','https://images.unsplash.com/photo-1639867061291-996e8c839096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXIlMjBjdWJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'),

  new Animal('pumas','$20','https://images.unsplash.com/photo-1527720175429-214744972b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVtYSUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'),

  new Animal('wolf','$30','https://plus.unsplash.com/premium_photo-1661899053699-f49eb65ca6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29sZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')


]





  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
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
