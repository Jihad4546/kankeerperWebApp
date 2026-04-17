import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdFacebook } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      
      {/* Top Section */}
      <div className="container mx-auto px-4 text-center pt-10 pb-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold pb-3">
          KeenKeeper
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="text-gray-200 text-center mt-6 mb-4 text-lg sm:text-xl">
          Social Links
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 sm:gap-6">
          <div className="bg-white rounded-full p-2 sm:p-3 flex items-center justify-center">
            <MdFacebook size={18} className="text-[#244D3F]" />
          </div>

          <div className="bg-white rounded-full p-2 sm:p-3 flex items-center justify-center">
            <FaInstagram size={18} className="text-[#244D3F]" />
          </div>

          <div className="bg-white rounded-full p-2 sm:p-3 flex items-center justify-center">
            <FaXTwitter size={18} className="text-[#244D3F]" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1A8862] container mx-auto px-4"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 pb-6 text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4 text-center md:text-left">
          
          <p className="text-sm sm:text-base md:text-lg">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 text-sm sm:text-base">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Footer;