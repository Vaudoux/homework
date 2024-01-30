import React, { useCallback } from "react";
import { Columns } from "./Columns";
import "./Row.css";

export default function Row({ user, isPoint, setPointId }) {
  const onClick = useCallback(() => {
    setPointId((prev) => {
      if (prev === user.id) {
        return null;
      }
      return user.id;
    });
  }, [user.id, setPointId]);

  return (
    <tr className={isPoint ? "pointed" : ""} onClick={onClick}>
      {Columns.map((col) => (
        <td>{user[col.value]}</td>
      ))}
    </tr>
  );
}
