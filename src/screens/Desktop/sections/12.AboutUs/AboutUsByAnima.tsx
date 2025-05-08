import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

// Define data for mission values
const missionValues = [
  {
    title: "Personalization Meets Innovation",
    description:
      "Every customer deserves a tailored approach. At the same time, we set new standards for resellers with our data-driven solutions.",
  },
  {
    title: "Speed Through Efficiency",
    description:
      "Your success drives us. Our optimized processes ensure you see results quickly.",
  },
  {
    title: "Trust – The Foundation for Sustainable Success",
    description:
      "Honest reviews build trust—just like we do. Our processes are transparent, our collaboration reliable, and our goal is to build long-term relationships with our clients.",
  },
  {
    title: "Sustainability – Building Something That Lasts",
    description:
      "Sustainability is not just about conserving resources—it's about creating long-term success. We think ahead and focus on sustainable growth—for our customers, our team, and our environment.",
  },
];

// Define data for team members
const teamMembers = [
  {
    name: "Brooklyn Simmons",
    position: "Marketing Coordinator",
    image: "/rectangle-9-1.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Leslie Alexander",
    position: "Web Designer",
    image: "/rectangle-9.svg",
  },
  {
    name: "Albert Flores",
    position: "President of Sales",
    image: "/rectangle-9-2.svg",
  },
  {
    name: "Jenny Wilson",
    position: "Software Developer",
    image: "/rectangle-9-3.svg",
  },
];

// Define data for why we started section
const whyWeStarted = [
  {
    title: "For Our Customers",
    description:
      "We help brands establish a solid foundation for long-term Amazon success. Our system ensures they gain more customers sustainably and strengthen their business permanently.",
  },
  {
    title: "For Our Team & Partners",
    description:
      "We operate as one team—regardless of employment status. Our goal? Grow together, improve together, and make trust visible together.",
  },
  {
    title: "For Our Environment",
    description:
      "We rely on sustainable digital solutions and resource-conscious working methods.",
  },
];

export const AboutUsByAnima = (): JSX.Element => {
  const itemVariants = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } };

  return (
    <section className="relative flex flex-col w-full max-w-[1296px] mx-auto items-center gap-[57px] py-16 z-10">

      <header className="flex flex-col w-full max-w-[614px] items-center gap-2.5">
        <Badge className="bg-[#18132c] text-white rounded-[100px] px-3.5 py-[9px]">
          <span className="[font-family:'Lato',Helvetica] font-bold text-sm">
            WHO WE ARE
          </span>
        </Badge>

        <h2 className="[font-family:'Jost',Helvetica] font-medium text-white text-[55px] text-center">
          About Us
        </h2>
      </header>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
        className="flex flex-col items-start gap-[30px] w-full"
      >
        <h3 className="[font-family:'Jost',Helvetica] font-medium text-white text-[40px]">
          Our Mission &amp; Values
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {missionValues.map((value, index) => (
            <Card
              key={index}
              className="bg-transparent border-none rounded-[30px]"
            >
              <CardContent className="flex flex-col gap-3 p-0">
                <h4 className="[font-family:'Jost',Helvetica] font-medium text-white text-[25px]">
                  {value.title}
                </h4>
                <p className="[font-family:'Lato',Helvetica] font-normal text-[#a59eac] text-lg leading-[25px]">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
        className="flex flex-col items-start gap-[30px] w-full"
      >
        <div className="flex items-end justify-between w-full">
          <h3 className="[font-family:'Jost',Helvetica] font-medium text-white text-[40px]">
            Our Team
          </h3>

          <div className="flex items-center gap-3">
            <button className="w-[50px] h-[50px] flex items-center justify-center">
              <img
                className="w-[50px] h-[50px]"
                alt="Previous team member"
                src="/arrowrightshort-2.svg"
              />
            </button>
            <button className="w-[50px] h-[50px] flex items-center justify-center">
              <img
                className="w-[50px] h-[50px]"
                alt="Next team member"
                src="/arrowrightshort.svg"
              />
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-6 w-full pb-4">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[306px] h-[435px] bg-transparent border-none"
            >
              <CardContent className="p-0 h-full relative">
                {index === 0 ? (
                  <div className="w-[306px] h-[360px] bg-[url(/rectangle-9-1.svg)] bg-cover bg-[50%_50%]">
                    <p className="absolute w-64 top-[103px] left-[25px] [font-family:'Lato',Helvetica] font-normal text-[#f0e7fa] text-base leading-[22px]">
                      {member.description}
                    </p>
                  </div>
                ) : (
                  <img
                    className="w-[306px] h-[360px] object-cover"
                    alt={`${member.name} profile`}
                    src={member.image}
                  />
                )}
                <div className="flex flex-col items-center gap-3 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[161px]">
                  <h4 className="[font-family:'Lato',Helvetica] font-semibold text-white text-xl text-center">
                    {member.name}
                  </h4>
                  <p className="[font-family:'Lato',Helvetica] font-normal text-[#a59eac] text-base text-center">
                    {member.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
        className="flex flex-col items-start gap-[30px] w-full"
      >
        <h3 className="[font-family:'Jost',Helvetica] font-medium text-white text-[40px]">
          Why We Started Hey Kunde
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {whyWeStarted.map((reason, index) => (
            <Card key={index} className="bg-transparent border-none">
              <CardContent className="flex flex-col gap-2.5 p-0">
                <h4 className="[font-family:'Jost',Helvetica] font-medium text-white text-[25px]">
                  {reason.title}
                </h4>
                <p className="[font-family:'Lato',Helvetica] font-normal text-[#a59eac] text-base leading-[22px]">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>
    </section>
  );
};
