import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-backgroun-one">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <a href="/" className="flex items-center">
                <img
                  alt="Company Logo"
                  width="120"
                  height="40"
                  className="h-10 w-auto"
                  src="/Assets/images/logo.png"
                />
              </a>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Classic cuts with modern style
            </p>
            <div className="flex justify-start gap-3 mt-4 opacity-80 transform translate-y-0 transition-all duration-300">
              <a
                href="https://www.instagram.com/pmcbarbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-300 w-9 h-9 rounded-full bg-barbershop-gold/40 text-barbershop-gold hover:bg-barbershop-gold hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md"
                aria-label="instagram profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="14"
                  height="14"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/pmcbarbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-300 w-9 h-9 rounded-full bg-barbershop-gold/40 text-barbershop-gold hover:bg-barbershop-gold hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md"
                aria-label="facebook profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="14"
                  height="14"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-gray-400 text-sm hover:text-barbershop-gold transition-colors duration-200"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 text-sm hover:text-barbershop-gold transition-colors duration-200"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 text-sm hover:text-barbershop-gold transition-colors duration-200"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 text-sm hover:text-barbershop-gold transition-colors duration-200"
                  href="#gallery"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 text-sm hover:text-barbershop-gold transition-colors duration-200"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-barbershop-gold mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">
                  500 N Bell Ave #109, Denton, TX 76209, United States
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-barbershop-gold mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">+1 940-612-9127</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Newsletter
            </h3>
            <div>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter to receive updates and news.
              </p>
              <form className="space-y-3">
                <input
                  className="w-full h-9 rounded-md border border-gray-600 bg-transparent px-3 py-1 text-base text-white shadow-xs outline-none transition-all duration-300 focus:border-barbershop-gold focus:shadow-md hover:border-barbershop-gold/80"
                  placeholder="Your email"
                  type="email"
                  required
                />
                <button
                  className="w-full h-9 px-4 py-2 bg-barbershop-gold text-white font-medium rounded-md transition-all duration-300 hover:bg-barbershop-gold/90 hover:-translate-y-0.5 hover:shadow-md"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2023 PMC Barbershop. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                className="text-gray-400 text-sm hover:text-barbershop-gold transition-colors duration-200"
                href="#home"
              >
                Home
              </a>
              <a
                className="text-gray-400 text-sm hover:text-barbershop-gold transition-colors duration-200"
                href="#about"
              >
                About
              </a>
              <a
                className="text-gray-400 text-sm hover:text-barbershop-gold transition-colors duration-200"
                href="#services"
              >
                Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
