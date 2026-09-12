import { ArrowRight } from "lucide-react";
import heroImage from "../assets/banner-stack.png";

export const HeroSection = () => {
  return (
    <section
      className="overflow-hidden bg-white"
    >
      <div className="mx-auto flex min-h-[500px] max-w-[1370px] items-center px-5 py-16 sm:px-8 lg:px-10 ">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[620px]">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#111827] sm:text-5xl lg:text-[60px]">
              Build Your Ideal
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-[540px] text-[14px] leading-6 text-[#64748b] sm:text-[18px] sm:leading-7">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:text-sm"
              >
                Explore Technologies
              </a>

              <a
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-11 py-3 text-xs font-medium text-gray-600 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 sm:text-sm"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Development technology stack"
              className="w-full max-w-[470px] object-contain sm:max-w-[520px] lg:max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};