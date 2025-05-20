import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full py-16 lg:py-24 bg-background-one mt-24 overflow-hidden">
      <div className="mx-[80px] px-[32px]">
        <div className="relative z-10">
          <div className="absolute top-[-24%] right-[-18%] w-[300px] h-[300px] rounded-full bg-barbershop-gold/10 z-0"></div>
          <div className="absolute bottom-[-20%] left-[-16%] w-[250px] h-[250px] rounded-full bg-barbershop-gold/10 z-0"></div>

          <div className="max-w-3xl mx-auto mb-12 group text-center transition-all duration-500 animate-fadeInUp opacity-100">
            <p className="text-barbershop-gold font-medium mb-2">
              Book Your Appointment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-barbershop-gold rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6">
              Ready for a fresh look? Book your appointment today or contact us
              for any questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fadeInUp">
            {/* Left side */}

            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm md:col-span-1 p-6 border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-2"
            >
              <div data-slot="card-content" className="p-0">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-2 -mx-3">
                    <div className="w-9 h-9 rounded-full bg-barbershop-gold flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                      <h4 className="font-semibold mb-1 text-white">Address</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        500 N Bell Ave #109, Denton, TX 76209, United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-2 -mx-3">
                    <div className="w-9 h-9 rounded-full bg-barbershop-gold flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                  <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-2 -mx-3">
                    <div className="w-9 h-9 rounded-full bg-barbershop-gold flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-clock text-white"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Business Hours
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM, Sun:
                        Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right side content */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm md:col-span-2 p-6 border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <form className="space-y-6">
                <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
                  <label
                    className="flex text-white items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:text-barbershop-gold group-hover:translate-x-1"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    className="w-full h-9 rounded-md border bg-transparent px-3 py-1 text-white shadow-xs outline-none transition-all duration-300 focus:border-primary focus:shadow-md hover:border-barbershop-gold/40"
                    placeholder="Enter your full name"
                    id="name"
                    type="text"
                    name="name"
                  />
                </div>

                <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
                  <label
                    className="flex text-white items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:text-barbershop-gold group-hover:translate-x-1"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full h-9 rounded-md border bg-transparent px-3 py-1 text-white shadow-xs outline-none transition-all duration-300 focus:border-primary focus:shadow-md hover:border-barbershop-gold/40"
                    placeholder="Enter your phone number"
                    id="phone"
                    type="tel"
                    name="phone"
                  />
                </div>

                <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
                  <label
                    className="flex text-white items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:text-barbershop-gold group-hover:translate-x-1"
                    htmlFor="service"
                  >
                    Service Interested In
                  </label>
                  <select
                    className="w-fit h-9 text-white rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-all duration-300 focus:border-primary focus:shadow-md hover:border-primary/80"
                    id="service"
                    name="service"
                  >
                    <option value="">Select an option</option>
                    <option value="Haircut">Haircut</option>
                    <option value="Beard Trim">Beard Trim</option>
                    <option value="Hot Towel Shave">Hot Towel Shave</option>
                    <option value="Haircut & Beard Combo">
                      Haircut & Beard Combo
                    </option>
                    <option value="Kid's Haircut">Kid's Haircut</option>
                    <option value="Senior Haircut">Senior Haircut</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
                  <label
                    className="flex text-white items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:text-barbershop-gold group-hover:translate-x-1"
                    htmlFor="date"
                  >
                    Preferred Date
                  </label>
                  <input
                    className="w-full h-9 rounded-md border bg-transparent px-3 py-1 text-white shadow-xs outline-none transition-all duration-300 focus:border-primary focus:shadow-md hover:border-barbershop-gold/40"
                    id="date"
                    type="date"
                    name="date"
                  />
                </div>

                <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
                  <label
                    className="flex text-white items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:text-barbershop-gold group-hover:translate-x-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full min-h-40 rounded-md border bg-transparent px-3 py-2 text-white shadow-xs outline-none resize-y transition-all duration-300 hover:border-barbershop-gold/40"
                    placeholder="Tell us about your style preferences or any questions you have"
                    id="message"
                    name="message"
                  ></textarea>
                </div>

                <button
                  className="inline-flex items-center justify-center px-6 py-2 bg-barbershop-gold text-white rounded-md transition-all duration-300 hover:-translate-y-1 "
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
