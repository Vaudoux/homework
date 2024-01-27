  import React from "react";
  import "./Button.css";

  export default function Button({sortById, sortByName, sortByDate}) {

    return (
      <section>
        <button /* className={isActive ? "button active" : "button"} */  onClick={sortById}>Сортировка по "id"</button>
        <button /* className={isActive ? "button active" : "button"} */ onClick={sortByName}>Сортировка по "Имени"</button>
        <button /* className={isActive ? "button active" : "button"} */  onClick={sortByDate}>Сортировка по "Дате рождения"</button>
      </section>
    );
  }
