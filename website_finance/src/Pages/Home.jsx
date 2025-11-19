import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function QuickEstimator() {
  const [amount, setAmount] = useState(500000);
  const [tenure, setTenure] = useState(36);
  const [rate, setRate] = useState(11.5);

  const emi = (() => {
    const P = Number(amount);
    const r = rate / 12 / 100;
    const n = Number(tenure);
    if (!P || !n) return 0;
    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  })();

  const totalAmount = Math.round(emi * tenure);
  const totalInterest = totalAmount - amount;

  // Update rate based on loan amount
  useEffect(() => {
    if (amount <= 500000) {
      setRate(12.5);
    } else if (amount <= 2000000) {
      setRate(11.5);
    } else {
      setRate(10.5);
    }
  }, [amount]);

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-gray-200 p-8">
      <h4 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent mb-2">
        EMI Calculator
      </h4>
      <p className="text-gray-600 mb-6">Calculate your monthly payments instantly</p>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
            <span className="text-lg font-bold text-indigo-600">₹{Number(amount).toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min="50000" 
            max="5000000" 
            step="50000" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹50K</span>
            <span>₹50L</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Loan Tenure</label>
          <div className="grid grid-cols-4 gap-2">
            {[12, 24, 36, 60].map(months => (
              <button
                key={months}
                onClick={() => setTenure(months)}
                className={`py-2 rounded-lg font-medium transition-all duration-200 ${
                  tenure === months
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {months}M
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
          <div className="text-center mb-4">
            <div className="text-sm text-gray-600">Interest Rate</div>
            <div className="text-2xl font-bold text-indigo-700">{rate}% p.a.</div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monthly EMI</span>
              <span className="text-xl font-bold text-gray-800">₹{Math.round(emi).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Interest</span>
              <span className="text-lg font-semibold text-red-600">₹{totalInterest.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center border-t border-gray-200 pt-3">
              <span className="text-gray-600 font-semibold">Total Amount</span>
              <span className="text-lg font-bold text-green-600">₹{totalAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <Link 
          to="/apply" 
          className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Apply For Loan
        </Link>
      </div>
    </div>
  );
}

function BannerSlider() {
  const banners = [
    {
      id: 1,
      title: "Instant Loan Approval",
      subtitle: "Get approved in just 24 hours with minimal documentation",
      bg: "from-blue-600 to-cyan-600",
      cta: "Apply Now",
      link: "/apply"
    },
    {
      id: 2,
      title: "Lowest Interest Rates",
      subtitle: "Starting from 10.5% with flexible repayment options",
      bg: "from-green-600 to-emerald-600",
      cta: "Check Rates",
      link: "/services"
    },
    {
      id: 3,
      title: "15+ Partner Banks",
      subtitle: "Multiple banking options for the best loan deals",
      bg: "from-purple-600 to-indigo-600",
      cta: "View Partners",
      link: "/branches"
    }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 bg-gradient-to-r ${banner.bg} transition-opacity duration-1000 flex items-center ${
            index === currentBanner ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-white px-12 max-w-2xl">
            <h2 className="text-5xl font-bold mb-4">{banner.title}</h2>
            <p className="text-xl mb-8 opacity-90">{banner.subtitle}</p>
            <Link
              to={banner.link}
              className="inline-block bg-white text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {banner.cta}
            </Link>
          </div>
        </div>
      ))}
      
      {/* Banner Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function LoanProcess() {
  const steps = [
    {
      step: 1,
      title: "Apply Online",
      description: "Fill simple application form with basic details",
      icon: "📝",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Document Upload",
      description: "Upload required documents securely online",
      icon: "📄",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 3,
      title: "Verification",
      description: "Quick verification and approval process",
      icon: "✅",
      color: "from-yellow-500 to-orange-500"
    },
    {
      step: 4,
      title: "Get Money",
      description: "Amount disbursed directly to your account",
      icon: "💰",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent mb-4">
          Simple 4-Step Loan Process
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get your loan approved quickly with our streamlined process
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={step.step} className="relative">
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-3/4 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-100 z-0"></div>
            )}
            
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-6 text-center z-10">
              <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-2xl text-white font-bold mx-auto mb-4 shadow-md`}>
                {step.icon}
              </div>
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold absolute -top-2 -right-2 shadow-lg">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BannerSlider />
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent leading-tight">
              Your Trusted Partner for Financial Freedom
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              At Tirupati Finance, we provide personalized loan solutions with transparent terms and local support. 
              Experience quick approvals, competitive rates, and dedicated service.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/apply" 
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Apply For Loan
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transform hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">10+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5000+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-gray-600 text-sm">Partner Banks</div>
              </div>
            </div>
          </div>

          <div>
            <QuickEstimator />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Quick Approvals</h3>
            <p className="text-gray-600 leading-relaxed">
              Get loan approval within 24 hours with minimal documentation and fast processing.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto">
              🏦
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Multiple Lenders</h3>
            <p className="text-gray-600 leading-relaxed">
              Compare offers from 15+ partner banks & NBFCs to get the best deal.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-8 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto">
              👥
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Local Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Dedicated relationship managers across 8+ branches for personalized service.
            </p>
          </div>
        </div>

        {/* Loan Process Section */}
        <LoanProcess />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have achieved their financial goals with Tirupati Finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="px-8 py-4 bg-white text-indigo-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Apply For Loan
            </Link>
            <a
              href="tel:9850366753"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-200"
            >
              Call Now: +91 98503 66753
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}