import { PhoneIcon } from "lucide-react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

// Import all sections
import { AboutUsByAnima } from "./sections/12.AboutUs/AboutUsByAnima";
import { CtaByAnima } from "./sections/8.CTA/CtaByAnima";
import { FaqSectionByAnima } from "./sections/13.FaqSection/FaqSectionByAnima";
import { FooterByAnima } from "./sections/15.Footer/FooterByAnima";
import { FrameWrapperByAnima } from "./sections/14.CTA/FrameWrapperByAnima";
import { HeroSectionByAnima } from "./sections/2.HeroSection/HeroSectionByAnima";
import { HowItWorksByAnima } from "./sections/5.HowItWorks/HowItWorksByAnima";
import { PricingSectionByAnima } from "./sections/10.PricingSection/PricingSectionByAnima";
import { ReviewsAndRankByAnima } from "./sections/7.ReviewsAndRank/ReviewsAndRankByAnima";
import { TestimonialByAnima } from "./sections/11.Testimonial/TestimonialByAnima";
import { TheNumbersByAnima } from "./sections/6.TheNumbers/TheNumbersByAnima";
import { TheProblemByAnima } from "./sections/3.TheProblem/TheProblemByAnima";
import { TheSolutionByAnima } from "./sections/4.TheSolution/TheSolutionByAnima";
import { WhyUsByAnima } from "./sections/9.WhyUs/WhyUsByAnima";

export const Desktop = (): JSX.Element => {
  const { scrollYProgress } = useViewportScroll();
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Navigation menu items
  const navItems = [
    { name: "How it Works", active: true },
    { name: "Pricing", active: false },
    { name: "About Us", active: false },
  ];

  return (
    <div className="bg-[#0a051e] flex flex-row justify-center w-full">
      <div className="bg-[#0a051e] overflow-hidden w-full max-w-[1440px] relative">
        {/* Parallax background image */}
        <motion.div style={{ y: y2 }} className="fixed inset-0 z-0 pointer-events-none">
          <img src="/files/Rectangle 3@4x.jpg" alt="" className="w-full h-full object-cover opacity-80" />
        </motion.div>
        {/* Hero section with background */}
        <div className="w-full h-[800px] relative bg-[url(/background.svg)] bg-cover bg-[50%_50%] z-10">
          {/* Navigation bar */}
          <header className="flex flex-col w-full px-16 pt-5">
            <nav className="flex items-center justify-between w-full">
              <div className="font-['Jost',Helvetica] font-semibold text-white text-[25px]">
                Logo
              </div>

              <NavigationMenu className="bg-[#0a051e] rounded-[100px] px-2.5 py-[7px]">
                <NavigationMenuList className="flex items-center gap-2.5">
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <div
                        className={`inline-flex items-center justify-center px-[15px] py-1.5 rounded-[100px] ${
                          item.active ? "bg-[#18132c]" : ""
                        }`}
                      >
                        <span className="font-['Jost',Helvetica] font-medium text-white text-base">
                          {item.name}
                        </span>
                      </div>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <Button className="flex items-center gap-2 px-[25px] py-[13px] rounded-[100px] [background:linear-gradient(180deg,rgba(188,63,241,1)_0%,rgba(76,13,153,1)_50%,rgba(50,45,197,1)_100%)] border-none">
                <PhoneIcon className="w-[11px] h-[11px]" />
                <span className="font-['Jost',Helvetica] font-semibold text-white text-base">
                  Book a Call
                </span>
              </Button>
            </nav>
          </header>

          {/* Hero section content */}
          <HeroSectionByAnima />
        </div>

        {/* Main content sections */}
        <div className="relative z-10">
          <TheProblemByAnima />

          <section className="w-full relative z-10">
            <TheSolutionByAnima />
            <HowItWorksByAnima />
            <TheNumbersByAnima />
            <ReviewsAndRankByAnima />
          </section>
          
          <FrameWrapperByAnima />
          <WhyUsByAnima />
          <PricingSectionByAnima />
          <TestimonialByAnima />
          <AboutUsByAnima />
          <FaqSectionByAnima />
          <CtaByAnima />
          <FooterByAnima />
        </div>
      </div>
    </div>
  );
};
