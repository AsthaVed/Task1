import BannerImage from "../assets/BannerImage.png"; // apni image ka path

export default function HeroSection() {
  return (
    <section className="w-full bg-[#EEF3FF] py-10 px-4">
      
      {/* ===== Heading ===== */}
      <h2 className="text-lg sm:text-xl font-semibold text-[#090F4E] mx-auto mb-5">
        Join Thousands of Professionals Using LeadCRM
      </h2>

      {/* ===== Image Container ===== */}
      <div className="mx-auto">
        <img
          src={BannerImage}
          alt="LeadCRM BannerImage"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* ===== Button ===== */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#A6F76A] text-black px-7 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Get Started Today →
        </button>
      </div>
    </section>
  );
}
