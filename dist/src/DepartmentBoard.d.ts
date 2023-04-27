import { LitElement } from "lit";
import BoardMembers from "./BoardMembers";
export declare class DepartmentBoard extends LitElement {
    rkid: number;
    private _apiTask;
    static get scopedElements(): {
        "board-members": typeof BoardMembers;
    };
    render(): import("lit-html").TemplateResult<1>;
}
