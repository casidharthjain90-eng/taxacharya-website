export default function Stats() {

  const stats = [
    {
      number: "5000+",
      title: "Income Tax Returns"
    },
    {
      number: "1200+",
      title: "Business Clients"
    },
    {
      number: "98%",
      title: "Client Satisfaction"
    },
    {
      number: "10+",
      title: "Years Experience"
    }
  ];

  return (

    <section className="bg-blue-900 text-white py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">

        {stats.map((item,index)=>(

          <div
            key={index}
            className="text-center"
          >

            <h2 className="text-5xl font-bold text-yellow-400">
              {item.number}
            </h2>

            <p className="mt-3 text-lg">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}