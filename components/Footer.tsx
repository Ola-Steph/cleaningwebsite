import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1A3D7C] text-[#FFFFFF] p-8">
      {/* Top section with links and social icons */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Social Links - Aligned Left */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] hover:text-[#00A9A5] transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] hover:text-[#00A9A5] transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] hover:text-[#00A9A5] transition-colors">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Navigation Links - Arranged Vertically and Aligned Right */}
        <ul className="flex flex-col items-end space-y-4 font-medium text-right">
          <li><a href="#hero" className="hover:text-[#FFD966] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#FFD966] transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-[#FFD966] transition-colors">Services</a></li>
          <li><a href="#testimonials" className="hover:text-[#FFD966] transition-colors">Testimonials</a></li>
          <li><a href="#footer" className="hover:text-[#FFD966] transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-[#FFD966] my-6" />

      {/* Copyright */}
      <div className="text-center text-sm text-[#FFFFFF]">
        <p>&copy; {new Date().getFullYear()} JaiyeOla. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
