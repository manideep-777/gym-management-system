import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center bg-white shadow-md p-4 fixed top-0 left-0">
        <h1 className="text-2xl font-bold text-gray-900">FitTrack</h1>
        <div className="flex gap-4">
          <Link to="/users/login" className="text-gray-900 font-semibold hover:text-blue-600">Login</Link>
          <Link to="/users/register" className="text-gray-900 font-semibold hover:text-blue-600">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-2xl mt-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to FitGym</h1>
        <p className="text-lg text-gray-600 mb-6">
          The ultimate gym management system for seamless billing, membership tracking, and more!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/users/login"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Link>
          <Link
            to="#features"
            className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="mt-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="Digital Receipts" description="Access all your receipts online, no more lost papers!" />
          <FeatureCard title="Automated Notifications" description="Stay updated on payments and gym updates effortlessly." />
          <FeatureCard title="Diet & Training Plans" description="Personalized plans to help you achieve your fitness goals." />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LandingPage;