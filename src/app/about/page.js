export default function AboutUsPage() {
  return (
    <main className="text-stone-600 px-6 py-16 min-h-screen">
      <section className="w-[90%] mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-stone-600 mb-8">
          About Us
        </h1>

        {/* Our Story */}
        <div className="bg-stone-50 p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-stone-600 mb-3">Our Story</h2>
          <p className="text-lg leading-relaxed text-stone-500">
            Welcome to Perth Carvery, where food, passion, and community come together.
            Our story began with a simple idea: to share delicious, homemade-style cuisine
            with our neighbors and friends.
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-stone-50 p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-stone-600 mb-3">Our Vision</h2>
          <p className="text-lg leading-relaxed text-stone-500">
            We aim to create a warm and inviting space where everyone feels at home.
            Our chefs are dedicated to crafting dishes that not only taste amazing but
            also use only the freshest ingredients, sourced locally whenever possible.
          </p>
        </div>

        {/* Our Values */}
        <div className="bg-stone-50 p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-stone-600 mb-3">Our Values</h2>
          <ul className="list-disc list-inside text-lg space-y-2 leading-relaxed text-stone-500">
            <li><strong>Quality:</strong> We're committed to serving only the best.</li>
            <li><strong>Community:</strong> We believe in supporting local businesses and events.</li>
            <li><strong>Hospitality:</strong> We strive to make every guest feel welcome and valued.</li>
          </ul>
        </div>

        {/* Our History */}
        <div className="bg-stone-50 p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-stone-600 mb-3">Our History</h2>
          <p className="text-lg leading-relaxed text-stone-500">
            From our humble beginnings to our current location, we’ve been on a journey to bring you
            the finest in British cuisine. Learn about our growth and dedication over the years.
          </p>
        </div>

        {/* Awards */}
        <div className="bg-stone-50 p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-stone-600 mb-3">Awards & Recognition</h2>
          <p className="text-lg leading-relaxed text-stone-500">
            We're proud to have received recognition for our commitment to quality and customer satisfaction.
            [Insert any real or placeholder awards here.]
          </p>
        </div>

        {/* Our Team */}
        <div className="bg-stone-50 p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-stone-600 mb-3">Our Team</h2>
          <p className="text-lg leading-relaxed text-stone-500">
            Meet our talented team of chefs, servers, and managers who work together to
            bring you an exceptional dining experience every single day.
          </p>
        </div>

        {/* /Add Images of Staff and Restaurant */}

        {/* Contact Prompt */}
        <div className="text-center mt-16">
          <p className="text-lg text-stone-500">Want to learn more or share your experience with us?</p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-2 bg-stone-600 text-white font-semibold rounded hover:bg-stone-500 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
