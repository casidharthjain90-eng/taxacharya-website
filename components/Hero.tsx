export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <span className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800">
            ⭐ Trusted Chartered Accountant Services
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">

            Income Tax, GST &

            <span className="block text-blue-900">
              Business Compliance
            </span>

            Made Simple.

          </h1>

          <p className="mt-6 text-xl text-slate-600 leading-8">

            Taxacharya provides professional Income Tax Return Filing,
            GST Registration, GST Return Filing, Company Registration,
            MSME Registration, Trademark Registration and Business
            Compliance services across India.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://wa.me/917488211785"
              className="rounded-xl bg-blue-900 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Book Free Consultation
            </a>

            <a
              href="#services"
              className="rounded-xl border border-blue-900 px-8 py-4 font-semibold text-blue-900 transition hover:bg-blue-50"
            >
              Explore Services
            </a>

          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">

            <div>

              <p className="text-4xl font-extrabold text-blue-900">
                1000+
              </p>

              <p className="text-slate-600">
                Happy Clients
              </p>

            </div>

            <div>

              <p className="text-4xl font-extrabold text-blue-900">
                10+
              </p>

              <p className="text-slate-600">
                Professional Services
              </p>

            </div>

            <div>

              <p className="text-4xl font-extrabold text-blue-900">
                PAN
              </p>

              <p className="text-slate-600">
                India Support
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <img
            src="/sidharth.png"
            alt="CA Sidharth Jain"
            className="w-[500px] rounded-3xl border-8 border-white shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}