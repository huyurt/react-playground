import React, { useState } from 'react';
import UsersList from "./components/Users/UsersList";
import AddUser from "./components/Users/AddUser";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers(prevUsers => [user, ...prevUsers]);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
