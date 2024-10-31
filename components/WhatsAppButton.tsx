// components/WhatsAppButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Using react-icons for WhatsApp logo

interface WhatsAppButtonProps {
  phone: string;
  message: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phone, message, className }) => {
  const handleClick = () => {
    const formattedPhone = phone.startsWith('+') ? phone.slice(1) : phone; // Ensure no leading "+"
    const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} flex items-center px-4 py-2 bg-[#00A9A5] text-white font-semibold rounded-lg hover:bg-opacity-90 transition duration-200`}
    >
      <span>Book Now</span>
      <FaWhatsapp className="ml-2" /> {/* WhatsApp logo */}
    </button>
  );
};

export default WhatsAppButton;
