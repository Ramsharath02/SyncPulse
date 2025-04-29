import React from 'react';
import SubscriptionForm from './SubscriptionForm';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-600">SyncPulse</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SyncPulse is a weekly newsletter dedicated to helping professionals, freelancers, 
              and startups navigate the rapidly evolving landscape of work and productivity.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In an era where remote work, AI tools, and digital collaboration are transforming 
              how we work, staying informed is crucial. Our curated insights help you adapt, 
              optimize your workflow, and leverage cutting-edge tools to boost your productivity.
            </p>
            <p className="text-gray-700 font-medium">
              Join thousands of forward-thinking professionals who read SyncPulse every week.
            </p>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">MS</div>
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs">KL</div>
              </div>
              <p className="text-sm text-gray-600">Joined by 2,000+ professionals</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <SubscriptionForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;