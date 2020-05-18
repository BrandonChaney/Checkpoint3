import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: []
};

function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(l => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  addList(list) {
    _state.lists.push(list)
  }

  get State() {
    return _state;
  }


  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;


console.log("hey yo from store")
