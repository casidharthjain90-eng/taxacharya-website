export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Book Consultation",
      desc: "Schedule a consultation through phone, WhatsApp or our website.",
    },
    {
      number: "02",
      title: "Share Documents",
      desc: "Upload or send the required documents securely.",
    },
    {
      number: "03",
      title: "We Process",
      desc: "Our tax experts prepare and review your work carefully.",
    },
    {
      number: "04",
      title: "Receive Report",
      desc: "Get your completed filing, report or registration with support.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">
            How It Works
          </h2>

          <p className="text-gray-600 mt-4">
            Getting professional tax assistance is simple.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <div className="text-3xl font-bold text-blue-700">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold mt-4">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}