const Features = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-red-600/10 via-transparent to-transparent"></div>

      <div className="relative container mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Why Choose Our Cars
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Our vehicles combine cutting-edge engineering, luxury comfort, and
            advanced safety to deliver an exceptional driving experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Feature Card */}
          {[
            {
              title: "High Performance",
              desc:
                "Powerful engines engineered for rapid acceleration and precise handling.",
              tag: "Turbocharged Engines",
            },
            {
              title: "Luxury Interior",
              desc:
                "Premium materials, ambient lighting, and immersive infotainment systems.",
              tag: "Comfort Redefined",
            },
            {
              title: "Advanced Safety",
              desc:
                "Comprehensive driver-assist features with top-tier safety ratings.",
              tag: "5-Star Safety Rating",
            },
            {
              title: "Smart Technology",
              desc:
                "AI-powered navigation, voice control, and real-time diagnostics.",
              tag: "Next-Gen Tech",
            },
            {
              title: "Fuel Efficiency",
              desc:
                "Optimized performance delivering superior mileage and lower emissions.",
              tag: "Eco-Friendly Drive",
            },
            {
              title: "After-Sales Support",
              desc:
                "Nationwide service coverage with 24/7 roadside assistance.",
              tag: "Hassle-Free Ownership",
            },
          ].map((feature, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="900"
              data-aos-once="true"
              className="
                bg-gray-900 border border-gray-800
                p-7 rounded-2xl shadow-red-200/20
                shadow-lg hover:shadow-red-500/10
                hover:-translate-y-2
                transition-all duration-300
                group 
              "
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {feature.desc}
              </p>

              <span className="inline-block text-xs font-semibold tracking-wide text-red-500 bg-red-300/10 px-3 py-1 rounded-full">
                {feature.tag}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;
