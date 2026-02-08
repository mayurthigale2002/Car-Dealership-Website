const Testimonials = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          What Our Customers Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div
            className="bg-gray-800 p-6 rounded-xl"
            data-aos="fade-right"
          >
            <p className="text-gray-200 mb-4">
              “Amazing experience! The car performance is outstanding and the
              interiors are extremely comfortable.”
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100?img=1"
                alt="Customer"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Rahul Sharma</h4>
                <p className="text-sm text-gray-500">Mumbai</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-gray-800 p-6 rounded-xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <p className="text-gray-200 mb-4">
              “Best car purchase ever. Safety features and smooth driving makes our
              every journey enjoyable.”
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/400?img=27"
                alt="Customer"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Priya Deshmukh</h4>
                <p className="text-sm text-gray-500">Pune</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-gray-800 p-6 rounded-xl"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <p className="text-gray-200 mb-4">
              “Luxury, performance, and style – everything I wanted in my dream
              car. Highly recommended!”
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Customer"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Amit Patil</h4>
                <p className="text-sm text-gray-500">Nagpur</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
