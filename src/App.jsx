import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox";
import UserList from "./components/UserList";
import { useState, useEffect } from "react";

export default function App() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [users, setUsers] = useState([]);

  const handleSortByName = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });
    setUsers(sortedUsers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <header>
        <img src={logo} alt="#" />
        Домашнее задание
      </header>

      <Button>Сортировка по "id"</Button>
      <Button onClick={handleSortByName}>Сортировка по "Имени"</Button>
      <Button>Сортировка по "Дате рождения"</Button>
      <Checkbox />
      <UserList />
    </div>
  );
}
