import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Palette } from "lucide-react";
import { JSX } from "react";

const GallerySection = () => {
  return (
    <div className="w-full py-16 lg:py-24 bg-background-one overflow-hidden">
      <div className="mx-[80px] px-[32px]">
        <div className="relative z-10">
        <div className="absolute top-[-38%] right-[-18%] w-[300px] h-[300px] rounded-full bg-barbershop-gold/10 z-0"></div>
          <div className="absolute bottom-[-52%] left-[-16%] w-[250px] h-[250px] rounded-full bg-barbershop-gold/10 z-0"></div>

          <div className="max-w-3xl mx-auto mb-12 group text-center transition-all duration-500 animate-fadeInUp opacity-100">
            <p className="text-barbershop-gold font-medium mb-2">
              Our Work & Shop
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Our Barbershop Gallery
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-barbershop-gold from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Take a look at our shop atmosphere and the quality cuts we deliver
              to our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg hover:border-2 border-barbershop-gold">
              <img
                src="/Assets/images/gallery1.webp"
                alt="PMC Barbershop Exterior"
                className="w-full h-[200px] sm:h-[240px] object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-lg hover:border-2 border-barbershop-gold">
              <img
                src="/Assets/images/gallery2.webp"
                alt="PMC Barbershop Exterior"
                className="w-full h-[200px] sm:h-[240px] object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-lg hover:border-2 border-barbershop-gold">
              <img
                src="/Assets/images/gallery3.webp"
                alt="PMC Barbershop Exterior"
                className="w-full h-[200px] sm:h-[240px] object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
