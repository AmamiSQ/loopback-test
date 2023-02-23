import React from 'react';
import AddUser from './components/addUser';
import DeleteUser from './components/deleteUser';
import NavBar from './components/NavBar';
import SearchUser from './components/searchUser';

function App() {
  return (
    <div>
      <NavBar />
      <SearchUser />
      <AddUser />
      <DeleteUser />
    </div>
  );
}

export default App;
