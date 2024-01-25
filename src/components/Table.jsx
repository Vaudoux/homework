import "./Table.css";
import React from "react";

export default function Table({ users }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Порядковый номер</th>
          <th>Дата рождения</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Электронная почта</th>
          <th>Номер телефона</th>
          <th>Веб сайт</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.birthday}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}5</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
