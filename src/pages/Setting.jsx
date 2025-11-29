// src/pages/Setting.jsx
function Setting() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          Profile & Preferences
        </h3>

        <div className="space-y-4 text-sm text-slate-700">
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <label className="text-xs text-slate-500">Name</label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                defaultValue="Sudha"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500">
                Focus session length (minutes)
              </label>
              <input
                type="number"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                defaultValue={25}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="sound"
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              defaultChecked
            />
            <label htmlFor="sound" className="text-xs text-slate-600">
              Play sound when focus session ends
            </label>
          </div>

          <button className="mt-2 px-4 py-2 rounded-lg bg-emerald-500 text-white text-xs font-medium hover:bg-emerald-600">
            Save changes
          </button>
        </div>
      </section>
    </div>
  );
}

export default Setting;
