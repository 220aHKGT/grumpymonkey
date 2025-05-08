import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CtaByAnima = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-2.5 p-2.5">
      <Card className="w-full border-none bg-[#18132c] rounded-[30px]">
        <CardContent className="flex items-end justify-between pt-[35px] pb-[50px] px-[50px]">
          <div className="flex flex-col items-start justify-center">
            <h2 className="font-['Jost',Helvetica] font-medium text-white text-[40px]">
              Stop Losing Sales.
            </h2>
            <h1 className="font-['Jost',Helvetica] font-medium text-white text-[55px] text-center whitespace-nowrap">
              Get More Reviews Today!
            </h1>
          </div>

          <Button className="h-[60px] px-[35px] py-2.5 rounded-[100px] font-['Jost',Helvetica] font-semibold text-white text-lg [background:linear-gradient(180deg,rgba(188,63,241,1)_0%,rgba(76,13,153,1)_50%,rgba(50,45,197,1)_100%)]">
            <PhoneIcon className="w-3 h-3 mr-2" />
            Book a Consultation
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
