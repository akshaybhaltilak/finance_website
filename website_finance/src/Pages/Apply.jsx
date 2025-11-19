// src/pages/Apply.jsx
import { useState } from "react";

export default function Apply() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "Personal Loan",
    amount: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.consent) {
      alert("Please agree to the terms before submitting.");
      return;
    }

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Application submitted successfully!");
        setForm({ name: "", phone: "", product: "Personal Loan", amount: "", consent: false });
      } else {
        alert("Failed to submit. Try again.");
      }
    } catch (err) {
      alert("Network error. Please try later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">Apply for a Loan</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Select Product</label>
            <select
              name="product"
              value={form.product}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option>Personal Loan</option>
              <option>Business Loan</option>
              <option>Home Loan</option>
              <option>Mortgage Loan</option>
              <option>Vehicle Loan</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Loan Amount</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
            />
            <p className="text-gray-700">I agree to the terms & conditions.</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}