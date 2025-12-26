import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import arrowBtn from "../assets/arrowBtn.png";
import bgSteps from "../assets/image2.png";
import image1 from "../assets/image1.png";

export default function Steps() {
  return (
    <div
      className="w-full min-h-[500px] bg-no-repeat bg-center bg-cover rounded-xl mt-5"
      style={{ backgroundImage: `url(${bgSteps})` }}
    >
      {/* Top bar */}
      <div className="max-w-[1440px] mx-auto px-4 h-auto py-8">
        <h1 className="text-[#090F4E] text-xl sm:text-2xl font-bold">
          How it Works
        </h1>
        <p>From setup to success in 4 simple steps</p>
      </div>

      {/* Steps with arrows */}
      <div className="flex justify-center flex-col relative">
        {/* Arrows Background Image */}
        <img
          src={image1}
          alt="arrows"
          className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto z-10">
          <img src={one} alt="one" className="mx-auto" />
          <img src={two} alt="two" className="mx-auto" />
          <img src={three} alt="three" className="mx-auto" />
          <img src={four} alt="four" className="mx-auto" />
        </div>

        {/* CTA Button */}
        <p className="text-black font-semibold w-fit bg-[#B3FC6A] text-[14px] md:text-[15px] px-3 md:px-5 py-3 rounded-lg mx-auto inline-flex items-center gap-2 mt-10 z-10 mb-10">
          Try LeadCRM Now <img src={arrowBtn} alt="arrowBtn" className="h-4 w-4" />
        </p>
      </div>
    </div>
  );
}
