export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-700">
            Contact Us
          </h2>

          <p className="text-gray-600 mt-3">
            We'd love to help you with your tax and compliance needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="bg-slate-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-2">📞 Phone</h3>
              <p>+91 7488211785</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-2">✉️ Email</h3>
              <p>admin@taxacharya.com</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-2">💬 WhatsApp</h3>

              <a
                href="https://wa.me/917488211785"
                target="_blank"
                className="text-green-600 font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

          {/* Right Side */}

          <form className="bg-slate-50 p-8 rounded-xl shadow space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border rounded-lg p-3"
            />

            <button
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg w-full"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}