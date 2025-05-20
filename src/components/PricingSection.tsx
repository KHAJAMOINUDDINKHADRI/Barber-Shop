import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Palette } from "lucide-react";
import { JSX } from "react";
import { Button } from "react-day-picker";

const PricingSection = () => {
  return (
    <div className="w-full py-16 lg:py-24 bg-background-one overflow-hidden">
      <div className="mx-[80px] px-[32px]">
        <div className="relative z-10">
          <div className="absolute top-[-24%] right-[-18%] w-[300px] h-[300px] rounded-full bg-barbershop-gold/10 z-0"></div>
          <div className="absolute bottom-[-20%] left-[-16%] w-[250px] h-[250px] rounded-full bg-barbershop-gold/10 z-0"></div>

          <div className="max-w-3xl mx-auto mb-12 group text-center transition-all duration-500 animate-fadeInUp opacity-100">
            <p className="text-barbershop-gold font-medium mb-2">
              Our Commitment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Why Choose PMC Barbershop?
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-barbershop-gold from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              What makes us the premier barbershop in Denton, TX.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-2 py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-barbershop-gold hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 bg-barbershop-gold"></div>
              <div className="absolute top-0 right-8 bg-barbershop-gold text-white px-6 py-2 font-semibold text-sm rounded-b-lg shadow-md transform transition-transform duration-300 hover:-translate-y-1">
                Most Popular
              </div>
              <div className="mt-4 px-8">
                <h3 className="text-xl font-bold text-white mb-2 relative inline-block">
                  Classic Services
                  <span className="absolute bottom-[-0.25rem] left-0 w-10 h-0.5 bg-barbershop-gold rounded transition-all duration-300 group-hover:w-16"></span>
                </h3>
                <div className="flex items-baseline mb-6 group transition-all duration-300 hover:scale-105 mt-6">
                  <span className="text-5xl font-extrabold text-barbershop-gold">
                    $25
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">
                    /mo
                  </span>
                </div>
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Men's Haircut
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Kids Haircut (12 &amp; under)
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Senior Haircut (65+)
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Military/First Responder Cut
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Basic Beard Trim
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Neck &amp; Line Cleanup (between cuts)
                  </li>
                </ul>
              </CardContent>
              <button className="inline-flex rounded-md text-sm bg-barbershop-gold text-white hover:bg-barbershop-gold/90 h-9 py-6 items-center justify-center  mx-4 font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
                Book Now
              </button>
            </Card>

            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-2 py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-barbershop-gold hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 bg-barbershop-gold"></div>
              <div className="mt-4 px-8">
                <h3 className="text-xl font-bold text-white mb-2 relative inline-block">
                  Premium Services
                  <span className="absolute bottom-[-0.25rem] left-0 w-10 h-0.5 bg-barbershop-gold rounded transition-all duration-300 group-hover:w-16"></span>
                </h3>
                <div className="flex items-baseline mb-6 group transition-all duration-300 hover:scale-105 mt-6">
                  <span className="text-5xl font-extrabold text-barbershop-gold">
                    $35
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">
                    /mo
                  </span>
                </div>
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Haircut & Beard Combo
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Hot Towel Shave
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Full Beard Shaping & Design
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Color Camo (Gray Blending)
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Hair & Scalp Treatment
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Head Shave with Hot Towel
                  </li>
                </ul>
              </CardContent>
              <button className="inline-flex rounded-md text-sm bg-transparent border border-barbershop-gold hover:border-0 text-white hover:bg-barbershop-gold/90 h-9 py-6 items-center justify-center  mx-4 font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
                Book Now
              </button>
            </Card>

            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-2 py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-barbershop-gold hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 bg-barbershop-gold"></div>
              <div className="mt-4 px-8">
                <h3 className="text-xl font-bold text-white mb-2 relative inline-block">
                  Packages
                  <span className="absolute bottom-[-0.25rem] left-0 w-10 h-0.5 bg-barbershop-gold rounded transition-all duration-300 group-hover:w-16"></span>
                </h3>
                <div className="flex items-baseline mb-6 group transition-all duration-300 hover:scale-105 mt-6">
                  <span className="text-5xl font-extrabold text-barbershop-gold">
                    $50
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">
                    /mo
                  </span>
                </div>
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    The Works (Cut, Shave, Treatment)
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Father & Son Combo
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Groom's Package
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Monthly Membership (2 cuts/mo)
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    First-Time Client Special
                  </li>
                  <li className="flex items-center text-white text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-background/10 hover:translate-x-1 -mx-3">
                    <div className="bg-barbershop-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    Loyalty Program
                  </li>
                </ul>
              </CardContent>
              <button className="inline-flex rounded-md text-sm bg-transparent border border-barbershop-gold hover:border-0 text-white hover:bg-barbershop-gold/90 h-9 py-6 items-center justify-center  mx-4 font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
                Book Now
              </button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
