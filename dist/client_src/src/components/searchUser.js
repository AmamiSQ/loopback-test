"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_2 = require("react");
function SearchUser() {
    const [users, setUsers] = ((0, react_2.useState)([]));
    const [search, setSearch] = (0, react_2.useState)("");
    (0, react_1.useEffect)(() => {
        const getUsers = async () => {
            const data = await (await fetch("http://localhost:3000/users")).json();
            setUsers(data);
        };
        getUsers();
    }, []);
    const findUser = (id) => {
        //if user is found, display user info
        if (users.find(user => user.id === id)) {
            const result = (users.find(user => user.id === id));
            setSearch(result.firstName + " " + result.lastName);
        }
        else {
            setSearch("User not found");
        }
    };
    return (<div>
      <div className="boxSearch">
        <form>
          <label className="boxText">
            Search for user:
            <input type="number" className='searchBox' onChange={(e) => findUser(parseInt(e.target.value))}/>
          </label>
        </form>
        <h2 className="boxText">User: {search}</h2>
      </div>
    </div>);
}
exports.default = SearchUser;
//# sourceMappingURL=searchUser.js.map