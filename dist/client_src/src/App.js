"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const addUser_1 = tslib_1.__importDefault(require("./components/addUser"));
const deleteUser_1 = tslib_1.__importDefault(require("./components/deleteUser"));
const NavBar_1 = tslib_1.__importDefault(require("./components/NavBar"));
const searchUser_1 = tslib_1.__importDefault(require("./components/searchUser"));
function App() {
    return (<div>
      <NavBar_1.default />
      <searchUser_1.default />
      <addUser_1.default />
      <deleteUser_1.default />
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map