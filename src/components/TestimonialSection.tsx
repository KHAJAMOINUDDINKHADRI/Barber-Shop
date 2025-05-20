import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Palette } from "lucide-react";

const TestimonialSection = () => {
  return (
    <div className="w-full py-16 lg:py-24 overflow-hidden">
      <div className="mx-[80px] px-[32px]">
        <div className="relative z-10">
          <div className="absolute top-[-40%] right-[-18%] w-[300px] h-[300px] rounded-full bg-barbershop-gold/10 z-0"></div>
          <div className="absolute bottom-[-40%] left-[-18%] w-[250px] h-[250px] rounded-full bg-barbershop-gold/10 z-0"></div>

          <div className="max-w-3xl mx-auto mb-12 group text-center transition-all duration-500 animate-fadeInUp opacity-100">
            <p className="text-barbershop-gold font-medium mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              What Our Clients Say
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-barbershop-gold from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-zinc-700 hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="flex-1">
                <div className="absolute top-12 left-4 text-barbershop-gold text-4xl font-serif mb-4">
                  "
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-barbershop-gold/10 rounded-tl-full z-0"></div>
                <CardContent className="flex flex-col gap-4 pt-0 mt-16">
                  <p className="text-white">
                    I've been getting my hair cut at PMC Barbershop for over 2
                    years now. The attention to detail is unmatched, and the
                    atmosphere is always welcoming. My barber remembers exactly
                    how I like my fade every time!
                  </p>
                  <div className="absolute bottom-24 right-8 text-barbershop-gold text-4xl font-serif">
                    "
                  </div>
                </CardContent>
              </div>
              <div className="border-t-2 flex gap-4 items-center justify-center pt-6 mt-auto">
                <div className="flex text-amber-500">
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                </div>
                <div className="border-l-4 border-barbershop-gold rounded-md h-8"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Mike Johnson</h4>
                </div>
              </div>
            </Card>

            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-zinc-700 hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="flex-1">
                <div className="absolute top-12 left-4 text-barbershop-gold text-4xl font-serif mb-4">
                  "
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-barbershop-gold/10 rounded-tl-full z-0"></div>
                <CardContent className="flex flex-col gap-4 pt-0 mt-16">
                  <p className="text-white">
                    As someone who's particular about their haircut, I was
                    nervous trying a new place. The team at PMC took their time
                    to understand what I wanted and delivered exactly that. Will
                    definitely be coming back!
                  </p>
                  <div className="absolute bottom-24 right-8 text-barbershop-gold text-4xl font-serif">
                    "
                  </div>
                </CardContent>
              </div>
              <div className="border-t-2 flex gap-4 items-center justify-center pt-6 mt-auto">
                <div className="flex text-amber-500">
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                </div>
                <div className="border-l-4 border-barbershop-gold rounded-md h-8"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">David Martinez</h4>
                </div>
              </div>
            </Card>

            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-zinc-700 hover:border-barbershop-gold/40 relative overflow-hidden group">
              <div className="flex-1">
                <div className="absolute top-12 left-4 text-barbershop-gold text-4xl font-serif mb-4">
                  "
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-barbershop-gold/10 rounded-tl-full z-0"></div>
                <CardContent className="flex flex-col gap-4 pt-0 mt-16">
                  <p className="text-white">
                    The hot towel shave experience at PMC Barbershop is
                    phenomenal! It's the perfect blend of old-school barbering
                    with modern techniques. My beard has never looked better.
                  </p>
                  <div className="absolute bottom-24 right-8 text-barbershop-gold text-4xl font-serif">
                    "
                  </div>
                </CardContent>
              </div>
              <div className="border-t-2 flex gap-4 items-center justify-center pt-6 mt-auto">
                <div className="flex text-amber-500">
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                  <div className="mr-1">★</div>
                </div>
                <div className="border-l-4 border-barbershop-gold rounded-md h-8"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Chris Taylor</h4>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
