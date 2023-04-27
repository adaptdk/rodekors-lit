import { __decorate } from "tslib";
import { LitElement, html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { msg } from "./localization";
let BoardMembers = class BoardMembers extends LitElement {
    constructor() {
        super(...arguments);
        // Declare observed properties
        this.department = {
            rkid: 0,
            name: "",
            lat: 0,
            lng: 0,
            board: [],
        };
    }
    render() {
        const { board } = this.department;
        if (board.length === 0) {
            return html ` <div>No results.</div> `;
        }
        return html `
      <div class="list">
        ${board.map((member) => html `
            <div class="item">
              <div class="header">${member.positionName}</div>
              <div>${member.name}</div>
              ${member.email
            ? html ` <div class="value">
                    <div class="label">Email</div>
                    <a href="mailto:${member.email}">${member.email}</a>
                  </div>`
            : nothing}
              ${member.phone
            ? html ` <div class="value">
                    <div class="label">${msg("phone")}</div>
                    <a href="tel:${member.phone}">${member.phone}</a>
                  </div>`
            : nothing}
            </div>
          `)}
      </div>
    `;
    }
};
BoardMembers.styles = css `
    a:link {
      color: inherit;
    }
    a:visited {
      color: inherit;
    }
    .list {
      display: flex;
      flex-direction: column;
      max-width: 900px;
      gap: 20px;
      padding: 20px;
      @media (min-width: 550px) {
        display: grid;
        grid-auto-rows: 1fr;
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .item {
      padding: 20px;
      background-color: white;
      border-radius: 5px;
      box-shadow: 8px 8px 27px 0 rgba(0, 0, 0, 0.07);
    }
    .header {
      text-transform: capitalize;
      font-weight: 700;
      margin-bottom: 2px;
    }
    .value {
      margin-top: 10px;
    }
    .label {
      text-transform: capitalize;
      margin-bottom: 2px;
      color: #989598;
    }
  `;
__decorate([
    property()
], BoardMembers.prototype, "department", void 0);
BoardMembers = __decorate([
    customElement("board-members")
], BoardMembers);
export default BoardMembers;
//# sourceMappingURL=BoardMembers.js.map