import Image from "next/image";
import { HeroType } from "../type";
import { Button } from "@/components/ui/button";

export const HeroCard = ({ item }: { item: HeroType }) => {
  return (
    <div className="relative rounded-3xl  overflow-hidden w-full h-full">
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 1024px) 100vw, 320px"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex flex-col justify-end px-8 h-full">
          <div className="flex max-md:space-y-4 flex-col md:flex-row md:justify-between md:items-end mb-8">
            <div className="flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-bold text-white  mb-4 leading-tight">
                {item.name}
              </h2>
              <p className="text-white/80 w-full md:max-w-md  text-sm lg:text-base leading-tight">
                {item.text}
              </p>
            </div>
            <Button className="cursor-pointer w-fit bg-white hover:bg-white/80 rounded-full  text-black">
              {item.actionText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
