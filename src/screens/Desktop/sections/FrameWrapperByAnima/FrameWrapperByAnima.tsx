import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperByAnima = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-2.5 p-2.5">
      <Card className="w-full bg-[#18132c] rounded-[30px] border-none">
        <CardContent className="flex flex-col items-center gap-[30px] px-[50px] py-[45px]">
          <h2 className="font-medium text-white text-[40px] font-['Jost',Helvetica] tracking-[0] leading-normal">
            The More Reviews, The Higher You Rank!
          </h2>

          <Button className="h-[60px] px-[35px] py-2.5 rounded-[100px] font-['Jost',Helvetica] font-semibold text-white text-lg tracking-[0] leading-normal bg-gradient-to-b from-[rgba(188,63,241,1)] via-[rgba(76,13,153,1)] to-[rgba(50,45,197,1)]">
            <PhoneIcon className="w-3 h-3 mr-2" />
            Book a Consultation
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
