import bgImage from "../assets/BannerBg.png";
import rocket from "../assets/Rocket.png";
import underline from "../assets/underline.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import Salesforce from "../assets/Salesforce.png";
import halfChrome from "../assets/halfChrome.png";
import star from "../assets/star.png";
import newArrow from "../assets/newArrow.png";
import chrome from "../assets/chrome.png";

export default function Banner() {
  return (
    <>
      <section
        className="min-h-[500px] bg-no-repeat bg-center bg-cover flex items-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Container */}
        <div className="max-w-[75%] mx-auto px-4 rounded-lg text-center flex flex-col gap-3 mt-5">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 border border-[#2D96BC] bg-white/80 backdrop-blur px-4 py-2 rounded-3xl self-center">
            <img src={rocket} alt="rocket" className="w-[20px] h-auto" />
            <p className="text-sm sm:text-base font-normal font-exo leading-normal">
              Thousands of Professionals using LeadCRM
            </p>
          </div>
          <p className="font-semibold text-center font-exo text-[35px] md:text-[40px] lg:text-[50px] leading-[1.1]">
            LinkedIn CRM Integration
            <br />
            Capture, Sync and Enrich in{" "}
            <span className="relative inline-block text-[#2D96BC]">
              Both Ways {/* underline image */}
              <img
                src={underline}
                alt="underline"
                className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-full"
              />
            </span>
          </p>

          <p className="text-center max-w-[70%] mx-auto mt-[1%] font-semibold">
            Automatically sync LinkedIn prospects to your CRM and overlay
            existing CRM contacts on LinkedIn profiles. Complete bi-directional
            integration with HubSpot, Salesforce, and Pipedrive.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 px-2 sm:px-6 py-3 rounded-lg
bg-gradient-to-r from-[#5ED3FF] via-[#6EC6FE] via-[#EB65F4] to-[#FD58F2] self-center mt-1 overflow-hidden"
          >
            <p className="text-black font-normal">Works with</p>

            <div className="inline-flex gap-2 self-center">
              <img src={work1} alt="work1" className="h-9 w-auto" />
              <img src={work2} alt="work2" className="h-9 w-auto" />
              <img src={Salesforce} alt="Salesforce" className="h-9 w-auto" />
            </div>
          </div>

          <div className="inline-flex flex-wrap justify-center gap-2 self-center relative -top-4">
            {/* Chrome rating */}
            <div className="flex items-center relative -left-3 sm:top-0 sm:left-0">
              <img src={halfChrome} alt="halfChrome" />
              <div className="flex gap-1 items-center relative -top-1 -left-2">
                <img src={star} alt="star" className="h-4 w-auto object-cover" />
                <img src={star} alt="star" className="h-4 w-auto object-cover" />
                <img src={star} alt="star" className="h-4 w-auto object-cover" />
                <img src={star} alt="star" className="h-4 w-auto object-cover" />
                <img src={star} alt="star" className="h-4 w-auto object-cover" />
                <p>5/5</p>
              </div>
            </div>

            {/* Arrow rating */}
            <div className="flex items-center relative -top-[40px] -left-3 sm:top-0 sm:left-0">
              <img src={newArrow} alt="newArrow"/>
              <div className="flex gap-1 items-center relative -top-1 -left-2">
                <img src={star} alt="star" className="h-4 w-auto object-cover" />
                <img src={star} alt="star" className="h-4 w-auto object-cover" />
                <img src={star} alt="star" className="h-4 w-auto object-cover" />
                <img src={star} alt="star" className="h-4 w-auto object-cover" />
                <img src={star} alt="star" className="h-4 w-auto object-cover" />
                <p>5/5</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-center flex-col relative -top-[65px] sm:flex-row sm:-top-7">
  {/* Chrome Box */}
  <div className="flex bg-[#373737] px-3 py-2 text-white items-center rounded-lg text-left">
    <p className="text-sm">
      <span className="text-xs">Available in</span>
      <br />
      Chrome Web Store
    </p>
    <img src={chrome} alt="chrome" className="h-6 w-auto ml-2" />
  </div>

  {/* Free Trial Box */}
  <div className="flex bg-[#B3FC6A] px-6 py-4 items-center justify-center rounded-lg">
    <p className="text-black font-semibold">Get a Free Trial Now!</p>
  </div>
</div>

        </div>
      </section>
    </>
  );
}
