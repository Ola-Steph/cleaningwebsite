import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton'; // Importing WhatsAppButton component

const HeroSection = () => {
  const phone = '2349057331822';
  const message = 'Hello, I would like to know more about your services.';

  return (
    <section
      id="hero"
      className="bg-[#F2F2F2] p-6 md:p-10 flex flex-col items-center md:flex-row md:space-x-8"
    >
      {/* Centered Text Content */}
      <motion.div
        className="md:w-1/2 text-center mb-6 md:mb-0" // Always centered text
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00A9A5]">
          Welcome to Our Service
        </h1>
        <p className="text-[#1A3D7C] leading-relaxed text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        {/* WhatsApp Button added below the paragraph */}
        <WhatsAppButton 
          phone={phone} 
          message={message} 
          className="mt-4 inline-flex items-center" 
        />
      </motion.div>
      
      {/* Centered Image Content */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/assets/clean.jpg"
          alt="Hero Image"
          width={500}
          height={300}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
