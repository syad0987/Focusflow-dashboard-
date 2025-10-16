const OverviewCards = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            <b>Overview</b>
          </th>

          <th scope="col">
            <b>Tasks</b>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" style={{ marginRight: "10px" }} />
            Mark
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" style={{ marginRight: "10px" }} />
            Jacob
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" style={{ marginRight: "10px" }} />
            John
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default OverviewCards;
