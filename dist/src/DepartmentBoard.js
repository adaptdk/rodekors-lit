import { __decorate } from "tslib";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Task } from "@lit-labs/task";
import BoardMembers from "./BoardMembers";
let DepartmentBoard = class DepartmentBoard extends LitElement {
    constructor() {
        super(...arguments);
        this.rkid = 0;
        this._apiTask = new Task(this, ([rkid]) => fetch(`https://rk-api.test/public/api/department-board/${rkid}`).then((response) => response.json()), () => [this.rkid]);
    }
    static get scopedElements() {
        return {
            "board-members": BoardMembers,
        };
    }
    render() {
        return html `
      ${this._apiTask.render({
            pending: () => html `Henter data...`,
            complete: (data) => html `<board-members .department=${data.data}></board-members>`,
        })}
    `;
    }
};
__decorate([
    property({ type: Number })
], DepartmentBoard.prototype, "rkid", void 0);
DepartmentBoard = __decorate([
    customElement("department-board")
], DepartmentBoard);
export { DepartmentBoard };
//# sourceMappingURL=DepartmentBoard.js.map