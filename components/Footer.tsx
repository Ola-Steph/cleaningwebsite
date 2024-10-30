import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="border-t p-6 bg-gray-100 text-gray-700">
      {/* Top section with links and social icons */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-4">
        {/* Social Links on the Left */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 transition">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 transition">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Section Links stacked vertically on the Right */}
        <ul className="flex flex-col space-y-4 font-medium">
          <li><a href="#hero" className="hover:text-blue-700 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-700 transition">About</a></li>
          <li><a href="#services" className="hover:text-blue-700 transition">Services</a></li>
          <li><a href="#testimonials" className="hover:text-blue-700 transition">Testimonials</a></li>
          <li><a href="#footer" className="hover:text-blue-700 transition">Contact</a></li>
        </ul>
      </div>

      {/* Horizontal line */}
      <hr className="border-gray-300 my-4" />

      {/* Copyright */}
      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
