import React from "react";

export const HowItWorksByAnima = (): JSX.Element => {
  // Benefits list data for mapping
  const benefits = [
    "Looks Handwritten – Not just another email",
    "Handwritten-style Envelope = Higher Open Rate",
    "Personalized & Custom-Branded",
    "QR Code for Instant Review Submission",
  ];

  return (
    <div className="flex items-center justify-between w-full py-16">
      <div className="flex flex-col max-w-[545px] items-start gap-[25px]">
        <h2 className="font-medium text-white text-[55px] [font-family:'Jost',Helvetica] leading-tight">
          Why Our Letters Work
          <br />
          Better Than Emails?
        </h2>

        <div className="flex flex-col items-start gap-[15px]">
          <p className="text-[25px] [font-family:'Lato',Helvetica] leading-normal">
            <span className="font-semibold text-[#f0e7fa]">
              Traditional review request emails?{" "}
            </span>
            <span className="font-bold text-[#b13ae9]">Ignored.</span>
          </p>

          <p className="text-[25px] [font-family:'Lato',Helvetica] leading-normal">
            <span className="font-semibold text-[#f0e7fa]">
              Our handwritten-style postcards?{" "}
            </span>
            <span className="font-bold text-[#b13ae9]">10x Better.</span>
          </p>
        </div>

        <div className="flex flex-col w-full max-w-[399px] items-start gap-2.5">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2.5 w-full">
              <div className="w-1.5 h-1.5 bg-[#b13ae9] rounded-sm" />
              <p className="[font-family:'Lato',Helvetica] font-normal text-[#a59eac] text-lg leading-[25px]">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      <img
        className="w-auto h-auto max-w-[761.44px] max-h-[761.97px]"
        alt="Handwritten-style postcard example"
        src="/test-1.png"
      />
    </div>
  );
};
