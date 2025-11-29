// src/pages/weekly_progress.jsx
import ProgressChart from "../components/ProgressChart";
import HabitTracker from "../components/HabitTracker";

function Weekly_progress() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          Weekly Focus Minutes
        </h3>
        <ProgressChart />
      </section>

      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          Habit Consistency
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          See how your daily habits support your weekly goals.
        </p>
        <HabitTracker />
      </section>
    </div>
  );
}

export default Weekly_progress;
