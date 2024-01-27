import "./Checkbox.css";

export default function Checkbox() {
  return (
    <>
      <span>Учитывать только совершеннолетних </span>
      <input
        type="checkbox"
        /* checked={showAdult} onChange={sortByAdult} */ className="checkbox"
      />
    </>
  );
}
