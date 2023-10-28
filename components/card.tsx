import React from "react";
import { Cog, Fuel, Heart, User2 } from "lucide-react";
import Image from "next/image";
import img from "public/adImage1.png";
import { Button } from "./ui/button";

const Card = () => {
  return (
    <div className="w-full h-96 group bg-white p-4 rounded-lg shadow-sm justify-between flex flex-col hover:shadow-md hover-ring-ring hover:ring-1 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3>Koenigsegg</h3>
          <h6 className="opacity-50">sport</h6>
        </div>
        <div className="opacity-50 mt-1 cursor-pointer ">
          <Heart size={20} />
        </div>
      </div>
      <div className="py-8 relative">
        <Image
          src={img}
          alt="ad image"
          style={{
            width: "100%",
            height: "auto",
          }}
          className="select-none"
        />
        <div className="absolute bg-gradient-to-t top-0 group-hover:opacity-0 transition-all duration-300 bottom-0 left-0 right-0 from-white to-transparent"></div>
      </div>
      <div className="flex item-center justify-between space-x-3 lg:space-x-0 opacity-50 font-medium py-4 text-sm">
        <div className="flex items-center space-x-2">
          <Fuel size={20} />
          <h5 className="mt-0.5">90L</h5>
        </div>
        <div className="flex items-center space-x-2">
          <Cog size={20} />
          <h5 className="mt-0.5">Manuel</h5>
        </div>
        <div className="flex items-center space-x-2">
          <User2 size={20} />
          <h5 className="mt-0.5 w-max">2 People</h5>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center">
            <span className="text-xl font-bold">$79.00 /</span>

            <h6 className="opacity-50">day</h6>
          </div>
          <h6 className="line-through opacity-50">$100.00</h6>
        </div>
        <Button>Rent Now</Button>
      </div>
    </div>
  );
};

export default Card;
