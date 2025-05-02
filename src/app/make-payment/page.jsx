"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
); // Replace with your Stripe Publishable Key

const MakePaymentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const stripe = await stripePromise;

      // Call the Next.js API route to create a Checkout Session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Number(formData.amount),
          description: formData.description,
          name: formData.name, // Customer name
          email: formData.email, // Optional email
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create Stripe Checkout session");
      }

      const session = await response.json();

      // Redirect to Stripe Checkout
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Make a Payment
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Secure online payment for our services
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Amount (USD)
              </label>
              <div className="relative ">
                <span className="absolute  inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  required
                  step="0.01"
                  min="0"
                  value={formData.amount}
                  onChange={handleChange}
                  className="pl-7 block w-full rounded-md  border-gray-300 border  dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 border dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                placeholder="Your Name"
              />
            </div>

            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 border dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Payment Description
              </label>
              <textarea
                name="description"
                id="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="block w-full rounded-md border-gray-300 border dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                placeholder="Please describe what this payment is for..."
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Proceed to Payment
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Secured by Stripe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePaymentPage;
