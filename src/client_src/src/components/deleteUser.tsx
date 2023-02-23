import React, {useEffect} from 'react';
import { useState } from 'react';

export default function DeleteUser() {
  interface User {
    id: number;
    firstName: string;
    lastName: string;
}
  const [users, setUsers] = (useState<User[]>([]));
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getUsers = async () => {
      const data = await (
        await fetch("http://localhost:3000/users")
      ).json();
      setUsers(data);
    };
    getUsers();
  }, []);

  const findUser = (id:number) => {
    //if user is found, display user info
    if(users.find(user => user.id === id)){
      const result = (users.find(user => user.id === id));
      setSearch(result!.firstName + " " + result!.lastName);
    }
    else{
      setSearch("User not found");
    }
  };

  return (
    <div>
      <div className="boxDelete">
        <form>
          <label className="boxText">
            Search for user:
            <input
              type="number"
              className='searchBox'
              onChange={(e) => findUser(parseInt(e.target.value))} />
          </label>
        </form>
        <h2 className="boxText">User: {search}</h2>
      </div>
    </div>
  );
}
