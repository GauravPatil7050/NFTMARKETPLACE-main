import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import image2 from "../assets/mintbackground.jpg";

export const Footer = () => {
  return (
    <footer
      className="bg-gray-800"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link
                  to="#"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                >
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="#"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="#"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link
                  to="#"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="#"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="#"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          
    </footer>
  );
};
