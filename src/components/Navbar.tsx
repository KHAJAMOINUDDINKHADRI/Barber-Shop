import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, PaintBucket, Palette, Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-[80px] px-[32px]">
      <nav className="flex justify-between items-center w-full py-4">
        <div className="flex items-center">
          <img
            src="/Assets/images/logo.png"
            alt="PMC Barbershop Logo"
            className="h-12 mr-8"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a
            href="/"
            className="text-white hover:text-barbershop-gold transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:text-barbershop-gold transition-colors"
          >
            About
          </a>
          <a
            href="/services"
            className="text-white hover:text-barbershop-gold transition-colors"
          >
            Services
          </a>
          <a
            href="/gallery"
            className="text-white hover:text-barbershop-gold transition-colors"
          >
            Gallery
          </a>
          <a
            href="/contact"
            className="text-white hover:text-barbershop-gold transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block">
            <Palette className="text-white hover:text-barbershop-gold transition-colors" />
          </button>
          <button className="hidden md:block">
            <Globe className="text-white hover:text-barbershop-gold transition-colors" />
          </button>

          <div className="hidden md:flex items-center">
            <Phone className="h-4 w-4 text-barbershop-gold mr-2" />
            <a
              href="tel:+19408081569"
              className="text-white hover:text-barbershop-gold"
            >
              +1 940-612-9127
            </a>
          </div>
          <Button className="hidden md:flex bg-barbershop-gold hover:bg-yellow-500 text-white font-medium">
            Book an Appointment
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-barbershop-gold transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-[72px] left-0 right-0 bg-[#1a1a1a] z-50`}
      >
        <div className="flex flex-col space-y-4 p-6">
          <a
            href="/"
            className="text-white hover:text-barbershop-gold transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:text-barbershop-gold transition-colors"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="/services"
            className="text-white hover:text-barbershop-gold transition-colors"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="/gallery"
            className="text-white hover:text-barbershop-gold transition-colors"
            onClick={toggleMenu}
          >
            Gallery
          </a>
          <a
            href="/contact"
            className="text-white hover:text-barbershop-gold transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <div className="flex items-center pt-2">
            <Phone className="h-4 w-4 text-barbershop-gold mr-2" />
            <a
              href="tel:+19408081569"
              className="text-white hover:text-barbershop-gold"
            >
              +1 940-612-9127
            </a>
          </div>
          <Button className="w-full bg-barbershop-gold hover:bg-yellow-500 text-white font-medium">
            Book an Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
