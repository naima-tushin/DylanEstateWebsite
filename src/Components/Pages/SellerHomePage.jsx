import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SellerHomePage = () => {
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [formData, setFormData] = useState({
    owner: false,
    builder: false,
    name: "",
    country: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && (formData.phone || formData.email) && formData.message) {
      setShowOTPForm(true);
    } else {
      alert('Please fill out all required fields');
    }
  };

  return (
    <div className="w-[80%] mx-auto py-10">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold mb-6">Main Heading</h1>
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-12">Title Below Heading</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* First Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Column 1 Heading</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
            <li>List Item 4</li>
            <li>List Item 5</li>
          </ul>
        </div>
        {/* Second Column */}
        <div className="border bg-white rounded-lg">
          <h3 className="text-xl font-bold mb-4 bg-[#FCF8F4] border-b-2 pb-2 border-gray-300 p-6 px-2">
            Let's Get Started
          </h3>
          <div className="overflow-y-auto h-64">
            {/* Form */}
            {!showOTPForm ? (
              <form className="px-10 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">I am</label>
                  <div className="flex items-center space-x-4 mt-1">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="owner"
                        checked={formData.owner}
                        onChange={handleChange}
                        className="form-checkbox text-indigo-600"
                      />
                      <span className="ml-2 text-gray-700">Owner</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="builder"
                        checked={formData.builder}
                        onChange={handleChange}
                        className="form-checkbox text-indigo-600"
                      />
                      <span className="ml-2 text-gray-700">Builder</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>India</option>
                    <option>Bangladesh</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="flex mt-1">
                    <select
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block p-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>+880</option>
                      <option>+91</option>
                      <option>+1</option>
                      <option>+61</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full p-2 border border-gray-300 rounded-r-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="123-456-7890"
                    />
                  </div>
                </div>
                <h6>OR</h6>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            ) : (
              <form className="px-10 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
                  <input
                    type="text"
                    name="otp"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </form>
            )}
          </div>
          <div className="flex bg-[#FCF8F4] justify-between items-center p-6 mt-4 border-t-2 pt-2 border-gray-300 ">
            <p className="text-sm">Need Help? call 9999999</p>
           <Link to="/propertyForm"> 
              <button
                 onClick={!showOTPForm ? handleSubmit : null}
                className="bg-indigo-500 text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHomePage;
