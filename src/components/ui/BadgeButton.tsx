import React from "react";
import { IconType } from "react-icons";

interface BadgeButtonProps {
  label: string;
  icon?: IconType;
  className?: string;
}

const BadgeButton: React.FC<BadgeButtonProps> = ({
  label,
  icon: Icon,
  className,
}) => {
  return (
    <div className=" rounded-full">
      <span
        className={`flex items-center gap-1 font-manrope font-medium text-xs sm:text-sm shadow-md border border-orange-300 rounded-full px-4 py-0.5 text-gradient-primary ${className}`}
      >
        {Icon && <Icon size={15} color="orange" />}
        {label}
      </span>
    </div>
  );
};

export default BadgeButton;
