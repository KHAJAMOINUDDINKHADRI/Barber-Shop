import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Palette } from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="w-full py-16 lg:py-24 bg-background-one overflow-hidden">
      <div className="mx-[80px] px-[32px]">
        <div className="relative z-10">
        <div className="absolute top-[-24%] right-[-18%] w-[300px] h-[300px] rounded-full bg-barbershop-gold/10 z-0"></div>
        <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] rounded-full bg-barbershop-gold/10 z-0"></div>

          <div className="max-w-3xl mx-auto mb-12 group text-center transition-all duration-500 animate-fadeInUp opacity-100">
            <p className="text-barbershop-gold font-medium mb-2">
              Premium Grooming
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Our Barber Services
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-barbershop-gold from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Professional barbering services to keep you looking sharp for
              everyday confidence or special occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Haircuts Card */}
            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-zinc-700 hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-barbershop-gold to-barbershop-gold/10 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              <div className="w-20 h-20 ml-6 mt-12 bg-card-foreground rounded-lg p-4  mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-barbershop-gold/10">
                <img
                  loading="lazy"
                  src="/Assets/images/hair-styling-icon.svg"
                  alt="Hair Styling Icon"
                  className="h-12 w-12"
                />
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-barbershop-gold">
                  Haircuts
                </h3>
                <p className="text-gray-400">
                  Our skilled barbers deliver precision haircuts tailored to
                  your style and face shape. From classic cuts to modern fades,
                  we ensure you leave looking sharp and confident.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-barbershop-gold"></div>
                    Classic Cuts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-barbershop-gold"></div>
                    Modern Styles
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Beard Services Card */}
            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-zinc-700 hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-barbershop-gold to-barbershop-gold/10 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              <div className="w-20 h-20 ml-6 mt-12 bg-card-foreground rounded-lg p-4  mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-barbershop-gold/10">
                <img
                  loading="lazy"
                  src="/Assets/images/makeup-icon.svg"
                  alt="Hair Styling Icon"
                  className="h-12 w-12"
                />
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-barbershop-gold">
                  Beard Services
                </h3>
                <p className="text-gray-400">
                  Maintain your facial hair with our premium beard services. Our
                  barbers specialize in perfect beard shaping, precise trims,
                  and luxurious hot towel shaves for the ultimate grooming
                  experience.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-barbershop-gold"></div>
                    Beard Trims
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-barbershop-gold"></div>
                    Beard Shaping
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Premium Services Card */}
            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-zinc-700 hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-barbershop-gold to-barbershop-gold/10 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              <div className="w-20 h-20 ml-6 mt-12 bg-card-foreground rounded-lg p-4  mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-barbershop-gold/10">
                <img
                  loading="lazy"
                  src="/Assets/images/skincare-icon.svg"
                  alt="Hair Styling Icon"
                  className="h-12 w-12"
                />
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-barbershop-gold">
                  Premium Services
                </h3>
                <p className="text-gray-400">
                  Enhance your look with our premium barbering services
                  including expert hair coloring, revitalizing scalp treatments,
                  and styling for special occasions when you need to look your
                  absolute best.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-barbershop-gold"></div>
                    Hair Coloring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-barbershop-gold"></div>
                    Scalp Treatments
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
