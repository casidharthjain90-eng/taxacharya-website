export default function Services() {

  const services = [
    {
      title: "Income Tax Return",
      icon: "💰",
      desc: "ITR Filing for Individuals & Businesses"
    },
    {
      title: "GST Services",
      icon: "📄",
      desc: "Registration, Returns & Compliance"
    },
    {
      title: "Company Registration",
      icon: "🏢",
      desc: "Private Limited, LLP & OPC"
    },
    {
      title: "Accounting",
      icon: "📊",
      desc: "Bookkeeping & Financial Statements"
    },
    {
      title: "TDS Compliance",
      icon: "🧾",
      desc: "Quarterly Returns & Certificates"
    },
    {
      title: "Tax Planning",
      icon: "📈",
      desc: "Personal & Business Tax Planning"
    }
  ];

  return (

    <section
      id="services"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">

          Our Services

        </h2>

        <p className="text-center mt-4 text-gray-500">

          Complete Tax & Compliance Solutions

        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {services.map((service,index)=>(

            <div
              key={index}
              className="rounded-2xl border p-8 hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div className="text-5xl">

                {service.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {service.title}

              </h3>

              <p className="mt-4 text-gray-500">

                {service.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}