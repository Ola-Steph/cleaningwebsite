import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState } from 'react';
import WhatsAppButton from './WhatsAppButton'; // Importing WhatsAppButton component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phone = '2349057331822'; // Replace with your actual WhatsApp number
  const message = 'Hello, I would like to book a service!';

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-md py-4 fixed w-full top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-xl font-bold text-[#00A9A5]">Logo</div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1A3D7C]"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links - Responsive */}
        <div className={`flex items-center ${isOpen ? 'block' : 'hidden'} md:flex space-y-4 md:space-y-0 md:space-x-8 font-medium text-[#1A3D7C]`}>
          <ul className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0">
            {["Home", "About", "Services", "Testimonials"].map((label) => (
              <li key={label}>
                <Link
                  to={label.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="hover:text-[#00A9A5] transition duration-200 cursor-pointer block"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Book Now Button */}
          <WhatsAppButton phone={phone} message={message} className="ml-4" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
