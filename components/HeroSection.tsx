import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-[#F2F2F2] p-10 flex flex-col md:flex-row items-center" // Light Gray background
    >
      {/* Left Side - Text Content with Fade-in Effect */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 md:pr-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold mb-4 text-[#00A9A5]"> {/* Soft Aqua Blue heading */}
          Welcome to Our Service
        </h1>
        <p className="text-[#1A3D7C]"> {/* Navy Blue for paragraph text */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-[#1A3D7C]"> {/* Navy Blue for paragraph text */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-[#1A3D7C]"> {/* Navy Blue for paragraph text */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </motion.div>
      
      {/* Right Side - Image with Zoom Effect */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/assets/clean.jpg"
          alt="Hero Image"
          className="w-full h-auto rounded-lg shadow-lg bg-white" // Crisp White background for image container
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
