import logo from "../assets/logo-text.png";

export const Footer = () => {
  return (
    <footer className="border-t border-[#EEF1F5] bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 lg:gap-16">
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-8 w-auto"
            />

            <p className="mt-4 max-w-[420px] text-sm leading-5 text-[#718096]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <ul className="mt-6 flex items-center gap-5 font-semibold">
              <li className="cursor-pointer text-sm text-[#475569] transition hover:text-[#E11D78]">
                GitHub
              </li>

              <li className="cursor-pointer text-sm text-[#475569] transition hover:text-[#E11D78]">
                Twitter
              </li>

              <li className="cursor-pointer text-sm text-[#475569] transition hover:text-[#E11D78]">
                LinkedIn
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#172033]">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li className="cursor-pointer text-sm text-[#718096] transition hover:text-[#E11D78]">
                Home
              </li>

              <li className="cursor-pointer text-sm text-[#718096] transition hover:text-[#E11D78]">
                Technologies
              </li>

              <li className="cursor-pointer text-sm text-[#718096] transition hover:text-[#E11D78]">
                Projects
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#172033]">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li className="cursor-pointer text-sm text-[#718096] transition hover:text-[#E11D78]">
                About
              </li>

              <li className="cursor-pointer text-sm text-[#718096] transition hover:text-[#E11D78]">
                Contact
              </li>

              <li className="cursor-pointer text-sm text-[#718096] transition hover:text-[#E11D78]">
                Careers
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#172033]">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              <li className="cursor-pointer text-sm text-[#718096] transition hover:text-[#E11D78]">
                Privacy Policy
              </li>

              <li className="cursor-pointer text-sm text-[#718096] transition hover:text-[#E11D78]">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#EEF1F5] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#94A3B8]">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <ul className="flex items-center gap-7">
            <li className="cursor-pointer text-sm text-[#94A3B8] transition hover:text-[#E11D78]">
              Privacy
            </li>

            <li className="cursor-pointer text-sm text-[#94A3B8] transition hover:text-[#E11D78]">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};