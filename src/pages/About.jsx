import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900">About Voltify</h1>

        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold text-red-600">Voltify</span>, your one-stop destination for the latest and greatest in electronics. From everyday essentials to flagship gadgets, we’re here to power up your tech life with quality products and dependable service.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our mission</h2>
          <p className="text-gray-700 text-base">
            At Voltify, our mission is simple: make great technology accessible to everyone. We’re passionate about connecting people with the tools they need to study, work, create, and play — at fair prices and with fast, reliable delivery.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Why choose Voltify?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Carefully selected electronics from trusted, verified brands</li>
            <li>Fast, trackable shipping on every order</li>
            <li>Secure payments to keep your data protected</li>
            <li>Friendly support and a hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our vision</h2>
          <p className="text-gray-700 text-base">
            We imagine a future where smart, reliable tech is part of everyone’s daily life. At Voltify, we’re committed to staying one step ahead — bringing you practical, future-ready devices without breaking your budget.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600 mb-2">Join the Voltify family</h3>
          <p className="text-gray-700 mb-4">
            Whether you’re a student, creator, gamer, or professional — Voltify has something built for you.
          </p>
         <Link to={'/products'}><button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
            Start Shopping
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default About;
