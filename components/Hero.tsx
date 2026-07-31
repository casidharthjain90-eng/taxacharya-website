export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-40 pb-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <img
          src="/logo.jpg"
          alt="Taxacharya"
          className="w-24 mb-6 rounded-full"
        />

        <h1 className="text-6xl font-bold text-blue-900 leading-tight">
          Simplifying Tax.
          <br />
          Empowering Growth.
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Professional Income Tax, GST, Company Registration, TDS &
          Compliance Services across India.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://wa.me/917488211785"
            className="bg-blue-900 text-white px-8 py-4 rounded-xl"
          >
            Book Consultation
          </a>

          <a
            href="#services"
            className="bg-yellow-500 text-white px-8 py-4 rounded-xl"
          >
            Explore Services
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="/sidharth.png"
          alt="CA Sidharth Jain"
          className="rounded-3xl shadow-2xl w-[450px]"
        />
      </div>
    </section>
  );
}