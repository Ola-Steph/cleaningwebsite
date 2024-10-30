import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-8 font-medium text-[#1A3D7C] space-y-4 md:space-y-0 mt-4 md:mt-0`}
        >
          {["Home", "About", "Services", "Testimonials", "Contact"].map((label, idx) => (
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
      </div>
    </motion.nav>
  );
};

export default Navbar;
