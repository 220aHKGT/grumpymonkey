import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialByAnima = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      text: "Hey Kunde doubled our reviews in 3 months!",
      name: "Jacob Jones",
      role: "Marketing Coordinator",
      image: "/ellipse-8.png",
      bgColor: "bg-[#18132c]",
      borderColor: "border-[#322b4e]",
    },
    {
      id: 2,
      text: "Super simple & effective. \nGreat ROI.",
      name: "Jane Cooper",
      role: "Director",
      image: "/ellipse-8-1.png",
      bgColor: "bg-[#0f0a23]",
      borderColor: "border-[#160f35]",
    },
    {
      id: 3,
      text: "Finally, a review system \nthat works!",
      name: "Robert Fox",
      role: "Manager",
      image: "/ellipse-8-2.png",
      bgColor: "bg-[#0f0a23]",
      borderColor: "border-[#160f35]",
    },
  ];

  // Pagination dots data
  const paginationDots = [true, false, false, false, false];

  return (
    <section className="flex flex-col w-full max-w-[966px] items-center gap-[45px] mx-auto">
      <h2 className="w-full [font-family:'Jost',Helvetica] font-medium text-white text-[55px] text-center tracking-[0] leading-normal">
        Testimonials
      </h2>

      <div className="flex items-center gap-6 w-full">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className={`flex flex-col w-[306px] ${testimonial.bgColor} rounded-[20px] border border-solid ${testimonial.borderColor} shadow-[0px_4px_15px_#00000014]`}
          >
            <CardContent className="px-[25px] py-[30px]">
              <div className="relative w-[258px] h-[174px]">
                <div className="absolute w-64 top-0 left-0 [font-family:'Lato',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[27px] whitespace-pre-line">
                  {testimonial.text}
                </div>

                <div className="absolute w-[203px] h-[50px] top-[124px] left-0 flex items-center">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </Avatar>

                  <div className="flex flex-col ml-3 gap-1">
                    <div className="[font-family:'Jost',Helvetica] font-medium text-base text-white tracking-[0] leading-normal">
                      {testimonial.name}
                    </div>
                    <div className="[font-family:'Lato',Helvetica] font-normal text-[#a59eac] text-sm tracking-[0] leading-normal">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="w-[50px] h-[50px] flex items-center justify-center">
            <img
              className="w-[50px] h-[50px]"
              alt="Previous"
              src="/arrowrightshort-2.svg"
            />
          </button>
          <button className="w-[50px] h-[50px] flex items-center justify-center">
            <img
              className="w-[50px] h-[50px]"
              alt="Next"
              src="/arrowrightshort-1.svg"
            />
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          {paginationDots.map((isActive, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-md ${
                isActive
                  ? "[background:linear-gradient(180deg,rgba(188,63,241,1)_0%,rgba(76,13,153,1)_50%,rgba(50,45,197,1)_100%)]"
                  : "bg-[#18132c]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
