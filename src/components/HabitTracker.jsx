const HabitTracker = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-header">
        <b>Habits</b>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <input type="checkbox" style={{ marginRight: "10px" }} />
          Retting Walk
        </li>
        <li className="list-group-item">
          <input type="checkbox" style={{ marginRight: "10px" }} /> Read a book{" "}
        </li>
        <li className="list-group-item">
          <input type="checkbox" style={{ marginRight: "10px" }} />
          Shep of 10 pm
        </li>
      </ul>
    </div>
  );
};
export default HabitTracker;
