// src/pages/About.jsx
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent mb-6">
            About Tirupati Finance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted financial partner with over a decade of experience in providing 
            reliable loan solutions and comprehensive financial services.
          </p>
        </div>

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content Section */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>Tirupati Finance</strong> is a trusted financial service provider committed to offering
                easy, fast, and reliable loan solutions to individuals and businesses.
                With a strong focus on transparency and customer satisfaction, we have
                helped thousands achieve their dreams through flexible loan products and
                professional support.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Located in the heart of Akola, we have built a reputation for excellence
                and reliability in the financial services sector, serving clients with
                dedication and expertise.
              </p>
            </div>
          </div>

          {/* Founder Photo & Contact Section */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-6">
              <div className="w-48 h-48 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 border-4 border-white/30">
                <span className="text-white/80 text-lg font-medium">Founder Photo</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Tirupati Agency</h3>
              <p className="text-indigo-100">Your Trusted Financial Partner</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center bg-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-lg">📧</span>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a 
                    href="mailto:tirupatiagencies1234@gmail.com" 
                    className="text-indigo-100 hover:text-white transition-colors"
                  >
                    tirupatiagencies1234@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center bg-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <p className="font-semibold">Contact Numbers</p>
                  <div className="space-y-1">
                    <a 
                      href="tel:9850366753" 
                      className="block text-indigo-100 hover:text-white transition-colors"
                    >
                      +91 98503 66753
                    </a>
                    <a 
                      href="tel:9175854236" 
                      className="block text-indigo-100 hover:text-white transition-colors"
                    >
                      +91 91758 54236
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start bg-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-indigo-100">
                    Shop No. 2, Shastri Complex,<br />
                    Tower Chowk, Akola - 444001<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h2 className="text-4xl font-bold text-indigo-600 mb-2">10+ Years</h2>
            <p className="text-gray-700 font-medium">Experience in Financial Services</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h2 className="text-4xl font-bold text-green-600 mb-2">5,000+</h2>
            <p className="text-gray-700 font-medium">Loans Successfully Disbursed</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h2 className="text-4xl font-bold text-purple-600 mb-2">8+ Branches</h2>
            <p className="text-gray-700 font-medium">Serving Across the Region</p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">🎯</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              To empower individuals and businesses with easy access to financial
              support, ensuring a transparent, secure, and customer-friendly loan
              experience. We strive to make financial dreams achievable for everyone.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">👁️</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-purple-100 text-lg leading-relaxed">
              To become the most trusted and accessible financial partner known for
              reliability, innovation, and customer satisfaction in the lending
              industry across Maharashtra and beyond.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Tirupati Finance?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "Quick Processing", desc: "Fast loan approval and disbursement" },
              { icon: "🔒", title: "Secure & Safe", desc: "100% secure transactions and data privacy" },
              { icon: "💎", title: "Transparent", desc: "No hidden charges, clear terms" },
              { icon: "👥", title: "Expert Support", desc: "Dedicated customer service team" },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors duration-300">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your financial needs. Our expert team is here to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9850366753"
                className="px-8 py-4 bg-white text-indigo-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Call Now
              </a>
              <a
                href="mailto:tirupatiagencies1234@gmail.com"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-200"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}