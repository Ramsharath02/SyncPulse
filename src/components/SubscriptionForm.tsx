import React, { useState } from 'react';

const SubscriptionForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      if (email && name) {
        setSuccess(true);
        setName('');
        setEmail('');
      } else {
        setError('Please fill out all fields');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-green-800 font-semibold text-lg mb-2">Thank you for subscribing!</h3>
        <p className="text-green-700">Check your inbox soon for smart work insights.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-4 bg-white text-green-600 border border-green-300 px-4 py-2 rounded hover:bg-green-50 transition-colors"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <div id="subscribe" className="bg-white rounded-lg shadow-md p-6 transition-all">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Get Weekly Insights
      </h3>
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded mb-4 text-sm">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-1 text-sm">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1 text-sm">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default SubscriptionForm;