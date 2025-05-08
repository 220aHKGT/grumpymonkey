import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TheProblemByAnima = (): JSX.Element => {
  // Problem bullet points data
  const problemPoints = [
    "No reviews = No trust = Lower sales",
    "Competitors are gaining while you're stuck",
    "High PPC costs, low organic traffic",
  ];

  // Solution bullet points data
  const solutionPoints = [
    "Personalized review strategy",
    "Hands-off process for you",
    "Higher conversions through handwritten notes",
  ];

  // Solution features data
  const solutionFeatures = [
    {
      icon: "/icons8-write-50-1.png",
      title: "Handwritten-style postcards",
    },
    {
      icon: "/icons8-target-50-1.png",
      title: "Tailored to your product & customers",
    },
    {
      icon: "/icons8-qr-code-50-1.png",
      title: "Instant QR code for easy review submission",
    },
    {
      icon: "/icons8-rocket-50-1-1.png",
      title: "More personal = More reviews = More sales",
    },
  ];

  return (
    <section className="w-full max-w-[1296px] mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-[72px]">
        {/* Left side - Problem description */}
        <div className="flex-1">
          <div className="mb-[174px]">
            <h2 className="font-['Jost',Helvetica] font-medium text-white text-[55px] leading-[65px]">
              98% of buyers
              <br />
              never leave a review
            </h2>
            <p className="font-['Jost',Helvetica] font-medium text-white text-[55px] leading-[65px] mt-6">
              You KNOW your product is great – but new buyers need proof!
            </p>
            <p className="font-['Jost',Helvetica] font-medium text-white text-[55px] leading-[65px] mt-6">
              Your competitors keep growing while you stay invisible...
            </p>
          </div>

          {/* The Problem section */}
          <div className="flex items-start gap-[98px]">
            <h3 className="font-['Jost',Helvetica] font-medium text-white text-[25px]">
              The Problem
            </h3>

            <div className="flex flex-col gap-2.5">
              {problemPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 bg-[#a59eaccc] rounded-sm" />
                  <p className="font-['Lato',Helvetica] font-normal text-[#a59eac] text-lg leading-[25px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution section */}
          <div className="flex items-start gap-[101px] mt-20">
            <h3 className="font-['Jost',Helvetica] font-medium text-white text-[25px]">
              The Solution
            </h3>

            <div className="flex flex-col w-[398px] gap-2.5">
              {solutionPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 bg-[#b13ae9] rounded-sm" />
                  <p className="font-['Lato',Helvetica] font-normal text-[#f0e7fa] text-lg leading-[25px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Solution card */}
        <Card className="flex-1 bg-[#18132c] border-[#322b4e] rounded-[30px]">
          <CardContent className="flex flex-col gap-[30px] p-[35px]">
            <h2 className="font-['Jost',Helvetica] font-medium text-white text-[40px]">
              We Fix This With
            </h2>

            <div className="flex flex-col gap-[15px]">
              {solutionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-[15px] bg-[#0f0a23] rounded-[20px]"
                >
                  <div className="flex w-[50px] h-[50px] items-center justify-center bg-[#1b1531] rounded-[15px]">
                    <img
                      className="w-[26px] h-[26px] object-cover"
                      alt={feature.title}
                      src={feature.icon}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-['Lato',Helvetica] font-semibold text-white text-xl">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
