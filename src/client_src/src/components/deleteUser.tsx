import React, {useRef} from 'react';
import { useState } from 'react';

export default function DeleteUser() {
  const [remove, setRemove] = useState<string>("");
  const deleteForm = useRef(null);

  const removeUser = async () => {
    //set id to be removed
    const id = (deleteForm.current as any).userID.value;

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

  return (
    <div>
      <div className="boxDelete">
        <form ref={deleteForm} onSubmit={(e) => { e.preventDefault(); removeUser(); }}>
          <label className="boxText">
            User ID:
            <input
              type="number"
              className='searchBox'
              id='userID'
              />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2 className="boxText">{remove}</h2>
      </div>
    </div>
  );
}
