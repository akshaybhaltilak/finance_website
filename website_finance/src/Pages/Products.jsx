// src/pages/Branches.jsx
import { Link } from "react-router-dom";

const branches = [
  {
    city: "AKOLA",
    type: "Head Office",
    name: "Tirupati Agency",
    address: "Shop No. 2, Shastri Complex, Tower Chowk, Akola - 444001",
    phone: ["9850366753", "9175854236"],
    email: "tirupatiagencies1234@gmail.com",
    timing: "Mon-Sat: 9:30 AM - 7:00 PM"
  },
  {
    city: "BULDHANA",
    type: "Branch Office",
    name: "Tirupati Finance",
    address: "Coming Soon - Buldhana Location",
    phone: ["9850366753"],
    email: "tirupatiagencies1234@gmail.com",
    timing: "Mon-Sat: 9:30 AM - 7:00 PM"
  },
  {
    city: "DHULE",
    type: "Branch Office",
    name: "Tirupati Finance",
    address: "Coming Soon - Dhule Location",
    phone: ["9850366753"],
    email: "tirupatiagencies1234@gmail.com",
    timing: "Mon-Sat: 9:30 AM - 7:00 PM"
  },
  {
    city: "YAVATMAL",
    type: "Branch Office",
    name: "Tirupati Finance",
    address: "Coming Soon - Yavatmal Location",
    phone: ["9850366753"],
    email: "tirupatiagencies1234@gmail.com",
    timing: "Mon-Sat: 9:30 AM - 7:00 PM"
  },
];

const partnerBanks = [
  {
    name: "State Bank of India",
    logo: "🏦",
    services: ["Home Loans", "Personal Loans", "Business Loans"]
  },
  {
    name: "HDFC Bank",
    logo: "💳",
    services: ["Personal Loans", "Business Loans", "Vehicle Loans"]
  },
  {
    name: "ICICI Bank",
    logo: "🏢",
    services: ["Home Loans", "Personal Loans", "Business Banking"]
  },
  {
    name: "Bank of Maharashtra",
    logo: "🔷",
    services: ["Home Loans", "Business Loans", "Agricultural Loans"]
  },
  {
    name: "Axis Bank",
    logo: "🎯",
    services: ["Personal Loans", "Business Loans", "Loan Against Property"]
  },
  {
    name: "Punjab National Bank",
    logo: "🟡",
    services: ["Home Loans", "Business Loans", "MSME Loans"]
  },
  {
    name: "Bank of Baroda",
    logo: "🔴",
    services: ["Home Loans", "Personal Loans", "Business Finance"]
  },
  {
    name: "Canara Bank",
    logo: "🟡",
    services: ["Home Loans", "Business Loans", "Educational Loans"]
  },
];

export default function Branches() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent mb-6">
            Our Branches & Network
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving you across multiple locations with trusted financial services and partnerships with India's leading banks.
          </p>
        </div>

        {/* Branches Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Branch Network</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our branches for personalized financial assistance and expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                <div className={`p-1 ${
                  branch.type === "Head Office" 
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500" 
                    : "bg-gradient-to-r from-green-500 to-blue-500"
                }`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{branch.city}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        branch.type === "Head Office" 
                          ? "bg-indigo-100 text-indigo-700" 
                          : "bg-green-100 text-green-700"
                      }`}>
                        {branch.type}
                      </span>
                    </div>
                    <div className="text-3xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                      {branch.type === "Head Office" ? "🏢" : "📍"}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">{branch.name}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{branch.address}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Contact:</p>
                      <div className="space-y-1">
                        {branch.phone.map((phone, idx) => (
                          <a 
                            key={idx}
                            href={`tel:${phone}`}
                            className="block text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            📞 +91 {phone}
                          </a>
                        ))}
                        <a 
                          href={`mailto:${branch.email}`}
                          className="block text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          📧 {branch.email}
                        </a>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Business Hours:</p>
                      <p className="text-gray-600 text-sm">{branch.timing}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-6 mt-6 border-t border-gray-100">
                    <Link
                      to="/contact"
                      className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium text-center hover:bg-gray-200 transition-colors duration-200"
                    >
                      Get Directions
                    </Link>
                    <a
                      href={`tel:${branch.phone[0]}`}
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium text-center hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Call Branch
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Partnerships Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Partner Banks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with India's leading nationalized and private banks to bring you the best financial products and services.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {partnerBanks.map((bank, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:bg-indigo-50 transition-colors duration-300 border border-gray-200 group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {bank.logo}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3">{bank.name}</h3>
                  <div className="space-y-1">
                    {bank.services.map((service, idx) => (
                      <p key={idx} className="text-sm text-gray-600">• {service}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-700 font-medium">
                And many more nationalized and private banks...
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Financial Services</h2>
            <p className="text-indigo-100 text-lg">
              From loan processing to document services, we provide end-to-end financial solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: "💰", title: "Loan Processing", desc: "All types of loans" },
              { icon: "📑", title: "Document Services", desc: "Complete documentation" },
              { icon: "🏦", title: "Bank Tie-ups", desc: "Multiple bank options" },
              { icon: "⚡", title: "Quick Approval", desc: "Fast processing" },
            ].map((service, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-indigo-100 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Your Nearest Branch</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Our financial experts are ready to assist you with all your banking and loan needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Find Your Branch
              </Link>
              <a
                href="tel:9850366753"
                className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                Call Head Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}