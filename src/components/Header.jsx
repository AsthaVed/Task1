import { useState } from "react";
import logo from "../assets/Leadcrm Logo.png";
import vector from "../assets/Vector.png";
import login from "../assets/Frame.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="max-w-[1440px] mx-auto px-4 h-auto py-5 flex items-center justify-between">

        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-[100px] sm:w-[150px]"
        />

        {/* Desktop Menu (Tablet + Laptop) */}
        <nav className="hidden sm:flex items-center gap-12 lg:gap-12 sm:gap-6 text-sm sm:text-base flex-wrap justify-end pl-5">

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1 font-semibold font-exo">
              <p>Product</p>
              <img src={vector} className="w-[14px]" />
            </div>
            <p className="font-semibold font-exo">Pricing</p>
            <div className="flex items-center gap-1 font-semibold font-exo">
              <p>Resources</p>
              <img src={vector} className="w-[14px]" />
            </div>
            <div className="flex items-center gap-1 font-semibold font-exo">
              <p>Company</p>
              <img src={vector} className="w-[14px]" />
            </div>
          </div>

          <div className="flex gap-4 items-center text-sm sm:text-base">
            <button className="bg-[#2D96BC] text-white px-4 py-2 sm:px-3 sm:py-2 lg:px-4 rounded-lg font-semibold font-exo">
              Get your free account
            </button>

            <button className="border border-[#2D96BC] text-[#2D96BC] px-4 py-2 sm:px-3 sm:py-2 lg:px-4 rounded-lg flex gap-2 items-center font-semibold font-exo">
              <img src={login} />
              Login
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button (Only Mobile) */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="sm:hidden px-4 py-4 space-y-4 border-t">
          <p>Product</p>
          <p>Pricing</p>
          <p>Resources</p>
          <p>Company</p>

          <button className="w-full bg-[#2D96BC] text-white py-2 rounded-lg">
            Get your free account
          </button>

          <button className="w-full border border-[#2D96BC] text-[#2D96BC] py-2 rounded-lg">
            Login
          </button>
        </div>
      )}
    </header>
  );
}
