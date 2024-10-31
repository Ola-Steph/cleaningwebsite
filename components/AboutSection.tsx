import { motion } from "framer-motion";
import CountUp from "react-countup";
import WhatsAppButton from "./WhatsAppButton"; // Importing WhatsAppButton component

const AboutSection = () => {
  const phone = '2349057331822';
  const message = 'Hello, I would like to learn more about your services.';

  return (
    <section id="about" className="bg-[#F2F2F2] p-10 flex flex-col md:flex-row items-center">
      {/* Left Side - Cards with Stats */}
      <motion.div
        className="md:w-1/2 grid grid-cols-2 gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        {[
          { count: 100, label: "Projects Completed", icon: "📄" },
          { count: 10, label: "Years of Excellence", icon: "👥" },
          { count: 90, label: "Happy Clients", icon: "👍" },
          { count: 25, label: "Expert Cleaners", icon: "🧹" },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-[#FFFFFF] flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            {/* Icon */}
            <div className="text-4xl text-[#00A9A5] mb-2">{card.icon}</div>
            {/* Animated Count */}
            <h3 className="text-3xl font-semibold text-[#1A3D7C]">
              <CountUp start={1} end={card.count} duration={2.5} />+
            </h3>
            {/* Label */}
            <p className="text-[#1A3D7C] mt-2">{card.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Side - Center-Aligned Text Content */}
      <motion.div
        className="md:w-1/2 md:pl-10 mt-8 md:mt-0 text-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#00A9A5]">
          About Us
        </h2>
        <p className="text-[#1A3D7C]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-[#1A3D7C] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* WhatsApp Button */}
        <WhatsAppButton 
          phone={phone} 
          message={message} 
          className="mt-6 inline-flex items-center" 
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;

