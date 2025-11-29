// src/components/OverviewCards.jsx
const cards = [
  { title: "Today’s Focus", value: "2h 15m", badge: "+35m vs yesterday" },
  { title: "Habits Done", value: "4 / 6", badge: "On track" },
  { title: "Streak", value: "7 days", badge: "Keep going" },
  { title: "Tasks Pending", value: "3", badge: "Finish before 10 PM" },
];

function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col gap-2"
        >
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            {card.title}
          </p>
          <p className="text-2xl font-semibold text-slate-900">{card.value}</p>
          <p className="text-xs text-emerald-600">{card.badge}</p>
        </div>
      ))}
    </div>
  );
}

export default OverviewCards;
