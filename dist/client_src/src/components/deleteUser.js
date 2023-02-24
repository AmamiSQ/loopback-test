"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_2 = require("react");
function DeleteUser() {
    const [remove, setRemove] = (0, react_2.useState)("");
    const deleteForm = (0, react_1.useRef)(null);
    const removeUser = async () => {
        //set id to be removed
        const id = deleteForm.current.userID.value;
        //removes a user from the database
        const response = await fetch("http://localhost:3000/users/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(id),
        });
        const data = await response.json();
        console.log(data);
        setRemove("User removed");
    };
    return (<div>
      <div className="boxDelete">
        <form ref={deleteForm} onSubmit={(e) => { e.preventDefault(); removeUser(); }}>
          <label className="boxText">
            User ID:
            <input type="number" className='searchBox' id='userID'/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <h2 className="boxText">{remove}</h2>
      </div>
    </div>);
}
exports.default = DeleteUser;
//# sourceMappingURL=deleteUser.js.map