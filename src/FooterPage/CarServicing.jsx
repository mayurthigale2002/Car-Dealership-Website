const CarServicing = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">

        <div className="text-center mb-14" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4">Car Servicing</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional maintenance and repairs to keep your car in top condition.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Routine Maintenance",
            "Engine Diagnostics",
            "Brake & Suspension",
            "Oil Change",
            "Car Detailing",
            "Genuine Spare Parts",
          ].map((service, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 80}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="font-semibold mb-2">{service}</h3>
              <p className="text-gray-400 text-sm">
                Expert technicians using advanced tools and genuine components.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CarServicing;
