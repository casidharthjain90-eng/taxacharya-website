export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            Taxacharya
          </h2>

          <p className="mt-4 text-gray-300">
            Professional Income Tax, GST, TDS and Compliance Services
            across India.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Income Tax Return</li>
            <li>GST Registration</li>
            <li>GST Return</li>
            <li>Company Registration</li>
            <li>TDS Filing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Contact
          </h3>

          <p className="text-gray-300">
            📞 +91 7488211785
          </p>

          <p className="text-gray-300 mt-2">
            ✉ admin@taxacharya.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © 2026 Taxacharya. All Rights Reserved.
      </div>
    </footer>
  );
}