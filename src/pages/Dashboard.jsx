import OverviewCards from "../components/OverviewCards";
import FocusTimer from "../components/FocusTimer";
import HabitTracker from "../components/HabitTracker";
import ProgressChart from "../components/ProgressChart";
import AICoach from "../components/AICoach";
import Layout from "./Layout";
// import TasksPage from "./Task";
const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Row 1: overview cards */}
        <section>
          <OverviewCards />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <h3 className="text-sm font-semibold text-slate-800 mb-3">
              Focus Timer
            </h3>
            <FocusTimer />
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <h3 className="text-sm font-semibold text-slate-800 mb-3">
              Weekly Focus Minutes
            </h3>
            <ProgressChart />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <h3 className="text-sm font-semibold text-slate-800 mb-3">
              Today&apos;s Habits
            </h3>
            <HabitTracker />
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <h3 className="text-sm font-semibold text-slate-800 mb-3">
              AI Coach
            </h3>
            <AICoach />
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default Dashboard;
