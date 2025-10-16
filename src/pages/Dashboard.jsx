import HabitTracker from "../components/HabitTracker";
import Sidebar from "../components/SideBar";
import Topbar from "../components/topbar";
import OverviewCards from "../components/OverviewCards";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <Sidebar></Sidebar>
        <div className="dashboard-row">
          <Topbar></Topbar>
          <OverviewCards></OverviewCards>
          <HabitTracker></HabitTracker>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
