import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define the data structure for ranking cards
interface RankingCard {
  icon: string;
  iconAlt: string;
  title: string;
  reviewCount: string;
}

export const ReviewsAndRankByAnima = (): JSX.Element => {
  // Data for the ranking cards
  const rankingCards: RankingCard[] = [
    {
      icon: "/icons8-logic-data-types-50-1.png",
      iconAlt: "Logic data",
      title: "Hard to Rank",
      reviewCount: "<50",
    },
    {
      icon: "/icons8-flame-50-1-1.png",
      iconAlt: "Flame",
      title: "Significant Ranking Boost",
      reviewCount: "100+",
    },
    {
      icon: "/icons8-rocket-50-1-1.png",
      iconAlt: "Rocket",
      title: "Top Page Rankings Possible",
      reviewCount: "500+",
    },
    {
      icon: "/icons8-trophy-50-1.png",
      iconAlt: "Trophy",
      title: "Category Leader Position",
      reviewCount: "1000+",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-2.5 p-2.5">
      <div className="flex flex-col items-center gap-[30px] w-full">
        <h2 className="w-full [font-family:'Jost',Helvetica] font-medium text-white text-[40px] text-center tracking-[0] leading-normal">
          Reviews &amp; Organic Ranking
        </h2>

        <div className="flex flex-col items-start gap-5 w-full">
          <h3 className="w-full [font-family:'Jost',Helvetica] font-medium text-white text-[25px] tracking-[0] leading-normal">
            Products With:
          </h3>

          <div className="flex items-center gap-6 w-full flex-wrap">
            {rankingCards.map((card, index) => (
              <Card
                key={index}
                className="flex-1 min-w-[306px] bg-[#0f0a23] rounded-[20px] border border-solid border-[#160f35]"
              >
                <CardContent className="flex flex-col items-start gap-[15px] p-5">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex w-[50px] h-[50px] items-center justify-center gap-2.5 px-1.5 py-2 bg-[#1b1531] rounded-[15px]">
                      <img
                        className="w-[26px] h-[26px] object-cover"
                        alt={card.iconAlt}
                        src={card.icon}
                      />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <div className="[font-family:'Lato',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-normal whitespace-nowrap">
                        {card.title}
                      </div>

                      <div className="relative h-12">
                        <div className="absolute top-0 left-0 [font-family:'Lato',Helvetica] font-extrabold text-[#b13ae9] text-[40px] tracking-[0] leading-normal whitespace-nowrap">
                          {card.reviewCount}
                        </div>
                        <div className="absolute top-[21px] left-[calc(length_of_count)] [font-family:'Lato',Helvetica] font-normal text-[#a59eac] text-lg tracking-[0] leading-normal">
                          Reviews
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
