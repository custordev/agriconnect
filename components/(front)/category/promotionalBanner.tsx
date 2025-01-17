import React from "react";

import Image from "next/image";
import { Button } from "./Button";

interface PromotionalBannerProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#8B2323] to-[#A52A2A] text-white">
      <div className="flex items-center justify-between px-6 py-8">
        <div className="max-w-[50%] space-y-3">
          <h2 className="text-2xl font-bold text-[#FFD700]">{title}</h2>
          <p className="text-sm text-gray-200">{description}</p>
          <Button
            onClick={onButtonClick}
            className="bg-[#FFD700] text-[#8B2323] hover:bg-[#FFC700] transition-colors"
          >
            {buttonText}
          </Button>
        </div>
        <div className="absolute right-0 top-0 h-full w-[45%]">
          <Image
            width={1080}
            height={1080}
            src="/spices-image.png"
            alt="Colorful spices in wooden scoops"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
