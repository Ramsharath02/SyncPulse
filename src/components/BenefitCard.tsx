import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className="group p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BenefitCard;