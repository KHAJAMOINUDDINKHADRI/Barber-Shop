import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Palette } from "lucide-react";
import { JSX } from "react";

const AdvantageSection = () => {
  return (
    <div className="w-full py-16 lg:py-24 bg-background-one overflow-hidden">
      <div className="mx-[80px] px-[32px]">
        <div className="relative z-10">
        <div className="absolute top-[-160px] left-[-180px] w-[300px] h-[300px] rounded-full bg-barbershop-gold/10 z-0"></div>
        <div className="absolute bottom-[-320px] right-[-280px] w-[400px] h-[400px] rounded-full bg-barbershop-gold/10 z-0"></div>
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
            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-zinc-700 hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-barbershop-gold transition-all duration-300 group-hover:w-full group-hover:h-1"></div>
              <div className="w-20 h-20 ml-6 bg-card-foreground rounded-lg p-4 mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-barbershop-gold/10 text-barbershop-gold">
                User
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-barbershop-gold">
                  Expert Barbers
                </h3>
                <p className="text-gray-400">
                  Our team consists of certified barbers with years of
                  experience in classic and modern cutting techniques, beard
                  grooming, and men's styling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-zinc-700 hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-barbershop-gold transition-all duration-300 group-hover:w-full group-hover:h-1"></div>
              <div className="w-20 h-20 ml-6 bg-card-foreground rounded-lg p-4 mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-barbershop-gold/10 text-barbershop-gold">
                Scissors
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-barbershop-gold">
                  Premium Tools & Products
                </h3>
                <p className="text-gray-400">
                  We use only high-quality barbering tools and premium men's
                  grooming products to ensure the best results for your hair and
                  skin.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-zinc-700 hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-barbershop-gold transition-all duration-300 group-hover:w-full group-hover:h-1"></div>
              <div className="w-20 h-20 ml-6 bg-card-foreground rounded-lg p-4 mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-barbershop-gold/10 text-barbershop-gold">
                Home
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-barbershop-gold">
                  Classic Barbershop Experience
                </h3>
                <p className="text-gray-400">
                  Enjoy a comfortable, clean shop with a classic barbershop
                  atmosphere where you can relax while getting a great cut or
                  shave.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;
