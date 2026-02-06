const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Cars
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our vehicles are designed with cutting-edge technology, premium
            comfort, and top-class safety to deliver an unmatched driving
            experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Feature Card */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            data-aos="zoom-in"
          >
            <h3 className="text-xl font-semibold mb-2">High Performance</h3>
            <p className="text-gray-600 mb-3">
              Engineered for speed and control with powerful acceleration and
              responsive handling.
            </p>
            <span className="text-sm text-red-500 font-medium">
              Turbocharged Engines
            </span>
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-semibold mb-2">Luxury Interior</h3>
            <p className="text-gray-600 mb-3">
              Premium leather seats, ambient lighting, and advanced infotainment
              systems.
            </p>
            <span className="text-sm text-red-500 font-medium">
              Comfort Redefined
            </span>
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold mb-2">Advanced Safety</h3>
            <p className="text-gray-600 mb-3">
              Multiple airbags, ABS, traction control, and smart driver-assist
              features.
            </p>
            <span className="text-sm text-red-500 font-medium">
              5-Star Safety Rating
            </span>
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold mb-2">Smart Technology</h3>
            <p className="text-gray-600 mb-3">
              AI-powered navigation, voice commands, and real-time diagnostics.
            </p>
            <span className="text-sm text-red-500 font-medium">
              Next-Gen Tech
            </span>
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-semibold mb-2">Fuel Efficiency</h3>
            <p className="text-gray-600 mb-3">
              Optimized engines deliver better mileage with reduced emissions.
            </p>
            <span className="text-sm text-red-500 font-medium">
              Eco-Friendly Drive
            </span>
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-xl font-semibold mb-2">After-Sales Support</h3>
            <p className="text-gray-600 mb-3">
              Nationwide service network with 24/7 roadside assistance.
            </p>
            <span className="text-sm text-red-500 font-medium">
              Hassle-Free Ownership
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
