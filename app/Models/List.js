import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.title = data.title;
    this.items = data.items || []
    this.color = data.color
  }

  get Template() {
    return /*html*/`
    <div class="col-md-4 col-12 mt-5 ">
    <div class="card shadow">
      <div class="card-top text-center text-light d-flex flex-column" style="background-color:${this.color}">
        <i onclick="app.listController.deleteList('${this.id}')" class="fas fa-times text-dark align-self-end action align-self-end pr-2 pt-2" aria-hidden="true"></i>
        <h4>${this.title} </h4>
      </div>
      <div class="card-body">
        <ul class="card-text bullet-square row">
          ${this.ItemsTemplate}
        </ul>
      </div>
      <form class="input-group mb-3 px-3" onsubmit="app.listController.addItem(event, '${this.id}')">
        <input type="text" class="form-control" id="item" placeholder="Add Task..."required>
        <div class="input-group-append">
        <button type="submit" class="btn btn-outline-success ml-1"><i
        class="fas fa-plus "></i></button>
        </div>
      </form>
    </div>
  </div>`
  }

  get ItemsTemplate() {
    let template = ""
    this.items.forEach((item, index) => {
      template += /*html*/`
          <li class="col-6">${item} </li> <i class="fas fa-times text-light action text-center pointer col-1 offset-3" 
          onclick= "app.listController.deleteItem('${this.id}', ${index})"
                aria-hidden="true"></i>`
    })
    return template;
  }
}
