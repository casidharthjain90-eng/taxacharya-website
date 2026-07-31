export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>
            <h4 className="text-blue-700 font-semibold uppercase tracking-wide">
              About Taxacharya
            </h4>

            <h2 className="text-4xl font-bold mt-3 text-gray-900">
              Trusted Tax & Compliance Experts Across India
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Taxacharya is a professional tax consultancy helping
              individuals, startups, professionals and businesses with
              Income Tax, GST, TDS, Company Registration and financial
              compliance.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-8">
              Our mission is to simplify taxation and help businesses stay
              compliant while focusing on growth.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-blue-700">5000+</h3>
                <p className="text-gray-600">ITR Filed</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-700">1200+</h3>
                <p className="text-gray-600">Business Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-700">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-700">98%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div>
            <img
              src="/sidharth.png"
              alt="Tax Consultant"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}