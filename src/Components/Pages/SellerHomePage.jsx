import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/image 29.png';

const SellerHomePage = () => {
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [formData, setFormData] = useState({
    owner: false,
    builder: false,
    name: "",
    country: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      owner: false,
      builder: false,
      [name]: value === 'true',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && (formData.phone || formData.email) && formData.country) {
      setShowOTPForm(true);
    } else {
      alert('Please fill out all required fields');
    }
  };

  return (
    <div className="w-[80%] mx-auto py-10 h-[644px]">
      <h1 className="text-3xl font-normal mb-6 text-white">Sell or Rent your Property For Free</h1>
      <h2 className="text-base font-light w-[750px] mb-12 text-white">Whether you’re ready to sell or looking for answers, we’ll guide you with data and expertise specific to your needs.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto">
        <div className='items-center justify-center'>
          <h3 className="text-xl font-normal text-white mb-4 w-[340px]">Upload your property in 4 simple steps</h3>
          <ul className="space-y-2 text-white">
            <li>
              <img src={img} alt="Step 1" className="inline-block" />
              Add your properties Basic Details
            </li>
            <li>
              <img src={img} alt="Step 2" className="inline-block" />
              Add property Location
            </li>
            <li>
              <img src={img} alt="Step 3" className="inline-block" />
              Add property Features and amenities
            </li>
            <li>
              <img src={img} alt="Step 4" className="inline-block" />
              Add Price details
            </li>
            <li>
              <img src={img} alt="Step 5" className="inline-block" />
              Add your best Property Shots
            </li>
          </ul>
        </div>
        <div className="border bg-white w-[550px] -ml-12 rounded-2xl overflow-hidden">
          <h3 className="text-xl font-semibold mb-4 bg-[#FCF8F4] border-gray-500 py-4 px-10">
            LETS GET YOU STARTED !
          </h3>
          <div className="overflow-y-auto h-48 py-4">
            {!showOTPForm ? (
              <form className="px-10 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-lg font-semibold text-gray-700">
                    <span className="text-red-500 mr-1">*</span> I am:
                  </label>
                  <div className="flex items-center justify-between mt-1 w-[320px] ml-4 mb-12">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="owner"
                        value={true}
                        checked={formData.owner}
                        onChange={handleRadioChange}
                        className="form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]"
                      />
                      <span className="ml-6 text-gray-700 text-lg">Owner</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="builder"
                        value={true}
                        checked={formData.builder}
                        onChange={handleRadioChange}
                        className="form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]"
                      />
                      <span className="ml-6 text-gray-700 text-lg">Builder</span>
                    </label>
                  </div>
                </div>
                <div className='w-[340px] ml-3'>
                  <label className="block text-base font-medium text-gray-700">
                    Your Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="mt-1 block w-full p-2 border border-gray-500 rounded-md shadow-sm mb-12 sm:text-sm"
                  />
                </div>
                <div className='w-[340px] ml-3'>
                  <label className="block text-base font-semibold text-gray-700">
                    Country
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-500 rounded-md shadow-sm mb-12 sm:text-sm"
                  >
                    <option>Select Country</option>
                    <option>India</option>
                    <option>Bangladesh</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div className='w-[340px] ml-3'>
                  <label className="block text-base font-semibold text-gray-700">
                    Phone Number <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex mt-1 gap-1">
                    <select
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleChange}
                      className="block p-2 border border-gray-500 rounded-l-md shadow-sm sm:text-sm"
                    >
                      <option>+91</option>
                      <option>+880</option>
                      <option>+1</option>
                      <option>+61</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full p-2 border border-gray-500 rounded-r-md shadow-sm sm:text-sm"
                      placeholder="000-000-0000"
                    />
                  </div>
                </div>
                <h6>OR</h6>
                <div className='w-[340px] ml-3'>
                  <label className="block text-base font-semibold text-gray-700">
                    Email
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    className="mt-1 block w-full p-2 border border-gray-500 rounded-md shadow-sm mb-12 sm:text-sm"
                  />
                </div>
              </form>
            ) : (
              <form className="px-10 space-y-4 w-[480px]">
                <div>
                  <div className='flex justify-between'>
                    <label className="block text-lg font-semibold text-gray-700 mb-6">Enter OTP sent on 999-999-9999<span className="text-red-500 ml-1">*</span>
                    </label>
                    <h1 className='underline text-sm'>Change</h1>
                  </div>
                  <input
                    type="text"
                    name="otp"
                    placeholder='0 0 0 0 0'
                    className="mt-1 block w-full p-2 border border-gray-500 rounded-md shadow-sm mb-4 sm:text-sm"
                  />
                  <div className='flex justify-end'> {/* Added flex justify-end for right alignment */}
                    <h1 className='text-right text-sm'>Resend OTP</h1> {/* Added text-right to align text to right */}
                  </div>
                </div>
              </form>
            )}
          </div>
          <div className="flex bg-[#FCF8F4] justify-between items-center py-4 mt-4 px-6 ">
            <p className="text-sm text-gray-500">Need Help? <span className='text-black'>Call 9999999999</span></p>
            <Link to="/propertyForm">
              <button
                onClick={!showOTPForm ? handleSubmit : null}
                className="bg-[#122B49] text-white px-8 py-1 text-base rounded-md"
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
