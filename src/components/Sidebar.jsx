import { NavLink } from "react-router-dom";
const navItem =
  "flex item-center gap-3 px-4 py-2 rounded-lg text-sm font-medium  ";

function Sidebar() {
  return (
    <aside className="w-60 bg-slate-900 text-slate-100 flex flex-col py-6 px-3 overflow-hidden h-screen">
      <div className="mb-8 px-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          <span className="text-emerald-400">Dashly</span>
        </h1>
        <p className=" text-xs text-slate-300">Focus & habit dashboard</p>
      </div>
      <nav>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-slate-800 text-emerald-400"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <span>🏠</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/focus"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-slate-800 text-emerald-400 "
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <span>⏱️</span>
          <span>Focus Mode</span>
        </NavLink>

        <NavLink
          to="/habits"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-slate-800 text-emerald-400 "
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <span>📅</span>
          <span>Habits</span>
        </NavLink>

        <NavLink
          to="/weekly"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-slate-800 text-emerald-400 "
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <span>📊</span>
          <span>Weekly Progress</span>
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-slate-800 text-emerald-400 "
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <span>✅</span>
          <span>Tasks</span>
        </NavLink>

        <NavLink
          to="/ai-coach"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-slate-800 text-emerald-400 "
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <span>🤖</span>
          <span>AI Coach</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-slate-800 text-emerald-400 "
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <span>⚙️</span>
          <span> Settings</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
