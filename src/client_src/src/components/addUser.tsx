import React, {useRef} from 'react';
import { useState } from 'react';

export default function AddUser() {
  interface User {
    id?: number;
    firstName: string;
    lastName: string;
}

  const [add, setAdd] = useState<string>("");
  const userForm = useRef(null);

  const addNew = async (user:User) => {
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

    newUser.firstName = (userForm.current as any).firstName.value; //get first name
    newUser.lastName = (userForm.current as any).lastName.value; //get last name

    //add user to database
    addNew(newUser);
  };

  return (
    <div>
      <div className="boxAdd">
        <form ref={userForm} onSubmit={(e) => { e.preventDefault(); setUser(); }}>
          <label className="boxText">
            First Name:
            <input
              type="text"
              className='searchBox'
              id='firstName'
              />
          </label>
          <label className="boxText">
            Last Name:
            <input
              type="text"
              className='searchBox'
              id='lastName'
              />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2 className="boxText">{add}</h2>
      </div>
    </div>
  );
}
