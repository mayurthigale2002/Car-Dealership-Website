const CarFinancing = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">

        <div className="text-center mb-14" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4">Car Financing</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Flexible loan options with low interest rates and quick approvals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {["Easy EMI Plans", "Low Interest Rates", "Instant Approval"].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-gray-400 text-sm">
                Transparent financing solutions customized for your budget.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CarFinancing;
