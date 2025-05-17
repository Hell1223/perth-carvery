export default function SpecialEvents() {
  const events = [
    {
      name: "Sunday Roast",
      desc: "Join us every Sunday for a traditional roast with all the trimmings.",
    },
    {
      name: "Quiz Night",
      desc: "Test your knowledge and win prizes every Wednesday evening.",
    },
    {
      name: "Live Music",
      desc: "Enjoy performances by local musicians every Friday night.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-stone-600 mb-14">
        Specials & Events
      </h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 text-center">
        {events.map((event, i) => (
          <div
            key={i}
            className="bg-stone-100 p-8 rounded-xl shadow-md hover:shadow-stone-300 transition-shadow duration-300"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-stone-700">
              {event.name}
            </h3>
            <p className="mt-3 text-base sm:text-lg lg:text-xl text-stone-500 leading-relaxed">
              {event.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
