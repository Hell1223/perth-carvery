export default function Footer() {
  return (
    <footer className="bg-stone-600 text-stone-100 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0 text-center md:text-left">
          {/* Address & Phone */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-yellow-200">Visit Us</h3>
            <p className="text-sm">📍 Stirling Arcade, Stirling, FK8 1AX</p>
            <p className="text-sm mt-1">📞 0141 611 3193</p>
          </div>

          {/* Email & Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-yellow-200">Contact & Hours</h3>
            <p className="text-sm">📧 clearbusinessbyadrian@gmail.com</p>
            <p className="text-sm mt-1">🕐 Open: 1:00 PM – 11:00 PM (7 days a week)</p>
          </div>
        </div>

        <div className="border-t border-stone-500 mt-10 pt-6 text-center text-stone-300 text-sm select-none">
          &copy; {new Date().getFullYear()} Perth Carvery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}