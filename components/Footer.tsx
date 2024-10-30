import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#F2F2F2] text-[#1A3D7C] p-6">
      {/* Top section with links and social icons */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        
        {/* Social Links on the Left */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1A3D7C] hover:text-[#00A9A5] transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1A3D7C] hover:text-[#00A9A5] transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#1A3D7C] hover:text-[#00A9A5] transition-colors">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Navigation Links on the Right */}
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 font-medium text-center md:text-left">
          <li><a href="#hero" className="hover:text-[#00A9A5] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#00A9A5] transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-[#00A9A5] transition-colors">Services</a></li>
          <li><a href="#testimonials" className="hover:text-[#00A9A5] transition-colors">Testimonials</a></li>
          <li><a href="#footer" className="hover:text-[#00A9A5] transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-[#FFD966] my-4" />

      {/* Copyright */}
      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
