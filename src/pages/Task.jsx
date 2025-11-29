// src/pages/Task.jsx
function Task() {
  const tasks = [
    { id: 1, title: "Finish React assignment", time: "Today • 9 PM" },
    { id: 2, title: "Solve 3 DSA questions", time: "Today • 11 PM" },
    { id: 3, title: "Revise Tailwind notes", time: "Tomorrow • 8 AM" },
  ];

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">Tasks</h3>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2"
            >
              <div>
                <p className="text-sm text-slate-800">{task.title}</p>
                <p className="text-[11px] text-slate-500">{task.time}</p>
              </div>
              <button className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs hover:bg-emerald-600">
                Mark done
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Task;
