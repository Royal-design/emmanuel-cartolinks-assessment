import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { ServiceType } from "../type";

export const ServiceCard = ({ name, image, text, isNew }: ServiceType) => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-xl hover:shadow-md hover:dark:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-2px_rgba(255,255,255,0.1)] transition-all duration-200 h-full">
      <div className="w-10 flex-shrink-0">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="w-10 h-10 rounded-lg object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-primary text-sm lg:text-base truncate">
            {name}
          </h3>
          {isNew && (
            <span className="inline-flex items-center px-2 py-[2px] text-xs font-medium bg-secondary hover:bg-secondary/80 text-white rounded-full whitespace-nowrap flex-shrink-0">
              New
            </span>
          )}
        </div>

        <p className="text-primary-dark dark:text-white text-[11px] leading-tight">
          {text}
        </p>
      </div>

      <Button className="h-6 px-3 rounded-full text-xs font-medium bg-primary-grey hover:bg-secondary-grey transition-colors flex-shrink-0">
        Open
      </Button>
    </div>
  );
};
