import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Palette } from "lucide-react";
import { JSX } from "react";

const ProfessionalSection = () => {
  return (
    <div className="w-full py-16 lg:py-24 bg-background-one overflow-hidden">
      <div className="mx-[80px] px-[32px]">
        <div className="relative z-10">
          <div className="absolute top-[-24%] right-[-18%] w-[300px] h-[300px] rounded-full bg-barbershop-gold/10 z-0"></div>
          <div className="absolute bottom-[-20%] left-[-16%] w-[250px] h-[250px] rounded-full bg-barbershop-gold/10 z-0"></div>

          <div className="max-w-3xl mx-auto mb-12 group text-center transition-all duration-500 animate-fadeInUp opacity-100">
            <p className="text-barbershop-gold font-medium mb-2">
              Expert Stylists
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Meet Our Barbers
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-barbershop-gold from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Our team of skilled barbers is dedicated to providing you with the
              perfect cut and grooming experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-2 hover:border-barbershop-gold relative overflow-hidden group">
              <div className="overflow-hidden rounded-lg hover:border-2 border-barbershop-gold">
                <img
                  src="/Assets/images/gallery1.webp"
                  alt="PMC Barbershop Exterior"
                  className="w-full h-[200px] sm:h-[240px] object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <div
                  data-slot="card-content"
                  className="p-6 text-center relative"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-barbershop-gold rounded transition-all duration-300 group-hover:w-24 group-hover:bg-barbershop-gold-to-r "></div>
                  <h3 className="text-lg font-bold text-white mb-1 transition-colors duration-300 group-hover:text-barbershop-gold">
                    Jason Rodriguez
                  </h3>
                  <p className="text-sm font-semibold mb-4 text-barbershop-gold">
                    Owner &amp; Master Barber
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    With over 15 years of experience, Jason founded PMC
                    Barbershop to bring premium men's grooming services to
                    Denton. Specializing in classic cuts and straight razor
                    shaves, he combines traditional techniques with modern
                    styles.
                  </p>
                  <div className="flex justify-center gap-3 mt-4 opacity-80 transform translate-y-0 transition-all duration-300">
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
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
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
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-2 hover:border-barbershop-gold relative overflow-hidden group">
              <div className="overflow-hidden rounded-lg hover:border-2 border-barbershop-gold">
                <img
                  src="/Assets/images/gallery2.webp"
                  alt="PMC Barbershop Exterior"
                  className="w-full h-[200px] sm:h-[240px] object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <div
                  data-slot="card-content"
                  className="p-6 text-center relative"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-barbershop-gold rounded transition-all duration-300 group-hover:w-24 group-hover:bg-barbershop-gold-to-r "></div>
                  <h3 className="text-lg font-bold text-white mb-1 transition-colors duration-300 group-hover:text-barbershop-gold">
                    Marcus Williams
                  </h3>
                  <p className="text-sm font-semibold mb-4 text-barbershop-gold">
                    Senior Barber
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    Marcus brings 8 years of experience to PMC Barbershop. His
                    expertise in fades, beard sculpting, and precision lineup
                    work has earned him a loyal clientele. Known for his
                    attention to detail and consistently flawless cuts.
                  </p>
                  <div className="flex justify-center gap-3 mt-4 opacity-80 transform translate-y-0 transition-all duration-300">
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
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
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
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-2 hover:border-barbershop-gold relative overflow-hidden group">
              <div className="overflow-hidden rounded-lg hover:border-2 border-barbershop-gold">
                <img
                  src="/Assets/images/gallery3.webp"
                  alt="PMC Barbershop Exterior"
                  className="w-full h-[200px] sm:h-[240px] object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="flex flex-col gap-4 pt-0">
                <div
                  data-slot="card-content"
                  className="p-6 text-center relative"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-barbershop-gold rounded transition-all duration-300 group-hover:w-24 group-hover:bg-barbershop-gold-to-r "></div>
                  <h3 className="text-lg font-bold text-white mb-1 transition-colors duration-300 group-hover:text-barbershop-gold">
                    Terrence Jackson
                  </h3>
                  <p className="text-sm font-semibold mb-4 text-barbershop-gold">
                    Barber & Stylist
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    Terrence specializes in modern men's styling, textured cuts,
                    and hair designs. With his creative approach and technical
                    skill, he excels at transforming your look while maintaining
                    your personal style preferences.
                  </p>
                  <div className="flex justify-center gap-3 mt-4 opacity-80 transform translate-y-0 transition-all duration-300">
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
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSection;
