// src/pages/AICoachPage.jsx
import AICoach from "../components/AICoach";

function AICoachPage() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          AI Focus Coach
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Ask for tips on focus, planning your study session, or breaking down
          big tasks.
        </p>
        <AICoach />
      </section>
    </div>
  );
}

export default AICoachPage;
