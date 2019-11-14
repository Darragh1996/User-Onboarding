import React, { useState } from "react";
import "./App.css";
import FormWithFormik from "./components/Form";
import List from "./components/ListUsers";

export default function App(props) {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <FormWithFormik setUsers={setUsers} users={users} />
      <List users={users} />
    </div>
  );
}
