import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full py-16 lg:py-24 bg-background-one mt-24 overflow-hidden">
      <div className="mx-[80px] px-[32px]">
      <div className="relative z-10">
      <div className="absolute top-[-24%] right-[-18%] w-[300px] h-[300px] rounded-full bg-barbershop-gold/10 z-0"></div>
      <div className="absolute bottom-[-32%] left-[-20%] w-[250px] h-[250px] rounded-full bg-barbershop-gold/10 z-0"></div>
        <div className="max-w-3xl mx-auto mb-12 group text-center transition-all duration-500 animate-fadeInUp opacity-100">
          <p className="text-barbershop-gold font-medium mb-2">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            About PMC Barbershop
            <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-barbershop-gold from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
          Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side image */}
          <div className="relative">
            <img
              src="/Assets/images/about.png"
              alt="PMC Barbershop Exterior"
              className="rounded-lg w-full max-w-[600px] h-[400px] object-cover mx-auto"
            />
            <div className="absolute bottom-4 right-4 rotate-6 bg-barbershop-gold text-white px-6 py-3 rounded-tl-lg rounded-br-lg font-bold">
              5+ years
            </div>
          </div>

          {/* Right side content */}
          <div className="flex flex-col space-y-8">
            <div className="border-l-4 border-barbershop-gold pl-6 py-2">
              <p className="text-gray-600">
                Established in 2018, PMC Barbershop has been providing premium
                grooming services to the men of Denton, TX. Our mission is to
                deliver exceptional haircuts and grooming services in a
                welcoming, classic barbershop environment.
              </p>
            </div>

            <div className="bg-background/20 p-6 rounded-lg">
              <div className="text-barbershop-gold text-4xl font-serif mb-4">
                "
              </div>
              <p className="text-gray-400">
                We take pride in our attention to detail and personalized
                service, ensuring each client leaves looking and feeling their
                best. Our skilled barbers combine traditional techniques with
                modern trends to create custom styles that suit each
                individual's personality and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutSection;
