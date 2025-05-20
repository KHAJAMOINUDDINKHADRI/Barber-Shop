import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full min-h-[90vh] flex flex-col mt-28">
      <div className="mx-[80px] px-[32px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1">
        {/* Left side content */}
        <div className="flex flex-col justify-center">
          <p className="text-barbershop-gold font-medium mb-3 transition-all duration-500 animate-fadeInUp opacity-100 delay-100">
            Premium Barber Services in Denton
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
            Classic Cuts, Modern Style
            <span className="text-barbershop-gold relative inline-block">
              Premium Barber Shop
              <span
                className="absolute bottom-1 left-0 right-0 h-2 z-10 rounded-md bg-barbershop-gold/40 animate-pulse"
                style={{
                  width: "100%",
                  transform: "scaleX(1)",
                  transformOrigin: "left bottom",
                }}
              ></span>
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-barbershop-gold/40 animate-pulse"></span>
            </span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-xl text-muted-foreground">
            At PMC Barbershop, we combine traditional barbering techniques with
            modern styling to give you the perfect look. Our experienced barbers
            deliver precision cuts, beard grooming, and relaxing hot towel
            shaves in a classic barbershop atmosphere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="bg-black bg-opacity-40 flex items-center px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 text-barbershop-gold mr-2" />
              <span className="text-muted-foreground">Denton, TX</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="border border-gray-500 text-white hover:bg-barbershop-gold hover:border-0 hover:text-black flex gap-2 w-full justify-center"
            >
              <Phone className="h-4 w-4" />
              <span>Our Services</span>
            </Button>
            <Button className="bg-barbershop-gold hover:bg-yellow-500 text-black w-full justify-center">
              Book Now
            </Button>
          </div>
        </div>

        {/* Right side image with shadow effect */}
        <div className="relative flex items-center justify-center animate-floatIn filter drop-shadow-xl">
          <img
            src="/Assets/images/hero.png"
            alt="PMC Barbershop Team"
            className="w-full h-auto max-h-[600px] object-contain transition-transform hover:scale-105 duration-300"
          />
          {/* Shadow animation under the image */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2/3 h-4 bg-black/10 rounded-full blur-md -z-10"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
