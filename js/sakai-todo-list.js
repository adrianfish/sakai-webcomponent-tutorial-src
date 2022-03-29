import { html, LitElement } from "./assets/lit-element/lit-element.js";

class SakaiTodoList extends LitElement {

  render() {

    return html`
      <div id="title">Sakai Todo List</div>
    `;
  }
}

const tagName = "sakai-todo-list";
!customElements.get(tagName) && customElements.define(tagName, SakaiTodoList);
