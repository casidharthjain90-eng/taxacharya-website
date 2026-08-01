import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">

        {/* Brand */}

        <div>

          <div className="flex items-center gap-3">

            <img
              src="/logo.jpg"
              alt="Taxacharya"
              className="h-12 w-12 rounded-full"
            />

            <div>

              <h2 className="text-2xl font-bold text-red-500">
                Taxacharya
              </h2>

              <p className="text-sm text-gray-400">
                Tax • GST • Compliance
              </p>

            </div>

          </div>

          <p className="mt-6 text-gray-400 leading-7">

            Professional Chartered Accountant services including
            Income Tax, GST, Company Registration, MSME Registration,
            Trademark Registration and Business Compliance across India.

          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="mb-5 text-xl font-bold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Services */}

        <div>

          <h3 className="mb-5 text-xl font-bold">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link
                href="/income-tax-return-filing"
                className="hover:text-white"
              >
                Income Tax Return Filing
              </Link>
            </li>

            <li>
              <Link
                href="/gst-registration"
                className="hover:text-white"
              >
                GST Registration
              </Link>
            </li>

            <li>GST Return Filing</li>
            <li>Company Registration</li>
            <li>Trademark Registration</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-5 text-xl font-bold">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">

            <p>
              📞{" "}
              <a
                href="tel:+917488211785"
                className="hover:text-white"
              >
                +91 7488211785
              </a>
            </p>

            <p>
              ✉{" "}
              <a
                href="mailto:admin@taxacharya.com"
                className="hover:text-white"
              >
                admin@taxacharya.com
              </a>
            </p>

            <p>
              🇮🇳 Serving Clients Across India
            </p>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 Taxacharya. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link href="/" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/" className="hover:text-white">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}