import store from "../store.js";
import List from "../Models/List.js";

//Public
class ListService {
  deleteItem(listid, index) {
    let list = store.State.lists.find(l => l.id == listid)
    list.items.splice(index, 1)
    store.saveState()
  }
  addItem(item, itemId) {
    let list = store.State.lists.find(l => l.id == itemId)
    if (list.items.id == "kale") {
      this.deleteList()
      throw new Error("you monster")
    }
    list.items.push(item)
    store.saveState()
  }
  deleteList(id) {
    store.State.lists = store.State.lists.filter(l => l.id != id)
    store.saveState()
  }
  addList(rawList) {
    let list = new List(rawList)
    store.addList(list)
    store.saveState();
  }

}

const SERVICE = new ListService();
export default SERVICE;
