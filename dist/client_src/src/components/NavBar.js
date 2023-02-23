"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
function NavBar() {
    return (<div>
      <nav className="nav-extended">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Database Search</a>
        <a href="#" data-target="main-menu" className="sidenav-trigger"><i className="fa fa-bars"></i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
    </div>);
}
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map