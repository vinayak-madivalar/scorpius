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
    <div className="bg-orange-100/30 rounded-full">
      <span
        className={`flex items-center gap-1 font-manrope font-medium text-sm shadow-md border border-orange-300 rounded-full px-4 py-0.5 bg-clip-text text-transparent bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 ${className}`}
      >
        {Icon && <Icon size={15} color="orange" />}
        {label}
      </span>
    </div>
  );
};

export default BadgeButton;
