export default function MenuHighlights() {
  const items = [
    {
      title: "Fish and Chips",
      description: "Fresh cod in crispy batter with chunky chips and mushy peas.",
    },
    {
      title: "Roast Beef Sunday Lunch",
      description: "Slow-cooked roast beef with vegetables, Yorkshire pudding, and gravy.",
    },
    {
      title: "Full English Breakfast",
      description: "Bacon, sausages, eggs, grilled tomatoes, mushrooms, and toast.",
    },
    {
      title: "Vegetarian Options",
      description: "Stuffed mushrooms, veggie curry, and quiche of the day.",
    },
  ];

  return (
    <section className="bg-stone-100 py-20 px-6">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-stone-600 mb-12">
        Menu Highlights
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg p-8 rounded-xl hover:shadow-stone-300 transition-shadow duration-300"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-stone-700">
              {item.title}
            </h3>
            <p className="mt-3 text-base sm:text-lg lg:text-xl text-stone-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
