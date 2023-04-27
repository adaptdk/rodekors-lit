import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Task } from "@lit-labs/task";

import BoardMembers from "./BoardMembers";

@customElement("department-board")
export class DepartmentBoard extends LitElement {
  @property({ type: Number })
  rkid = 0;

  private _apiTask = new Task(
    this,
    ([rkid]) =>
      fetch(`https://rk-api.test/public/api/department-board/${rkid}`).then(
        (response) => response.json()
      ),
    () => [this.rkid]
  );

  static get scopedElements() {
    return {
      "board-members": BoardMembers,
    };
  }

  render() {
    return html`
      ${this._apiTask.render({
        pending: () => html`Henter data...`,
        complete: (data) =>
          html`<board-members .department=${data.data}></board-members>`,
      })}
    `;
  }
}
