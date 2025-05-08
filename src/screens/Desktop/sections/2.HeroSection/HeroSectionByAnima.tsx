import { PhoneIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const HeroSectionByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[713px] items-center gap-[43px] mx-auto">
      <h1 className="mt-8 w-full font-['Jost',Helvetica] font-medium text-white text-[80px] text-center tracking-[0] leading-[90px]">
        Your Customers
        <br />
        Love Your Product...
      </h1>

      <h2 className="w-full font-['Jost',Helvetica] font-medium text-[#f0e7fa] text-[40px] text-center tracking-[0] leading-[normal]">
        But Where Are The Reviews?
      </h2>

      <div className="flex items-center gap-3">
        <Button className="h-[62px] px-[35px] py-2.5 rounded-[100px] font-['Jost',Helvetica] font-semibold text-white text-lg bg-gradient-to-b from-[rgba(188,63,241,1)] via-[rgba(76,13,153,1)] to-[rgba(50,45,197,1)] border-none">
          <PhoneIcon className="w-3 h-3 mr-2" />
          Book a Call
        </Button>

        <Button
          variant="outline"
          className="h-[60px] px-[35px] py-2.5 rounded-[100px] font-['Jost',Helvetica] font-medium text-white text-lg border-white"
        >
          Get More Reviews
        </Button>
      </div>
    </section>
  );
};
