
import React from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  level?: number;
  className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  icon,
  level,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "relative group flex items-center rounded-full bg-white px-4 py-2 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      {icon && <div className="mr-2">{icon}</div>}
      <span className="text-sm font-medium text-gray-900">{name}</span>
      {level && (
        <div className="ml-2">
          <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-black rounded-full"
              style={{ width: `${Math.min(100, Math.max(0, level))}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
