import { PhoneIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

// Define step data for mapping
const steps = [
  {
    number: "1",
    title: "You Choose the Product",
    points: [
      "Select the product you want to boost with reviews",
      "No tech setup, no integrations needed",
    ],
    lineHeight: "98px",
    lineSrc: "/line-2.svg",
  },
  {
    number: "2",
    title: "We Craft the Perfect Message",
    points: [
      "Custom postcard design & handwritten-style text",
      "Tailored to your brand & product to maximize conversion",
    ],
    lineHeight: "98px",
    lineSrc: "/line-2.svg",
  },
  {
    number: "3",
    title: "AI-Driven Address Validation",
    points: [
      "Ensures the highest delivery success rate",
      "Excludes refunded orders",
      {
        text: "Option to only target new customers",
        hasEmphasis: true,
        emphasisText: "only target new customers",
      },
    ],
    lineHeight: "129px",
    lineSrc: "/line-3.svg",
  },
  {
    number: "4",
    title: "See Reviews Rolling In & Take the Lead",
    points: [
      "Your customers scan the QR code & leave reviews",
      {
        text: "More reviews → Higher rankings",
        hasEmphasis: true,
        emphasisText: "Higher rankings",
      },
      "Boost visibility & dominate your category",
    ],
  },
];

export const TheSolutionByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1141px] mx-auto gap-12">
      <div className="flex flex-col items-start gap-2.5">
        <Badge className="bg-[#18132c] text-white rounded-[100px] px-3.5 py-[9px] font-bold">
          SIMPLE, SMART &amp; EFFECTIVE
        </Badge>
        <h2 className="font-medium text-[55px] text-white font-['Jost',Helvetica]">
          How it Works
        </h2>
      </div>

      <div className="flex flex-col w-full max-w-[521px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex items-start"
            style={{
              height: step.lineHeight
                ? `calc(50px + ${step.lineHeight})`
                : "auto",
            }}
          >
            <div className="relative">
              <Card className="flex items-center justify-center w-[50px] h-[50px] bg-[#1b1531] rounded-[15px] border-none">
                <span className="font-['Jost',Helvetica] font-semibold text-white text-[25px]">
                  {step.number}
                </span>
              </Card>

              {step.lineHeight && (
                <img
                  className="absolute w-px left-[25px] top-[50px]"
                  style={{ height: step.lineHeight }}
                  alt="Line"
                  src={step.lineSrc}
                />
              )}
            </div>

            <div className="flex flex-col gap-3 ml-10 mt-[7px]">
              <h3 className="font-['Jost',Helvetica] font-medium text-white text-[25px]">
                {step.title}
              </h3>

              <div className="flex flex-col gap-3">
                {step.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-[#b13ae9] rounded-sm" />

                    {typeof point === "string" ? (
                      <p className="font-['Lato',Helvetica] text-[#a59eac] text-base">
                        {point}
                      </p>
                    ) : (
                      <p className="font-['Lato',Helvetica] text-base">
                        <span className="text-[#a59eac]">
                          {point.text.split(point.emphasisText)[0]}
                        </span>
                        {point.hasEmphasis && (
                          <span className="font-bold italic text-[#f0e7fa]">
                            {point.emphasisText}
                          </span>
                        )}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Button className="h-[60px] px-[35px] py-2.5 rounded-[100px] font-['Jost',Helvetica] font-semibold text-lg text-white [background:linear-gradient(180deg,rgba(188,63,241,1)_0%,rgba(76,13,153,1)_50%,rgba(50,45,197,1)_100%)]">
          <PhoneIcon className="w-3 h-3 mr-2" />
          Book a Consultation
        </Button>

        <Button
          variant="outline"
          className="h-[60px] px-[50px] py-2.5 rounded-[100px] font-['Jost',Helvetica] font-medium text-lg text-white border-white"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};
