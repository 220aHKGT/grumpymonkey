import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PricingSectionByAnima = (): JSX.Element => {
  // Define pricing tiers data for mapping
  const pricingTiers = [
    {
      badge: { text: "ENTRY", className: "bg-[#2a2444]" },
      title: "Start Small",
      features: [
        { text: "50 Review Request Letters", enabled: true },
        { text: "Basic Analytics", enabled: true },
        { text: "No Customization", enabled: false },
      ],
      buttonText: "Choose Entry",
      isRecommended: false,
    },
    {
      badge: {
        text: "RECOMMENDED",
        className:
          "[background:linear-gradient(180deg,rgba(188,63,241,1)_0%,rgba(76,13,153,1)_50%,rgba(50,45,197,1)_100%)]",
      },
      title: "Best Value",
      features: [
        { text: "200 Review Request Letters", enabled: true },
        { text: "Advanced Tracking Dashboard", enabled: true },
        { text: "Custom Branding", enabled: true },
      ],
      buttonText: "Choose Recommended",
      isRecommended: true,
    },
    {
      badge: { text: "ADVANCED", className: "bg-[#2a2444]" },
      title: "Maximize Impact",
      features: [
        { text: "500 Review Request Letters", enabled: true },
        { text: "AI-Powered Review Targeting", enabled: true },
        { text: "Priority Support", enabled: true },
      ],
      buttonText: "Choose Advanced",
      isRecommended: false,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[50px] w-full max-w-[1296px] mx-auto py-16">
      <div className="flex flex-col items-center gap-[13px]">
        <Badge className="bg-[#18132c] text-white rounded-[100px] px-3.5 py-[9px]">
          <span className="[font-family:'Lato',Helvetica] font-bold text-sm">
            SIMPLE &amp; TRANSPARENT
          </span>
        </Badge>

        <h2 className="[font-family:'Jost',Helvetica] font-medium text-white text-[55px] text-center">
          Pricing
        </h2>

        <p className="[font-family:'Lato',Helvetica] font-medium text-[#a59eac] text-[25px] text-center whitespace-nowrap">
          Choose the plan that fits your needs
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 w-full">
        {pricingTiers.map((tier, index) => (
          <Card
            key={index}
            className={`w-full max-w-[416px] bg-[#18132c] rounded-[30px] ${!tier.isRecommended ? "border border-solid border-[#322b4e]" : "bg-[#18132b] border-none"}`}
          >
            <CardContent className="p-8">
              <div className="mb-6">
                <Badge
                  className={`inline-flex items-center justify-center gap-2.5 px-3.5 py-[9px] rounded-[100px] ${tier.badge.className}`}
                >
                  <span className="[font-family:'Lato',Helvetica] font-bold text-white text-sm">
                    {tier.badge.text}
                  </span>
                </Badge>
              </div>

              <h3 className="[font-family:'Jost',Helvetica] font-medium text-white text-[35px] mb-10">
                {tier.title}
              </h3>

              <div className="flex flex-col gap-[15px] mb-10">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div
                      className={`w-1.5 h-1.5 rounded-sm ${feature.enabled ? "bg-[#b13ae9]" : "bg-[#a59eaccc]"}`}
                    />
                    <span
                      className={`[font-family:'Lato',Helvetica] font-normal text-lg ${feature.enabled ? "text-[#f0e7fa]" : "text-[#a59eac]"}`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full h-[50px] rounded-[100px] ${
                  tier.isRecommended
                    ? "[background:linear-gradient(180deg,rgba(188,63,241,1)_0%,rgba(76,13,153,1)_50%,rgba(50,45,197,1)_100%)] border-none font-semibold"
                    : "bg-transparent border border-solid border-white font-medium"
                } [font-family:'Jost',Helvetica] text-white text-lg`}
              >
                {tier.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
