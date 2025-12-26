import waterfall from "../assets/waterfall.png";
import cursor from "../assets/cursor.png";
import Adobe from "../assets/Adobe.png";
import customField from "../assets/customField.png";

export default function Section3(){
    return(
        <div className="w-full py-6 border-b-2 border-gray-100">
  <div className="max-w-[1440px] mx-auto px-4 py-5
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

    <div className="flex items-center gap-1 font-semibold">
      <img src={Adobe} alt="Adobe" />
      <span className="text-gray-500">Access to </span> 700M+ Contacts
    </div>

    <div className="flex items-center gap-1 font-semibold">
      <img src={cursor} alt="cursor" />
      One click push <span className="text-gray-500"> to CRM</span>
    </div>

    <div className="flex items-center gap-1 font-semibold">
      <img src={customField} alt="customField" />
      Custom Field <span className="text-gray-500"> Mapping</span>
    </div>

    <div className="flex items-center gap-1 font-semibold">
      <img src={waterfall} alt="waterfall" />
      <span className="text-gray-500">Advanced </span> Waterfall Enrichment
    </div>

  </div>
</div>

    )
}