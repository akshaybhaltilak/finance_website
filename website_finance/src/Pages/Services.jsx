// src/pages/Services.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

const loanServices = [
  {
    title: "Personal Loan",
    description: "Quick personal loans with minimal documentation and fast approval. Get funds for your personal needs with competitive interest rates.",
    icon: "💰",
    features: ["Minimal Documentation", "Fast Approval", "Flexible Tenure", "No Hidden Charges"]
  },
  {
    title: "Business Loan",
    description: "Flexible funding options to grow your business effortlessly. Scale your operations with our tailored business solutions.",
    icon: "🏢",
    features: ["Working Capital", "Business Expansion", "Equipment Financing", "Quick Disbursal"]
  },
  {
    title: "Home Loan",
    description: "Affordable home loans with flexible EMI options and best interest rates. Turn your dream home into reality.",
    icon: "🏠",
    features: ["Low Interest Rates", "Long Tenure", "Balance Transfer", "Top-up Loans"]
  },
  {
    title: "Mortgage Loan",
    description: "Secure a loan with property mortgage at competitive interest rates. Unlock the value of your property.",
    icon: "📄",
    features: ["High Loan Amount", "Flexible Repayment", "Property Mortgage", "Quick Processing"]
  },
  {
    title: "Vehicle Loan",
    description: "Easy vehicle loans for two‑wheelers, cars, and commercial vehicles. Drive home your favorite vehicle today.",
    icon: "🚗",
    features: ["New & Used Vehicles", "Low Down Payment", "Fast Approval", "Insurance Assistance"]
  },
];

const documentServices = [
  {
    title: "Search Report",
    description: "Comprehensive property search reports to verify ownership, encumbrances, and legal status of properties.",
    icon: "🔍",
    features: ["Title Verification", "Encumbrance Check", "Legal Status", "Historical Records"]
  },
  {
    title: "Valuation Report",
    description: "Professional property valuation services for accurate market assessment and fair price determination.",
    icon: "📊",
    features: ["Market Analysis", "Expert Valuation", "Detailed Report", "Legal Compliance"]
  },
  {
    title: "Estimate/Cross Verification",
    description: "Accurate property estimation and cross-verification services to ensure transaction transparency.",
    icon: "✅",
    features: ["Technical Estimation", "Cross Verification", "Quality Check", "Document Validation"]
  },
  {
    title: "Charge Creation on Property Card/7/12",
    description: "Legal charge creation services on property documents including 7/12 extracts and property cards.",
    icon: "📑",
    features: ["Legal Charge Creation", "Property Card Update", "7/12 Extract", "Bank Compliance"]
  },
  {
    title: "Equitable Mortgage",
    description: "Complete equitable mortgage services including documentation and registration process.",
    icon: "🏦",
    features: ["Mortgage Documentation", "Legal Registration", "Bank Compliance", "Security Creation"]
  },
  {
    title: "Registered Mortgage",
    description: "Registered mortgage services with proper legal documentation and government registration.",
    icon: "📋",
    features: ["Legal Documentation", "Government Registration", "Stamp Duty", "Registration Process"]
  },
  {
    title: "Bank Sanction Letter",
    description: "Professional assistance in obtaining and processing bank sanction letters for loans.",
    icon: "📜",
    features: ["Document Preparation", "Bank Coordination", "Quick Processing", "Legal Compliance"]
  },
  {
    title: "PAN Card & Aadhaar Card Services",
    description: "Assistance with PAN card applications, Aadhaar services, and document verification.",
    icon: "🆔",
    features: ["New Applications", "Corrections", "Linking Services", "Verification"]
  },
  {
    title: "Bank Draft Services",
    description: "Convenient bank draft issuance and processing services for various financial transactions.",
    icon: "💳",
    features: ["Draft Issuance", "Quick Processing", "Secure Transactions", "Multiple Banks"]
  },
  {
    title: "Borrower Sale Deed",
    description: "Professional sale deed preparation and verification services for borrowers.",
    icon: "📑",
    features: ["Deed Preparation", "Legal Verification", "Registration Assistance", "Mutation Services"]
  },
  {
    title: "Payment Options & QR Code",
    description: "Multiple payment options including QR code payments for convenient transactions.",
    icon: "📱",
    features: ["QR Code Payments", "Online Transfers", "Cash Handling", "Digital Receipts"]
  },
  {
    title: "Leave and License",
    description: "Comprehensive leave and license agreement services for rental properties with legal validity.",
    icon: "📝",
    features: ["Agreement Drafting", "Legal Registration", "Stamp Duty", "Notarization"]
  },
  {
    title: "Notary Services",
    description: "Professional notary services for document attestation, verification, and legal certification.",
    icon: "🖋️",
    features: ["Document Attestation", "Legal Verification", "Certification", "Authentication"]
  },
  {
    title: "E-Stamp Services",
    description: "Convenient e-stamp paper services for all your legal documents and agreements.",
    icon: "🖨️",
    features: ["E-Stamp Paper", "Online Service", "Legal Validity", "Quick Processing"]
  },
  {
    title: "Sale Deed",
    description: "Professional sale deed preparation and registration services for property transactions.",
    icon: "🏘️",
    features: ["Deed Preparation", "Legal Drafting", "Registration", "Mutation Services"]
  },
];

