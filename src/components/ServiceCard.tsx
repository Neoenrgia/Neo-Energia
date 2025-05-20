import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg"
    >
      <div className="bg-green-100 p-4 rounded-full mb-4">
        <Icon size={32} className="text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
};

export default ServiceCard;