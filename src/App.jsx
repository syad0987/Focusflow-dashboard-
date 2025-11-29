// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Topbar from "./components/topbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Focus_mode from "./pages/Focus_mode";
import Habit_tracker from "./pages/Habit_tracker";
import AICoachPage from "./pages/AICoachPage";
import Setting from "./pages/Setting";
import Task from "./pages/Task";
import Weekly_progress from "./pages/weekly_progress";

function App() {
  return (
    <BrowserRouter>
      <main className="flex-1 overflow-y-auto p-6 bg-slate-400 w-full ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/focus" element={<Focus_mode />} />
          <Route path="/habits" element={<Habit_tracker />} />
          <Route path="/weekly" element={<Weekly_progress />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/ai-coach" element={<AICoachPage />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
