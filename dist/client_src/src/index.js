"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const client_1 = tslib_1.__importDefault(require("react-dom/client"));
require("./style.css");
const App_1 = tslib_1.__importDefault(require("./App"));
const root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>);
//# sourceMappingURL=index.js.map