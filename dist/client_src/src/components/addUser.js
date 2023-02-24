"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_2 = require("react");
function AddUser() {
    const [add, setAdd] = (0, react_2.useState)("");
    const userForm = (0, react_1.useRef)(null);
    const addNew = async (user) => {
        //adds a user to the database
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        console.log(data);
        setAdd("User added");
    };
    const setUser = () => {
        //adds a user to the database with id, first name and last name
        const newUser = { firstName: "", lastName: "" }; //create new user
        newUser.firstName = userForm.current.firstName.value; //get first name
        newUser.lastName = userForm.current.lastName.value; //get last name
        //add user to database
        addNew(newUser);
    };
    return (<div>
      <div className="boxAdd">
        <form ref={userForm} onSubmit={(e) => { e.preventDefault(); setUser(); }}>
          <label className="boxText">
            First Name:
            <input type="text" className='searchBox' id='firstName'/>
          </label>
          <label className="boxText">
            Last Name:
            <input type="text" className='searchBox' id='lastName'/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <h2 className="boxText">{add}</h2>
      </div>
    </div>);
}
exports.default = AddUser;
//# sourceMappingURL=addUser.js.map