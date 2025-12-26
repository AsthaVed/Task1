import React, { useState } from "react";
import Link1 from "../assets/Link1.png";
import Link2 from "../assets/Link2.png";
import Link3 from "../assets/Link3.png";
import Link4 from "../assets/Link4.png";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import logo from "../assets/Leadcrm Logo.png";
import chrome from "../assets/chrome.png";

/* ================= FOOTER SECTION ================= */
function FooterSection({ title, items, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3
        className="font-bold mb-3 flex justify-between items-center cursor-pointer sm:cursor-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="sm:hidden">{isOpen ? "▲" : "▼"}</span>
      </h3>

      <ul
        className={`text-sm text-[#090F4E] space-y-3 sm:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {/* STRING */}
            {typeof item === "string" ? (
              item
            ) : 
            /* JSX (Close.io / Insightly) */
            React.isValidElement(item) ? (
              item
            ) : (
              /* OBJECT (icon + label) */
              <>
                {item.icon && (
                  <img src={item.icon} className="w-4 h-4" alt="" />
                )}
                {item.label}
              </>
            )}
          </li>
        ))}
      </ul>

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

/* ================= MAIN FOOTER ================= */
export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(277.75deg,rgba(1,178,216,0.22)_0%,rgba(1,178,216,0.07)_77%)] px-6 py-10 mt-[150px]">
      {/* MAIN GRID */}
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* LOGO */}
        <div>
          <img src={logo} alt="LeadCRM" className="w-32 mb-3" />
          <p className="text-sm text-[#000000]">
            LeadCRM is LinkedIn integration tool for your CRM.
          </p>

          <div className="flex gap-3 mt-4">
            <img src={Link1} className="w-6 h-6" />
            <img src={Link2} className="w-6 h-6" />
            <img src={Link3} className="w-6 h-6" />
            <img src={Link4} className="w-6 h-6" />
          </div>
        </div>

        {/* INTEGRATIONS */}
        <FooterSection
          title="Integrations"
          items={[
            "HubSpot",
            "Salesforce",
            "Pipedrive",
            <>
              Close.io
              <span className="ml-2 text-xs bg-green-100 text-[#002A06] px-2 py-[2px] rounded">
                Coming Soon
              </span>
            </>,
            <>
              Insightly
              <span className="ml-2 text-xs bg-green-100 text-[#002A06] px-2 py-[2px] rounded">
                Coming Soon
              </span>
            </>,
          ]}
        />

        {/* ALTERNATIVE */}
        <FooterSection
          title="Alternative"
          items={["Surfe VS LeadCRM", "Linkmatch Alternative"]}
        />

        {/* LEGAL */}
        <FooterSection
          title="Legal"
          items={["Privacy Policy", "Terms of Use"]}
        />

        {/* CONTACT */}
        <FooterSection
          title="Contact Us"
          items={[
            { icon: Icon1, label: "support@leadcrm.io" },
            { icon: Icon2, label: "+1 231-538-7466" },
            { icon: Icon3, label: "Help Center" },
          ]}
        >
          {/* CHROME BUTTON */}
          <div className="mt-4 flex justify-end">
            <p className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm w-fit max-w-full lg:w-[60%]">
              Available in Chrome
              <img src={chrome} className="w-5 h-5" />
            </p>
          </div>
        </FooterSection>
      </div>

      {/* DISCLAIMER */}
      <div className="max-w-7xl mx-auto mt-8 pt-4 text-center text-xs text-[#54595F]">
        <p className="border-b-2 border-gray-300 pb-3">
          Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
          LinkedIn(tm) logos and trademarks displayed on this tool are property of
          LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your
          own risk.
        </p>
        <p className="mt-2">
          Copyright © 2025 LeadCRM. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
