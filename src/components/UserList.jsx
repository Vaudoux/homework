import React from "react";
import Table from "./Table/Table";
import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";

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
    const isAscending = JSON.stringify(users) === JSON.stringify(sortedUsers);
    if (isAscending) {
      sortedUsers.reverse();
    }
    setUsers(sortedUsers);
  };
  const sortByName = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    const isSortedDescending =
      JSON.stringify(users) === JSON.stringify(sortedUsers);
    if (isSortedDescending) {
      sortedUsers.reverse();
    }
    setUsers(sortedUsers);
  };
  /* const sortByDate = () => {
    const sortedUsers = [...users].sort(
      (a, b) => new Date(a.birthday) - new Date(b.birthday)
    );
    setUsers(sortedUsers);
  }; */
  const sortByDate = () => {
    const sortedUsers = [...users].sort(
      (a, b) => new Date(a.birthday) - new Date(b.birthday)
    );
  
    // Проверяем, отсортированы ли пользователи в обратном порядке
    const isSortedDescending = JSON.stringify(users) === JSON.stringify(sortedUsers);
  
    // Если пользователи уже отсортированы в обратном порядке, то сортируем их в прямом порядке
    if (isSortedDescending) {
      sortedUsers.reverse();
    }
  
    setUsers(sortedUsers);
  };
  
  return (
    <div>
      <Button
        sortById={sortById}
        sortByName={sortByName}
        sortByDate={sortByDate}
      />
      <Checkbox /* sortByAdult={sortByAdult} */ />
      <Table users={users} />
    </div>
  );
}