const feeStructure = {
  maxLoanAmount: "2,50,00,000",
  charges: [
    { name: "Stamp Duty", rate: "0.30%", amount: "As per property value" },
    { name: "Registration Fees", rate: "0.5%", amount: "Max ₹15,000" },
    { name: "DHC Charges", rate: "Fixed", amount: "₹300" },
    { name: "Equitable Mortgage", rate: "Fixed", amount: "₹1,300" }
  ]
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("loans");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions and document services tailored to meet your unique needs. 
            Experience excellence with Tirupati Finance.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab("loans")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "loans"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Loan Services
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "documents"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Document Services
            </button>
          </div>
        </div>

        {/* Loan Services */}
        {activeTab === "loans" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Loan Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our wide range of loan products designed to fulfill your financial aspirations 
                with competitive rates and flexible terms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loanServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                >
                  <div className="p-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                  <div className="p-8">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                      <Link
                        to="/contact"
                        className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium text-center hover:bg-gray-200 transition-colors duration-200"
                      >
                        Enquire
                      </Link>
                      <Link
                        to="/apply"
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium text-center hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fee Structure Section */}
            <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
                <h3 className="text-2xl font-bold text-white text-center">Loan Fee Structure</h3>
                <p className="text-indigo-100 text-center mt-2">Maximum Loan Amount: ₹{feeStructure.maxLoanAmount}</p>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {feeStructure.charges.map((charge, index) => (
                    <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">{charge.name}</h4>
                      <p className="text-2xl font-bold text-indigo-600 mb-1">{charge.rate}</p>
                      <p className="text-gray-600 text-sm">{charge.amount}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-800 mb-3 text-center">Total Charges Calculation</h4>
                  <p className="text-yellow-700 text-center">
                    Total charges vary based on loan amount and property value. Contact us for exact calculation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Document Services */}
        {activeTab === "documents" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Document Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional document processing and legal services to ensure smooth property transactions 
                and compliance with all regulatory requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                >
                  <div className="p-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                  <div className="p-8">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Services Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                      <Link
                        to="/contact"
                        className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium text-center hover:bg-gray-200 transition-colors duration-200"
                      >
                        Get Quote
                      </Link>
                      <Link
                        to="/apply"
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-medium text-center hover:from-green-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        Start Service
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Options Section */}
            <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Convenient Payment Options</h3>
                <p className="text-green-100 text-lg">Multiple secure payment methods available for your convenience</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Accepted Payment Methods:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                      QR Code Payments
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                      Online Bank Transfers
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                      UPI Payments
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                      Cash Payments
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                      Bank Drafts
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-6 rounded-2xl inline-block">
                    <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-gray-500">QR Code Image</span>
                    </div>
                    <p className="text-gray-600 font-semibold">Scan to Pay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Service?</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Our experts are here to guide you through the process and help you select the perfect service for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-indigo-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Consult Our Experts
            </Link>
            <a
              href="tel:+911234567890"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-200"
            >
              Call Now: +91 1234567890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}