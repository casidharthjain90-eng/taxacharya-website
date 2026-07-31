export default function FAQ() {
  const faqs = [
    {
      question: "How long does Income Tax Return filing take?",
      answer:
        "Most Income Tax Returns are filed within 24 hours after receiving complete documents.",
    },
    {
      question: "Do I need to visit your office?",
      answer:
        "No. We provide completely online consultation and filing services across India.",
    },
    {
      question: "Can you help with GST Registration?",
      answer:
        "Yes. We provide GST Registration, Return Filing and complete GST compliance services.",
    },
    {
      question: "Which documents are required?",
      answer:
        "Documents depend on the service. Generally PAN, Aadhaar, bank details and supporting documents are sufficient.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Answers to the questions we receive most often.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}