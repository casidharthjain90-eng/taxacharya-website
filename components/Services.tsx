import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Income Tax Return Filing",
      icon: "💰",
      desc: "ITR filing for salaried individuals, professionals and businesses.",
      href: "/income-tax-return-filing",
    },
    {
      title: "GST Registration",
      icon: "📄",
      desc: "Fast GST Registration with complete documentation support.",
      href: "/gst-registration",
    },
    {
      title: "GST Return Filing",
      icon: "🧾",
      desc: "Monthly, Quarterly and Annual GST Return Filing.",
      href: "/",
    },
    {
      title: "Company Registration",
      icon: "🏢",
      desc: "Private Limited, LLP, OPC and Startup Registration.",
      href: "/",
    },
    {
      title: "Trademark Registration",
      icon: "🛡️",
      desc: "Protect your brand with Trademark Registration.",
      href: "/",
    },
    {
      title: "MSME Registration",
      icon: "📈",
      desc: "Get MSME/Udyam Registration with expert assistance.",
      href: "/",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-red-700">
            Our Professional Services
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            End-to-end Tax, GST and Business Compliance solutions.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
            >
              <div className="group h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl">

                <div className="text-5xl">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {service.desc}
                </p>

                <div className="mt-8 font-semibold text-red-700 group-hover:translate-x-1 transition">
                  Learn More →
                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}