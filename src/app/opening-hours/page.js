export default function OpeningHoursPage() {
  const todayIndex = new Date().getDay(); // Sunday = 0, Monday = 1, etc.
  const days = [
    { day: "Monday", time: "11:00 AM – 10:00 PM" },
    { day: "Tuesday", time: "11:00 AM – 10:00 PM" },
    { day: "Wednesday", time: "11:00 AM – 10:00 PM" },
    { day: "Thursday", time: "11:00 AM – 10:00 PM" },
    { day: "Friday", time: "11:00 AM – 11:00 PM" },
    { day: "Saturday", time: "11:00 AM – 11:00 PM" },
    { day: "Sunday", time: "10:00 AM – 9:00 PM" },
  ];

  // Adjust todayIndex to match array index (0 = Monday)
  const today = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <main className="bg-white w-[100%] text-gray-900 px-4 sm:px-6 lg:px-12 py-5 min-h-screen flex items-center">
      <section className="max-w-3xl mx-auto w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-stone-600 tracking-wide">
          ⏰ Opening Hours
        </h1>
        <p className="text-lg sm:text-xl text-stone-500 mb-12">
          We’re open 7 days a week to serve you fresh, delicious meals!
        </p>

        <div className="bg-stone-100 p-10 rounded-2xl shadow-lg border border-stone-300 overflow-x-auto">
          <ul className="divide-y divide-stone-200 text-left text-lg font-semibold max-w-md mx-auto">
            {days.map(({ day, time }, index) => (
              <li
                key={day}
                className={`flex justify-between py-4 px-4 rounded-lg transition-colors duration-300 cursor-default ${
                  index === today
                    ? "bg-stone-300 font-extrabold text-stone-900"
                    : "hover:bg-stone-200"
                }`}
              >
                <span className="text-stone-600">{day}</span>
                <span className="text-stone-800">{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
