// src/pages/Focus_mode.jsx
import FocusTimer from "../components/FocusTimer";
import ProgressChart from "../components/ProgressChart";

function Focus_mode() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col lg:flex-row gap-6 items-center">
        <div className="flex-1 flex justify-center">
          <FocusTimer />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-slate-800 mb-3">
            Today&apos;s Focus Stats
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Track how much deep work you completed during each session.
          </p>
          <ProgressChart />
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-2">
          Focus tips
        </h3>
        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
          <li>Keep your phone away during focus sessions.</li>
          <li>Write down the exact task before you start the timer.</li>
          <li>Take a 5 minute break after each 25 minute block.</li>
        </ul>
      </section>
    </div>
  );
}

export default Focus_mode;
