import "./Checkbox.css";

export default function Checkbox({ showAdult, sortByAdult }) {
  console.log(showAdult);
  return (
    <div className="checkbox">
      <span>Учитывать только совершеннолетних </span>
      <input
        type="checkbox"
        checked={showAdult}
        onChange={sortByAdult}
        className="checkbox"
      />
    </div>
  );
}
