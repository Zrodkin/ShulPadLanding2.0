import { ReactNode } from "react";

interface IPadMockupProps {
  children: ReactNode;
  className?: string;
}

export default function IPadMockup({ children, className = "" }: IPadMockupProps) {
  return (
    <div className={`relative max-w-md mx-auto ${className}`}>
      <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* iPad status bar */}
          <div className="bg-gray-50 h-6 flex items-center justify-between px-6 text-xs">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
              <span>100%</span>
            </div>
          </div>
          {/* Content area */}
          <div className="h-96">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
