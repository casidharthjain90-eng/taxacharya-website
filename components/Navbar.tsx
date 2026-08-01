import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <img
            src="/logo.jpg"
            alt="Taxacharya"
            className="h-12 w-12 rounded-full shadow"
          />

          <div>

            <h2 className="text-xl font-bold text-red-700">

              Taxacharya

            </h2>

            <p className="text-xs text-gray-500">

              Income Tax • GST • Compliance

            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 font-medium text-gray-700 lg:flex">

          <Link href="/" className="hover:text-red-700">
            Home
          </Link>

          <Link href="/income-tax-return-filing" className="hover:text-red-700">
            ITR Filing
          </Link>

          <Link href="/gst-registration" className="hover:text-red-700">
            GST Registration
          </Link>

          <a href="#contact" className="hover:text-red-700">
            Contact
          </a>

        </nav>

        {/* CTA */}

        <a
          href="https://wa.me/917488211785"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-red-700 px-5 py-3 font-semibold text-white transition hover:bg-red-800"
        >
          Free Consultation
        </a>

      </div>
    </header>
  );
}