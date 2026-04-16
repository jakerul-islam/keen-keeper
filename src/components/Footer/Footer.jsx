import Image from "next/image";
import React from "react";
import footerImg from "../../assets/logo-xl.png";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-10">
      <div className="container mx-auto px-4">
        
        {/* Top Section */}
        <div className="text-center space-y-4p-6">
          
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Image src={footerImg} alt="footer img" />
          </div>

          {/* Description */}
          <p className="text-sm text-gray-200 max-w-xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* Social Links */}
          <div>
            <p className="mb-2 font-medium">Social Links</p>
            <div className="flex justify-center gap-3">
              
              <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
                <FaGithub />
              </button>

              <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
                <FaFacebookF />
              </button>

              <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
                <FaXTwitter />
              </button>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 mt-6 border-t border-gray-500 pt-4">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;