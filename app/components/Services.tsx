"use client";

import React, { useState } from "react";
import { services } from "../data";
import { ServiceCard } from "./ServiceCard";
import { ChevronDown } from "lucide-react";

export const Services = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-end">
        <button onClick={() => setOpen(!open)}>
          <span className="hidden sm:flex items-center space-x-1">
            <ChevronDown
              className={`h-4 w-4 text-secondary transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
            <span className="text-secondary text-sm font-medium">
              {open ? "Show less" : "Show all"}
            </span>
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 mt-4">
        {services.map((service, idx) => (
          <div key={idx} className="w-full">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};
