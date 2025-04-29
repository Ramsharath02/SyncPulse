import React from 'react';
import { Laptop, BrainCircuit, Users, Building2, Clock } from 'lucide-react';
import BenefitCard from './BenefitCard';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Remote Work Trends',
      description: 'Stay updated on the latest remote work strategies, tools, and best practices.',
      icon: <Laptop className="w-10 h-10 text-blue-500" />,
      color: 'bg-blue-50'
    },
    {
      title: 'AI Productivity Tools',
      description: 'Discover cutting-edge AI tools that can revolutionize your workflow.',
      icon: <BrainCircuit className="w-10 h-10 text-purple-500" />,
      color: 'bg-purple-50'
    },
    {
      title: 'Collaboration Platforms',
      description: 'Learn about the best platforms for team collaboration and communication.',
      icon: <Users className="w-10 h-10 text-green-500" />,
      color: 'bg-green-50'
    },
    {
      title: 'Digital Workplace Strategies',
      description: 'Implement effective strategies for optimizing your digital workplace.',
      icon: <Building2 className="w-10 h-10 text-orange-500" />,
      color: 'bg-orange-50'
    },
    {
      title: 'Time Management Hacks',
      description: 'Master productivity with time management techniques that actually work.',
      icon: <Clock className="w-10 h-10 text-red-500" />,
      color: 'bg-red-50'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What You'll Learn
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our newsletter covers these essential topics to help you stay productive
            and ahead of the curve in today's rapidly evolving workplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              color={benefit.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;