import React from "react";

const ContactMap = () => {
  return (
    <div
      className="
        w-full
        h-[350px]
        md:h-[450px]
        rounded-2xl
        overflow-hidden
        shadow-xl
      "
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Deccan,Maharashtra&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
