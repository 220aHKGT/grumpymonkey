import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FaqSectionByAnima = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "Is this compliant with Amazon TOS?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      defaultOpen: true,
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      defaultOpen: false,
    },
    {
      question: "Can I choose which customers get letters?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[50px] w-full max-w-[678px] mx-auto">
      <h2 className="w-full [font-family:'Jost',Helvetica] font-medium text-white text-[55px] text-center tracking-[0] leading-normal">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="w-full max-w-[636px]"
      >
        {faqItems.map((item, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className={`mb-5 p-5 rounded-[20px] border border-solid ${
              index === 0
                ? "bg-[#18132c] border-[#322b4e]"
                : "bg-[#0f0a23] border-[#160f35]"
            }`}
          >
            <AccordionTrigger className="[font-family:'Jost',Helvetica] font-medium text-white text-lg tracking-[0] leading-normal">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="[font-family:'Lato',Helvetica] font-normal text-[#a49eab] text-base tracking-[0] leading-[22px]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
