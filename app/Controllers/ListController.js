import ListService from "../Services/ListService.js";
import store from "../store.js";

function _drawLists() {
  let lists = store.State.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    _drawLists();
  }
  addList(event) {
    event.preventDefault()
    let formData = event.target
    let rawList = {
      title: formData.title.value,
      color: formData.color.value
    }
    formData.reset();
    ListService.addList(rawList)
    _drawLists();
  }
  deleteList(id) {
    if (window.confirm("Are you serious? This action cannot be undone!")) {
      ListService.deleteList(id)
      _drawLists()
    }
  }

  addItem(event, itemId) {
    event.preventDefault()
    let item = event.target.item.value
    ListService.addItem(item, itemId)
    _drawLists()
  }
  deleteItem(id, index) {
    if (window.confirm("Are you serious? This action cannot be undone!")) {
      ListService.deleteItem(id, index)
      _drawLists()
    }

  }
}

