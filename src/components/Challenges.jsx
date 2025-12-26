import withoutLead from "../assets/withoutLead.png";
import withLead from "../assets/withLead.png";
import save from "../assets/save.png";

export default function Challenges() {
  return (
    <div className="w-full overflow-hidden mt-8">
      <div className="max-w-[1440px] mx-auto px-4 py-6 mb-[70px]">
        <h1 className="text-center text-xl sm:text-2xl font-semibold text-[#090F4E]">
          Every LinkedIn Prospector faces these daily challenges
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 mt-6">
          {/* Left Image */}
          <img
            src={withoutLead}
            alt="withoutLead"
            className="w-full md:w-[45%] lg:w-1/2 max-w-[400px] h-auto"
          />

          {/* VS Divider */}
          <div className="flex md:flex-col items-center justify-center">
            {/* Line */}
            <div className="w-24 h-[1px] bg-gray-300 md:w-[1px] md:h-40 lg:h-60"></div>

            {/* VS Text */}
            <span className="mx-3 my-2 text-black font-semibold text-sm">
              VS
            </span>

            {/* Line */}
            <div className="w-24 h-[1px] bg-gray-300 md:w-[1px] md:h-40 lg:h-60"></div>
          </div>

          {/* Right Image */}
          <img
            src={withLead}
            alt="withLead"
            className="w-full md:w-[45%] lg:w-1/2 max-w-[400px] h-auto"
          />
        </div>
<div className="relative mt-4 w-fit text-center mx-auto">
  {/* Button */}
  <p className="text-black font-semibold bg-[#B3FC6A] text-[10px] sm:text-[14px] md:text-[15px] px-3 md:px-5 py-3 rounded-lg">
    Start Using LeadCRM Now
  </p>

  {/* Save Image */}
  <img
    src={save}
    alt="save"
    className="absolute -top-[9px] sm:-top-[22px] md:-top-[35px] -right-[90px] sm:-right-[145px] md:-right-[180px] h-[50px] sm:h-[80px] md:h-[100px] w-auto"
  />
</div>


      </div>
    </div>
  );
}
