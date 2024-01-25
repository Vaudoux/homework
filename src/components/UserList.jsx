import React from "react";
import Table from "./Table";
import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    fetch("https://mocki.io/v1/a0bd24a9-7d83-4b7f-997d-6193d6a3a726")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <Table users={users} />
    </div>
  );
}
