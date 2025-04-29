import React from 'react';
import SubscriptionForm from './SubscriptionForm';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 pt-16"
    >
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center text-center md:text-left md:items-start justify-center md:flex-col lg:flex-row lg:justify-center lg:items-center">
          <div className="max-w-2xl lg:mr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              <span className="text-blue-600">SyncPulse</span>
              <br />
              <span className="text-3xl md:text-4xl">The Future of Work & Productivity Tools</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Stay Ahead with Smart Work Trends
            </p>
            <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Get weekly insights on remote work, AI tools, collaboration platforms, 
              and productivity hacks delivered straight to your inbox.
            </p>
          </div>
          <div className="w-full max-w-md">
            <SubscriptionForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
