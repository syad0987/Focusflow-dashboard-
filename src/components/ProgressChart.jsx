// src/components/ProgressChart.jsx
const data = [40, 55, 60, 35, 80, 70, 50]; // minutes per day

function ProgressChart() {
  const max = Math.max(...data, 1);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-7 gap-2 h-40 items-end">
        {data.map((value, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <div
              className="w-6 rounded-full bg-emerald-100"
              style={{ height: `${(value / max) * 100}%` }}
            >
              <div className="w-full h-full rounded-full bg-emerald-500" />
            </div>
            <span className="text-[10px] text-slate-400">
              {["M", "T", "W", "T", "F", "S", "S"][idx]}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500">
        Weekly focus minutes. Aim for at least 60 minutes per day.
      </p>
    </div>
  );
}

export default ProgressChart;
