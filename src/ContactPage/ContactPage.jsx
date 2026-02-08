import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white mt-10">
      <ContactHeader />

      <div className="container  bg-black mx-auto px-4 py-12 space-y-12">
        <div className=" grid md:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Google Map */}
        <ContactMap />
      </div>
    </div>
  );
};

export default ContactPage;