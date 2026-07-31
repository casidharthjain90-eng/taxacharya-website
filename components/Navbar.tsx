export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Taxacharya"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h2 className="text-xl font-bold text-blue-900">
              Taxacharya
            </h2>

            <p className="text-xs text-gray-500">
              Tax • GST • Compliance
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-blue-700">Home</a>
          <a href="#services" className="hover:text-blue-700">Services</a>
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#blog" className="hover:text-blue-700">Blog</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </nav>

        <a
          href="https://wa.me/917488211785"
          target="_blank"
          className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}