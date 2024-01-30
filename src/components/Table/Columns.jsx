import React from "react";
import Row from "./Rows";
import { useState } from "react";

export const Columns = [
    { title: "Порядковый номер", value: "id" },
    { title: "Дата рождения", value: "birthday" },
    { title: "Имя", value: "name" },
    { title: "Фамилия", value: "username" },
    { title: "Электронная почта", value: "email" },
    { title: "Номер телефона", value: "phone" },
    { title: "Веб сайт", value: "website" },
];

export default function Table({ users }) {
    const [pointId, setPointId] = useState(null);
    return (
        <table className="table">
        <thead>
            <tr>
            {Columns.map((column) => (
                <th>{column.title}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
            <Row
                key={user.id}
                user={user}
                isPoint={pointId === user.id}
                setPointId={setPointId}
            />
            ))}
        </tbody>
        </table>
    );
}
