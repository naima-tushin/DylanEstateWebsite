import React from 'react';
import logo from '../../assets/images/LOGO.png';
import { NavLink } from 'react-router-dom';
import frame from '../../assets/images/Frame.png';
import frame2 from '../../assets/images/Frame2.png';

const Navbar = () => {
  return (
    <div className="navbar bg-[#FCF8F4] px-10 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="LOGO"/>
        <div className="dropdown ml-4 relative">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold space-x-6"
          >
            <li><a className="hover:underline">PROPERTIES</a></li>
            <li><a className="hover:underline">MY DASHBOARD/ACTIVITY</a></li>
            <li><NavLink to="/sellerHomePage" activeClassName="underline">LIST YOUR PROPERTY</NavLink></li>
            <li><a className="hover:underline">CONTACT US</a></li>
            <li><a className="hover:underline">MORE</a></li>
          </ul>
        </div>
      </div>

      <div className="flex items-center">
        <ul className="menu menu-horizontal px-1 font-bold space-x-6 hidden lg:flex">
          <li><a className="hover:underline">PROPERTIES</a></li>
          <li><a className="hover:underline">MY DASHBOARD/ACTIVITY</a></li>
          <li><NavLink to="/sellerHomePage" activeClassName="underline">LIST YOUR PROPERTY</NavLink></li>
          <li><a className="hover:underline">CONTACT US</a></li>
          <li><a className="hover:underline">MORE</a></li>
        </ul>

        <div className="border-l-2 h-6 mx-6 hidden lg:block border-black font-bold"></div> {/* Vertical line style */}

        <div className="flex items-center">
          <button className="btn btn-ghost mr-4">
            <img src={frame} alt="Frame 1" className="h-6 w-6" />
          </button>
          <button className="btn btn-ghost">
            <img src={frame2} alt="Frame 2" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
