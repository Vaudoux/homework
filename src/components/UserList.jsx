import React from "react";
import Table from "./Table/Table";
import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";

const fetching = async () => {
  return await fetch(
    "https://mocki.io/v1/a0bd24a9-7d83-4b7f-997d-6193d6a3a726"
  ).then((response) => response.json());
};

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [showAdult, setShowAdult] = useState(false);

  const sortByAdult = (data) => {
    const sortedUsers = data.filter(
      (user) =>
        new Date().getFullYear() - new Date(user.birthday).getFullYear() >= 18
    );
    setUsers(sortedUsers);
  };

  const onChange = () => {
    setShowAdult(!showAdult);
  };

  useEffect(() => {
    fetching().then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetching().then((data) => {
      if (showAdult) {
        sortByAdult(data);
      } else {
        setUsers(data);
      }
    });
  }, [showAdult]);

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
  const sortByDate = () => {
    const sortedUsers = [...users].sort(
      (a, b) => new Date(a.birthday) - new Date(b.birthday)
    );
    const isSortedDescending =
      JSON.stringify(users) === JSON.stringify(sortedUsers);
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
      <Checkbox sortByAdult={onChange} showAdult={showAdult} />
      <Table users={users} />
    </div>
  );
}
