// import conversation from "../assets/conversation.png";
// import contacts from "../assets/contacts.png";
// import companies from "../assets/companies.png";
// import leadcrm from "../assets/halfLogo.png";

import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import salesforce from "../assets/Salesforce.png";
import zoho from "../assets/zoho.png";
import image from "../assets/image.png";
import Collaboration from "../assets/Collaboration.png";
import message from "../assets/message.png";

export default function SupportedCRM() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-20 overflow-hidden mt-10 relative">
      {/* <img className="absolute -translate-1/2 right-[26.75rem] top-0" src={message} alt="message" /> */}
      <img
        src={message}
        alt="message"
        className="absolute
    w-20 right-1/2 top-4 translate-x-[11rem] sm:translate-x-[16rem] md:translate-x-[18rem] lg:translate-x-[18rem]"
      />

      {/* Centered container with max width 1440px */}
      <div className="max-w-[1440px] mx-auto relative">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-semibold text-[#090F4E]">
          Our Supported LeadCRM
        </h2>

        <p className="text-center text-[#4D4D4D] max-w-3xl mx-auto mt-4 text-sm sm:text-base">
          LeadCRM provides Native Integrations with popular CRM tools to make
          the most out of your LinkedIn prospecting.
        </p>

        {/* ===== Flow Container ===== */}
        <div className="mt-6 flex flex-col lg:flex-row items-center justify-center mx-auto gap-4 sm:gap-0">
          {/* ===== LEFT SIDE ===== */}
          <img src={image} alt="image" />

          {/* ===== RIGHT SIDE ===== */}
          <div className="flex flex-row lg:flex-col gap-6 bg-[#EAEFFA] p-4 rounded-2xl">
            {[work1, work2, salesforce, zoho].map((logo, i) => (
              <div
                key={i}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center"
              >
                <img src={logo} alt="crm" className="w-7 sm:w-8 scale-[2.1]" />
              </div>
            ))}
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="flex justify-center mt-8 mb-20">
          <button className="bg-[#A6F76A] text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
            Lets Integrate your CRM Now!
          </button>
        </div>

        <img
          className="absolute -translate-1/2 right-[-1rem] top-[32rem] sm:-right-[2rem] sm:top-[40rem] md:-right-[2rem] md:top-[48rem] lg:-right-[2.9rem] lg:top-[43rem]"
          src={Collaboration}
          alt="Collaboration"
        />
      </div>
    </section>
  );
}
