import whiteArrow from "../assets/whiteArrow.png";
import blueArrow from "../assets/blueArrow.png";
import ball from "../assets/Ball.png";
import capterra from "../assets/capterra.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

export default function About() {
  return (
    <>
      <div className="flex flex-row items-center justify-between max-w-[1440px] mx-auto mt-[70px] relative px-4">
         <img
          src={ball}
          alt="ball"
          className="absolute -translate-1/2 -top-[100px] object-cover w-14 sm:w-16 h-auto right-8 sm:right:6 lg:right-4 "
        /> 
        {/* <img
  src={ball}
  alt="ball"
  className="
    absolute
    hidden sm:block
    top-0
    right-4
    -translate-y-1/2
    sm:right-6
    lg:right-10
    w-14 sm:w-16
  "
/> */}

        <h1 className="text-xl sm:text-2xl font-semibold">
          What people are saying about LeadCRM
        </h1>
        <div className="flex gap-1 sm:gap-4">
          <img className="object-contain w-6 sm:w-8" src={whiteArrow} alt="whiteArrow" />
          <img className="object-contain w-6 sm:w-8" src={blueArrow} alt="blueArrow" />
        </div>
      </div>

      {/* Cards Wrapper */}
        <div className="max-w-[1400px] mx-auto mt-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#F9F0F8] rounded-2xl p-6">
              <p className="text-sm text-black leading-relaxed">
                “Reliable Data Sync I've only had to refresh the extension a
                couple of times. The multi-contact enrichment is still a huge
                plus, and support is very responsive.”
              </p>

              <div className="flex items-center gap-2 mt-4 mb-20">
                <img src={capterra} alt="capterra" className="w-5 scale-[4.2]" />
                <span className="text-[#090F4E] font-bold relative -top-1">★★★★★</span>
              </div>

              <hr className="my-6" />

              <div className="flex items-center gap-3">
                <img
                  src={user1}
                  className="w-10 h-10 rounded-full object-cover"
                  alt="user1"
                />
                <div>
                  <p className="font-semibold text-sm">David Fincher</p>
                  <p className="text-xs text-gray-500">On Capterra</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F9F0F8] rounded-2xl p-6">
              <p className="text-sm text-black leading-relaxed">
                “My experience with LeadCRM has been excellent. It has
                streamlined my workflow, improved lead tracking, and made
                follow-ups more efficient.”
              </p>

              <div className="flex items-center gap-2 mt-4 mb-20">
                <img src={capterra} alt="capterra" className="w-4 scale-[4.2]" />
                <span className="text-[#090F4E] font-bold relative -top-1">★★★★★</span>
              </div>

              <hr className="my-6" />

              <div className="flex items-center gap-3">
                <img
                  src={user2}
                  className="w-10 h-10 rounded-full object-cover"
                  alt="user2"
                />
                <div>
                  <p className="font-semibold text-sm">Lillian Williams</p>
                  <p className="text-xs text-gray-500">On Capterra</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F9F0F8] rounded-2xl p-6">
              <p className="text-sm text-black leading-relaxed">
                “Reliable Data Sync I've only had to refresh the extension a
                couple of times. The multi-contact enrichment is still a huge
                plus.”
              </p>

              <div className="flex items-center gap-2 mt-4 mb-20">
                <img src={capterra} alt="capterra" className="w-4 scale-[4.2]" />
                <span className="text-[#090F4E] font-bold relative -top-1">★★★★★</span>
              </div>

              <hr className="my-6" />

              <div className="flex items-center gap-3">
                <img
                  src={user3}
                  className="w-10 h-10 rounded-full object-cover"
                  alt="user3"
                />
                <div>
                  <p className="font-semibold text-sm">Michael</p>
                  <p className="text-xs text-gray-500">On Capterra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
