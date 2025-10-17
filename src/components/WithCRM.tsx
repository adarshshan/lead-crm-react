import AIIcon from "../assets/leadIcons/AIIcon";
import OverlayIcon from "../assets/leadIcons/OverlayIcon";
import SyncIcon from "../assets/leadIcons/SyncIcon";
import AccessIcon from "../assets/SliderIcons/AccessIcon";

interface WithCRMInterface {}
const WithCRM: React.FC<WithCRMInterface> = ({}) => {
  return (
    <div className="w-full lg:w-1/2 bg-pink-50 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src="https://img.leadcrm.io/wp-content/uploads/2025/07/08100321/With-LeadCRM-768x299.webp"
          alt="Sales Navigator"
          className="mr-4"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#097737]">With LeadCRM</h3>
      <ul className="space-y-4 mt-5">
        <li className="flex items-center gap-3">
          <SyncIcon className="size-10  shrink-0" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#262626]">
              Complete Bi-Directional Sync
            </h3>
            <p className="text-[#4C4C4C]">
              Automatically sync contacts, messages, and notes between LinkedIn
              and your CRM in real time.
            </p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <AccessIcon className="size-10  shrink-0" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#262626]">
              700M+ Contacts + Enrichment
            </h3>
            <p className="text-[#4C4C4C]">
              Get verified emails and phone numbers from a vast global database.
            </p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <OverlayIcon className="size-10  shrink-0" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#262626]">
              CRM Overlay on LinkedIn
            </h3>
            <p className="text-[#4C4C4C]">
              See full CRM insights directly on LinkedIn profiles without
              switching tabs.
            </p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <AIIcon className="size-10  shrink-0" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#262626]">
              AI Response + Templates + Bulk Exports
            </h3>
            <p className="text-[#4C4C4C]">
              Save time with AI-crafted replies, pre-built templates, and
              one-click data exports.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WithCRM;
