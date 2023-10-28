import React from "react";
import { Button } from "./ui/button";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";


interface Ads {
  title: string;
  text: string;
  img: StaticImageData;
  color: string;
  btnColor: string;
  className?: string;
}

const Ads = ({ title, text, img, color, btnColor, className }: Ads) => {
  return (
		<div
			className={cn("w-full rounded-md h-[21rem] p-6 relative", className)}
			style={{ backgroundColor: color }}>
			<div className="space-y-4">
				<h2 className="text-white lg:w-72">{title}</h2>
				<p className="text-white lg:w-80 text-sm lg:text-medium font-light">{text}</p>
				<Button style={{ backgroundColor: btnColor }}>Rental car</Button>
			</div>
			{/* 
      <div className="absolute  top-2">
        <svg
          width="628"
          height="360"
          viewBox="0 0 628 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="230.5"
            cy="304.5"
            r="387.5"
            stroke="white"
            stroke-opacity="0.06"
            stroke-width="20"
          />
        </svg>
      </div>
      <div className="absolute  top-4">
        <svg
          width="565"
          height="360"
          viewBox="0 0 565 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="230"
            cy="305"
            r="325"
            stroke="white"
            stroke-opacity="0.06"
            stroke-width="20"
          />
        </svg>
      </div>
      <div className="absolute  top-0">
        <svg
          width="503"
          height="328"
          viewBox="0 0 503 328"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="230.5"
            cy="272.5"
            r="262.5"
            stroke="white"
            stroke-opacity="0.06"
            stroke-width="20"
          />
        </svg>
      </div>
      <div className="absolute  top-1/4">
        <svg
          width="420"
          height="265"
          viewBox="0 0 420 265"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="210"
            cy="210"
            r="200"
            stroke="white"
            stroke-opacity="0.06"
            stroke-width="20"
          />
        </svg>
      </div>
      <div className="absolute  top-2/4">
        <svg
          width="295"
          height="203"
          viewBox="0 0 295 203"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="147.5"
            cy="147.5"
            r="137.5"
            stroke="white"
            stroke-opacity="0.06"
            stroke-width="20"
          />
        </svg>
      </div>
      <div className="absolute  top-3/4">
        <svg
          width="170"
          height="140"
          viewBox="0 0 170 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="85"
            cy="85"
            r="75"
            stroke="white"
            stroke-opacity="0.06"
            stroke-width="20"
          />
        </svg>
      </div> */}

			<div className="absolute left-0 right-0 lg:left-28 lg:right-20 bottom-4">
				<Image
					src={img}
					alt="ad image"
					style={{
						width: "100%",
						height: "auto",
					}}
					className="select-none "
				/>
			</div>
		</div>
	)
};

export default Ads;
