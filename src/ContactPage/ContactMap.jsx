import React from "react";

const ContactMap = () => {
  return (
    <div
      className="w-full h-112.5 md:h-105 rounded-xl overflow-hidden shadow-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Deccan,Maharashtra&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      ></iframe>
    </div>
  );
};

export default ContactMap;
