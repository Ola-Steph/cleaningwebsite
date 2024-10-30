import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md py-4" // Crisp White background
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-xl font-bold text-[#00A9A5]">Logo</div> {/* Soft Aqua Blue */}

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-medium text-[#1A3D7C]"> {/* Navy Blue for text */}
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="hover:text-[#00A9A5] transition duration-200 cursor-pointer" // Soft Aqua Blue hover
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-[#00A9A5] transition duration-200 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:text-[#00A9A5] transition duration-200 cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="hover:text-[#00A9A5] transition duration-200 cursor-pointer"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              smooth={true}
              duration={500}
              className="hover:text-[#00A9A5] transition duration-200 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
