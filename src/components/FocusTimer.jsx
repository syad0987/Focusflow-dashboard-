// src/components/FocusTimer.jsx
import { useState, useEffect } from "react";

function FocusTimer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);

  const minutesPart = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsPart = String(seconds % 60).padStart(2, "0");

  const toggle = () => setIsRunning((prev) => !prev);
  const reset = () => {
    setIsRunning(false);
    setSeconds(25 * 60);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-44 w-44 rounded-full bg-slate-100 grid place-content-center">
        <div className="h-40 w-40 rounded-full bg-white shadow-inner grid place-content-center">
          <p className="text-3xl font-semibold tabular-nums text-slate-900">
            {minutesPart}:{secondsPart}
          </p>
          <p className="text-xs text-slate-500 mt-1">Focus session</p>
        </div>
        <div className="absolute inset-2 rounded-full border-4 border-emerald-400/60 border-t-emerald-500 animate-[spin_40s_linear_infinite]" />
      </div>

      <div className="flex gap-3">
        <button
          onClick={toggle}
          className="px-6 py-2 rounded-full bg-emerald-500 text-white text-sm font-medium shadow hover:bg-emerald-600"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200"
        >
          Reset
        </button>
      </div>

      <p className="text-xs text-slate-500">
        Tip: Try to complete at least 3 focus sessions today.
      </p>
    </div>
  );
}

export default FocusTimer;
