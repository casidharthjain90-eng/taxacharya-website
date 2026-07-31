export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      profession: "Business Owner",
      review:
        "Taxacharya handled my GST and Income Tax filing professionally. The entire process was smooth and hassle-free.",
    },
    {
      name: "Priya Verma",
      profession: "Salaried Professional",
      review:
        "Excellent service! My ITR was filed quickly and all my doubts were explained patiently.",
    },
    {
      name: "Amit Kumar",
      profession: "Startup Founder",
      review:
        "From company registration to GST compliance, everything was completed on time. Highly recommended.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-700">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-4">
            Trusted by individuals, professionals and businesses across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-7 italic">
                "{item.review}"
              </p>

              <div className="mt-6 border-t pt-4">
                <h4 className="font-bold text-xl">{item.name}</h4>
                <p className="text-blue-600">{item.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}