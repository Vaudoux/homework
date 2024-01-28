import "./Checkbox.css";

export default function Checkbox(showAdult, sortByAdult) {
  return (
    <div className="checkbox">
      <span>Учитывать только совершеннолетних </span>
      <input
        type="checkbox"
        checked={showAdult} onChange={sortByAdult} className="checkbox"
      />
    </div>
  );
}
