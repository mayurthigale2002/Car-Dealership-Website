const CarSales = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">

        <div className="text-center mb-14" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4">Car Sales</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover a wide range of new and pre-owned cars designed for every lifestyle and budget.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["New Cars", "Certified Used Cars", "Luxury Vehicles"].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-gray-400 text-sm">
                Premium quality vehicles with verified history, warranty, and best pricing.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CarSales;
