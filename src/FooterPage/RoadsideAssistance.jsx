const RoadsideAssistance = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">

        <div className="text-center mb-14" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4">Roadside Assistance</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            24/7 emergency support whenever and wherever you need help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "24/7 Emergency Help",
            "Flat Tyre Support",
            "Battery Jump Start",
            "Fuel Delivery",
          ].map((help, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition"
            >
              <h3 className="font-semibold mb-2">{help}</h3>
              <p className="text-gray-400 text-sm">
                Quick response with trained professionals.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoadsideAssistance;
