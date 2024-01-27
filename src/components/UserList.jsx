import React from "react";
import Table from "./Table/Table";
import { useEffect, useState } from "react";
import Button from "./Button/Button";

export default function UserList() {
  const [users, setUsers] = useState([]);
  /* const [showAdult, setShowAdult] = useState(false); */

  useEffect(() => {
    fetch("https://mocki.io/v1/a0bd24a9-7d83-4b7f-997d-6193d6a3a726")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const sortById = () => {
    const sortedUsers = [...users].sort((a, b) => a.id - b.id);
    setUsers(sortedUsers);
  };

  const sortByName = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedUsers);
  };

  const sortByDate = () => {
    const sortedUsers = [...users].sort(
      (a, b) => new Date(a.birthday) - new Date(b.birthday)
    );
    setUsers(sortedUsers);
  };

/*   const sortByAdult = event => {
    setShowAdult(event.target.checked);
  };

  const adultUsers = showAdult ? users.filter(user => calculateAge(user.birthday >= 18) : users); */

  return (
    <div>
      <Button
        sortById={sortById}
        sortByName={sortByName}
        sortByDate={sortByDate}
      />
      <Table users={users} />
    </div>
  );
}
