import { useState } from "react";
import MainLogo from "../assets/MainLogo";
import HandBurgerIcon from "../assets/HandBurgerIcon";
import DownArrow from "../assets/DownArrow";
import LoginIcon from "../assets/LoginIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#ffffff] shadow-md shadow-[#959DA51A]">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-4 sm:p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <MainLogo className="w-48" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <div className="button px-2 py-1 border-2 rounded-md borer-[#2D96BC]">
              <HandBurgerIcon />
            </div>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            className="flex justify-center gap-2 items-center text-[1.1rem] font-semibold text-[#222222]"
          >
            Product
            <DownArrow className="w-3" />
          </a>
          <a
            href="#"
            className="flex justify-center gap-2 items-center text-[1.1rem] font-semibold text-[#222222]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="flex justify-center gap-2 items-center text-[1.1rem] font-semibold text-[#222222]"
          >
            Resources
            <DownArrow className="w-3" />
          </a>
          <a
            href="#"
            className="flex justify-center gap-2 items-center text-[1.1rem] font-semibold text-[#222222]"
          >
            Company
            <DownArrow className="w-3" />
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 gap-4 lg:justify-end">
          <button className="rounded-md py-3 px-5 border-1 border-[#2D96BC] bg-[#2D96BC] text-[#ffffff] font-semibold">
            Get Your Free Account
          </button>
          <button className="flex gap-1 items-center rounded-md py-3 px-5 border-1 border-[#2D96BC] text-[#2D96BC]">
            <LoginIcon className="size-6" />
            <p>Login</p>
          </button>
        </div>
      </nav>
      <dialog
        id="mobile-menu"
        open={isMenuOpen}
        className="backdrop:bg-transparent lg:hidden"
      >
        <div tabIndex={0} className="fixed inset-0 focus:outline-none">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={toggleMenu}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </header>
  );
};

export default Header;
