import React from "react";
import MainLogo from "../assets/MainLogo";
import FacebookIcon from "../assets/footer/FacebookIcon";
import TwitterIcon from "../assets/footer/TwitterIcon";
import LinkedinIcon from "../assets/footer/LinkedinIcon";
import InstagramIcon from "../assets/footer/InstagramIcon";
import ChromeCircle from "../assets/ChromeCircle";
import MailIcon from "../assets/footer/MailIcon";
import PhoneIcon from "../assets/footer/PhoneIcon";
import HelpIcon from "../assets/footer/HelpIcon";

const Footer: React.FC = () => {
  const sections = {
    integrations: [
      { name: "HubSpot", href: "#", color: "#000000" },
      { name: "Salesforce", href: "#", color: "#000000" },
      { name: "Pipedrive", href: "#", color: "#000000" },
      {
        name: "Close.io",
        href: "#",
        color: "#000000",
        badge: "coming Soon",
      },
      {
        name: "Insightly",
        href: "#",
        color: "#000000",
        badge: "coming Soon",
      },
    ],
    alternative: [
      { name: "Surfe VS LeadCRM", href: "#", color: "#000000" },
      { name: "Linkmatch Alternative", href: "#", color: "#000000" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#", color: "#000000" },
      { name: "Terms of Use", href: "#", color: "#000000" },
    ],
    contact: [
      {
        name: "support@leadcrm.io",
        href: "mailto:support@leadcrm.io",
        color: "#000000",
        icon: MailIcon,
      },
      {
        name: "+1 231-538-7468",
        href: "tel:+123-538-7468",
        color: "#000000",

        icon: PhoneIcon,
      },
      { name: "Help Center", href: "#", color: "#000000", icon: HelpIcon },
    ],
  };

  const SectionColumn: React.FC<{
    title: string;
    items: {
      name: string;
      href: string;
      color: string;
      badge?: string;
      icon?: React.FC;
    }[];
  }> = ({ title, items }) => (
    <div className="w-[12rem]">
      <h3 className="font-semibold text-[#090F4E]">{title}</h3>
      <ul className="mt-2 space-y-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              <a
                href={item.href}
                className={`text-sm hover:${item.color} flex items-center ${
                  item.badge ? "space-x-1" : ""
                }`}
              >
                {/* @ts-ignore */}
                {Icon && <Icon className="h-6 w-6 shrink-0 mr-2" />}
                {item.name}
                {item.badge && (
                  <span className="text-xs bg-green-200 text-green-800 px-2 ms-2 rounded-full font-semibold font-[.3rem]">
                    {item.badge}
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[linear-gradient(to_right_top,_#ffffff_7%,_#01B2D838_22%)]  text-gray-700 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col gap-3 mb-4 md:mb-0">
          <MainLogo className="w-52" />
          <p className="text-sm font-semibold mt-2">
            LeadCRM is LinkedIn integration
            <br /> tool for your CRM.
          </p>
          <div className="flex space-x-1 mt-2">
            <FacebookIcon className="h-10 w-10 shrink-0" />
            <TwitterIcon className="h-10 w-10 shrink-0" />
            <LinkedinIcon className="h-10 w-10 shrink-0" />
            <InstagramIcon className="h-10 w-10 shrink-0" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 relative">
          <SectionColumn title="Integrations" items={sections.integrations} />
          <SectionColumn title="Alternative" items={sections.alternative} />
          <SectionColumn title="Legal" items={sections.legal} />
          <SectionColumn title="Contact Us" items={sections.contact} />
          <div className="absolute right-3 bottom-0 mt-4 flex gap-1 items-center bg-[#242424] py-1 px-4 rounded-2xl">
            <p className="text-[#FFFFFF] text-sm">
              Available in <br /> <strong>Chrome</strong>
            </p>
            <ChromeCircle className="size-8" />
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-xs">
        <p className="">
          Disclaimer: LeadCRM is not endorsed or certified by LinkedIn. All
          LinkedIn logos and trademarks displayed on this tool are property of
          LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your
          own risk.
        </p>
        <hr className="my-4 w-[70%] mx-auto border-[#8D8D8D94]" />
        <p className="mt-1">Copyright © 2025 LeadCRM. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
