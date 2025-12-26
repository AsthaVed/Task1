import { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import clock from "../assets/clock.png";
import creditCard from "../assets/creditCard.png";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"}
      `}
    >
      <div className="bg-white shadow-xl rounded-xl px-4 sm:px-6 py-4 flex flex-col items-center gap-4 w-[95vw] max-w-[900px]">
        
        {/* MAIN CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#FFEEFE] p-4 rounded-xl w-full">
          
          {/* LEFT */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <img
              src={profile}
              className="w-14 sm:w-20 rounded-full"
              alt="profile"
            />
            <p className="text-sm sm:text-base font-bold text-[#121212]">
              Join with our Thousands of professionals Now!
            </p>
          </div>

          {/* BUTTON */}
          <button className="bg-[#B3FC6A] text-black font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-sm w-fit sm:w-auto">
            Get a Free Trial Now!
          </button>
        </div>

        {/* META INFO — NOT HIDDEN ANYMORE */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-[#6C6C6C]">
          
          <span className="flex items-center gap-2">
            <img src={creditCard} className="w-6 h-6" alt="creditCard" />
            <span className="text-[#161616] font-bold">No Credit Card</span> Required
          </span>

          <span className="flex items-center gap-2">
            <img src={clock} className="w-6 h-6" alt="clock" />
            <span className="text-[#161616] font-bold">14 Days Free</span> Trial
          </span>

        </div>
      </div>
    </div>
  );
}
