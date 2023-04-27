import { LitElement } from "lit";
import { Department } from "./types";
export default class BoardMembers extends LitElement {
    department: Department;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "board-members": BoardMembers;
    }
}
