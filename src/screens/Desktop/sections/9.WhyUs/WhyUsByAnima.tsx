import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const WhyUsByAnima = (): JSX.Element => {
  const benefits = [
    {
      highlight: "10+ Years",
      text: " Amazon Experience",
    },
    {
      highlight: "Transparent",
      text: ", data-driven approach",
    },
    {
      highlight: "No monthly fees",
      text: ", only pay for results",
    },
    {
      highlight: "Direct Amazon Seller",
      text: " Central Integration",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[872px] items-start gap-2.5 p-2.5 mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 w-full">
        <h2 className="font-medium text-white text-[80px] leading-[90px] [font-family:'Jost',Helvetica]">
          Why <br />
          Choose
          <br />
          Us?
        </h2>

        <div className="flex flex-col w-full md:w-[506px] items-start gap-[15px]">
          {benefits.map((benefit, index) => (
            <Badge
              key={index}
              className="w-full inline-flex items-center justify-center gap-2.5 px-[30px] py-[15px] bg-[#18132c] rounded-[100px] border border-solid border-[#322b4e] hover:bg-[#18132c]"
            >
              <span className="font-semibold text-[25px] [font-family:'Lato',Helvetica] whitespace-nowrap">
                <span className="text-[#b13ae9]">{benefit.highlight}</span>
                <span className="text-[#f0e7fa]">{benefit.text}</span>
              </span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
