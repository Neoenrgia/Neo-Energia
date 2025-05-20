import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="text-3xl font-bold tracking-tight">
        <span className="text-green-600">Neo</span>
        <span className="text-gray-800">Energia</span>
      </div>
    </div>
  );
};

export default Logo;