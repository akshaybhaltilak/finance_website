import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-xl font-bold">Tirupati Finance</div>
          <div className="mt-2 text-sm text-gray-300">Trusted loans and financial services. Local support and transparent terms.</div>
        </div>
        <div>
          <div className="font-semibold">Quick links</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/apply">Apply</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-sm">Phone: +91 12345 67890</div>
          <div className="text-sm">Email: support@tirupatifinance.example</div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Tirupati Finance — All rights reserved.</div>
    </footer>
  );
}
