import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo-text.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        <nav className="flex h-16 items-center justify-between">
          <div
            onClick={() => setIsOpen(false)}
            className="shrink-0 cursor-pointer"
          >
            <img
              src={logo}
              alt="Dev Stack"
              className="h-[50px] w-[136px] object-contain"
            />
          </div>

          <ul className="hidden items-center gap-8 lg:flex">
            <li className="cursor-pointer text-[14px] font-medium text-pink-500">
              Home
            </li>

            <li className="cursor-pointer text-[14px] font-medium text-gray-600 transition-colors duration-300 hover:text-pink-500">
              Technologies
            </li>

            <li className="cursor-pointer text-[14px] font-medium text-gray-600 transition-colors duration-300 hover:text-pink-500">
              Projects
            </li>

            <li className="cursor-pointer text-[14px] font-medium text-gray-600 transition-colors duration-300 hover:text-pink-500">
              About
            </li>

            <li className="cursor-pointer text-[14px] font-medium text-gray-600 transition-colors duration-300 hover:text-pink-500">
              Contact
            </li>
          </ul>

          <div className="hidden items-center gap-6 lg:flex">
            <button
              type="button"
              className="text-[14px] font-medium text-gray-600 transition-colors duration-300 hover:text-pink-500"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-full bg-[#D91B7E] px-5 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Sign Up
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-gray-100 pb-5 lg:hidden">
            <ul className="space-y-1 pt-3">
              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-lg bg-pink-50 px-4 py-3 text-sm font-medium text-pink-500"
              >
                Home
              </li>

              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors duration-300 hover:bg-pink-50 hover:text-pink-500"
              >
                Technologies
              </li>

              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors duration-300 hover:bg-pink-50 hover:text-pink-500"
              >
                Projects
              </li>

              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors duration-300 hover:bg-pink-50 hover:text-pink-500"
              >
                About
              </li>

              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors duration-300 hover:bg-pink-50 hover:text-pink-500"
              >
                Contact
              </li>
            </ul>

            <div className="mt-4 flex gap-3 px-4">
              <button
                type="button"
                className="flex-1 rounded-full border border-gray-200 py-2.5 text-sm font-medium text-gray-600"
              >
                Sign In
              </button>

              <button
                type="button"
                className="flex-1 rounded-full bg-[#D91B7E] py-2.5 text-sm font-semibold text-white"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};