'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }

    setLoading(false);
  };

  return (
    <main className="bg-white text-gray-900 px-6 py-5 min-h-screen">
      <section className="w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-stone-700">
          Visit Us
        </h1>

        <div className="flex flex-col md:flex-row gap-10 rounded-xl shadow-lg bg-gray-50 p-8 md:p-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-6 text-gray-800">CONTACT US</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-none focus:outline-none focus:ring-1 focus:ring-yellow-600"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded-none focus:outline-none focus:ring-1 focus:ring-yellow-600"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-none focus:outline-none focus:ring-1 focus:ring-yellow-600"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="How can we serve you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-none focus:outline-none focus:ring-1 focus:ring-yellow-600"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gray-700 text-white font-medium uppercase hover:bg-gray-800 transition duration-300 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send'}
                </button>

                {status && (
                  <p className="text-sm text-center mt-2 text-green-600">{status}</p>
                )}
              </form>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">SPECIAL REQUESTS?</h2>
              <p className="text-gray-700">
                Do you have dietary concerns? Questions about an upcoming event? Drop us a
                line, and we'll get back to you soon!
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-stone-500">Perth Carvery</h2>
              <div className="not-italic">
                <p className="text-gray-700">Stirling Arcade, Stirling, FK8 1AX</p>
                <p className="text-gray-700 mt-4">0141 611 3193</p>
                <p className="text-gray-700">
                  <a
                    href="mailto:clearbusinessbyadrian@gmail.com"
                    className="text-stone-500 hover:underline"
                  >
                    clearbusinessbyadrian@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-800">OPENING HOURS</h2>
              <div className="flex items-center text-gray-700">
                <Link href="/opening-hours" className="text-stone-500 hover:underline">
                  Check Status
                </Link>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-20">
          <h2 className="text-4xl font-semibold text-center text-stone-600 mb-8">
            Find Us on the Map
          </h2>
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-md border border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2224.220585650138!2d-3.941974516592539!3d56.11870210457529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488862954a8c8fa1%3A0xf458600251b5a778!2sArcade%2C%20Stirling%20FK8%201AX%2C%20UK!5e0!3m2!1sen!2s!4v1747417001071!5m2!1sen!2s"
              title="Arcade, Stirling"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
