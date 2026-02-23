import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-x-hidden">
      
      {/* Header */}
      <ContactHeader />

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-12 space-y-12 bg-black">

        {/* Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Map */}
        <ContactMap />

      </div>
    </div>
  );
};

export default ContactPage;
