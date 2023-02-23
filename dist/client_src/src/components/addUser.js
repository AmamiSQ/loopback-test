"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_2 = require("react");
function AddUser() {
    const [users, setUsers] = ((0, react_2.useState)([]));
    const [add, setAdd] = (0, react_2.useState)("");
    (0, react_1.useEffect)(() => {
        const getUsers = async () => {
            const data = await (await fetch("http://localhost:3000/users")).json();
            setUsers(data);
        };
        getUsers();
    }, []);
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
    };
    const setUser = (first, last) => {
        //adds a user to the database with id, first name and last name
        const newUser = { id: 0, firstName: "", lastName: "" }; //create new user
        //set id
        if (users.length === 0) {
            newUser.id = 1;
        }
        else {
            newUser.id = users[users.length - 1].id + 1;
        }
        let firstString = first.toString();
        let lastString = last.toString();
        //set first name
        newUser.firstName = firstString;
        //set last name
        newUser.lastName = lastString;
        //add user to database
        addNew(newUser);
        setAdd("User added");
    };
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    return (<div>
      <div className="boxAdd">
        <form onSubmit={(e) => { e.preventDefault(); setUser(firstName, lastName); }}>
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