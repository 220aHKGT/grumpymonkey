import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TheNumbersByAnima = (): JSX.Element => {
  // Data for the statistics cards
  const statsCards = [
    {
      icon: "/icons8-alert-50-1.png",
      title: "Average Amazon\nReview Rate",
      value: "1-3%",
      description: "",
      width: "w-full sm:w-[277px]",
    },
    {
      icon: "/icons8-check-50--1--1.png",
      title: "Our Letters",
      value: "15%",
      prefix: "Up to",
      suffix: "Review Rate",
      width: "w-full sm:w-[351px]",
    },
    {
      icon: "/icons8-flame-50-1-1.png",
      title: "Conversion Boost",
      value: "+20-30%",
      suffix: "Sales Increase",
      width: "w-full sm:w-[277px]",
    },
    {
      icon: "/icons8-increase-50-1.png",
      title: "Increase in Reviews",
      value: "5x",
      suffix: "More vs. Email",
      width: "w-full sm:w-[277px]",
    },
    {
      icon: "/icons8-money-50-1.png",
      title: "Lower Acos",
      value: "",
      description: "PPC Becomes More Profitable",
      width: "w-full",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-start w-full gap-8 py-16">
      <div className="w-full md:w-1/2 lg:w-[744px]">
        <img
          className="w-full h-auto object-cover"
          alt="Test"
          src="/test.png"
        />
      </div>

      <div className="flex flex-col w-full md:w-1/2 lg:w-[574px] items-start gap-[30px]">
        <h2 className="font-medium text-white text-[40px] font-['Jost',Helvetica] tracking-[0] leading-normal">
          The Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {statsCards.map((card, index) => (
            <Card
              key={index}
              className={`${card.width} bg-[#0f0a23] rounded-[20px] border-[#160f35] border`}
            >
              <CardContent className="p-5 flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div className="flex w-[50px] h-[50px] items-center justify-center bg-[#1b1531] rounded-[15px]">
                    <img
                      className="w-[26px] h-[26px] object-cover"
                      alt={card.title}
                      src={card.icon}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-['Lato',Helvetica] font-semibold text-white text-[22px] leading-normal whitespace-pre-line">
                      {card.title}
                    </h3>

                    <div className="relative h-12">
                      {card.prefix && (
                        <span className="absolute top-[21px] left-0 font-['Lato',Helvetica] font-normal text-[#a59eac] text-lg">
                          {card.prefix}
                        </span>
                      )}

                      {card.value && (
                        <span
                          className={`absolute top-0 ${card.prefix ? "left-[53px]" : "left-0"} font-['Lato',Helvetica] font-extrabold text-[#b13ae9] text-[40px] leading-normal whitespace-nowrap`}
                        >
                          {card.value}
                        </span>
                      )}

                      {card.suffix && (
                        <span
                          className={`absolute top-[21px] ${card.value === "15%" ? "left-[141px]" : card.value === "5x" ? "left-[53px]" : "left-[173px]"} font-['Lato',Helvetica] font-normal text-[#a59eac] text-lg`}
                        >
                          {card.suffix}
                        </span>
                      )}

                      {card.description && !card.value && (
                        <span className="absolute top-0 left-0 font-['Lato',Helvetica] font-normal text-[#a59eac] text-lg">
                          {card.description}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
