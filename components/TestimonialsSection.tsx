import { useEffect, useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  { name: 'Jane Samson', rating: 5, location: 'Garki, Abuja', feedback: 'Great service! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq' },
  { name: 'Ruth James', rating: 4, location: 'Wuse, Abuja', feedback: 'Very satisfied! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq' },
  { name: 'Andrew Gideons', rating: 5, location: 'Wuye, Abuja', feedback: 'Exceptional quality! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq' },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { name, rating, location, feedback } = testimonials[currentTestimonial];
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <section id="testimonials" className="p-6 md:p-10 bg-[#E8F5F5]">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00A9A5]">Customer Testimonials</h2>

      <div className="relative flex items-center justify-center max-w-full mx-auto">
        <button onClick={handlePrevious} className="absolute left-0 p-2 text-gray-500 hover:text-[#00A9A5]">
          <FaChevronLeft size={24} />
        </button>

        <div className="testimonial-card border-2 border-[#00A9A5] p-6 w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg bg-white text-center">
          <div className="flex flex-col items-center">
            {/* Avatar with initials */}
            <div className="w-16 h-16 rounded-full bg-[#E0F7FA] flex items-center justify-center text-2xl font-semibold text-[#00A9A5] mb-4">
              {initials}
            </div>

            {/* Name and Location */}
            <h3 className="text-xl font-semibold text-[#1A3D7C]">{name}</h3>
            <p className="text-gray-500 mb-2">{location}</p>

            {/* Star Rating */}
            <div className="flex justify-center gap-1 mb-4 text-[#FFD966]">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-700 italic leading-relaxed px-4">
              "{feedback}"
            </p>
          </div>
        </div>

        <button onClick={handleNext} className="absolute right-0 p-2 text-gray-500 hover:text-[#00A9A5]">
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
