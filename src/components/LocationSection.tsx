import React from "react";

const LocationSection = () => {
  return (
    <div className="w-full py-16 lg:py-24 bg-background-one mt-24 overflow-hidden">
      <div className="mx-[80px] px-[32px]">
        <div className="relative z-10">
          <div className="absolute top-[-24%] right-[-18%] w-[300px] h-[300px] rounded-full bg-barbershop-gold/10 z-0"></div>
          <div className="absolute bottom-[-40%] left-[-16%] w-[250px] h-[250px] rounded-full bg-barbershop-gold/10 z-0"></div>

          <div className="max-w-3xl mx-auto mb-12 group text-center transition-all duration-500 animate-fadeInUp opacity-100">
            <p className="text-barbershop-gold font-medium mb-2">
              Visit Our Shop
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Our Location
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-barbershop-gold rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6">
              Conveniently located in Denton, TX:{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side image */}
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.8095231577527!2d-97.127037!3d33.219089499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dca8e4261aec1%3A0xb5d271024d7890e2!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209%2C%20USA!5e0!3m2!1sen!2sin!4v1747736238277!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Right side content */}
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-2"
              >
                <h3 className="text-xl font-semibold text-white relative inline-block mb-6">
                  Contact Information
                  <span className="absolute bottom-[-0.5rem] left-0 w-12 h-[2px] bg-barbershop-gold rounded-md"></span>
                </h3>
              </div>
              <div data-slot="card-content" className="px-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-background/10 -mx-3">
                    <div className="w-9 h-9 rounded-full bg-barbershop-gold flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-map-pin text-white"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Address</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        500 N Bell Ave #109, Denton, TX 76209, United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-background/10 -mx-3">
                    <div className="w-9 h-9 rounded-full bg-barbershop-gold flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-phone text-white"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                      +1 940-612-9127
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&amp;destination=518%20Acme%20St%20unit%20101%2C%20Denton%2C%20TX%2076205%2C%20United%20States"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-slot="button"
                    className="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-barbershop-gold text-white shadow-xs hover:bg-barbershop-gold/90 h-9 px-4 py-2 has-[>svg]:px-3 flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-navigation"
                      aria-hidden="true"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    Get Directions
                  </a>
                  <a
                    href="tel:+19408081569"
                    data-slot="button"
                    className="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-transparent shadow-xs text-white hover:bg-white hover:text-black dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-phone"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
