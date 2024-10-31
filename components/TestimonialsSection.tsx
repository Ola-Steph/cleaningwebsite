import { useEffect, useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  { name: 'Esther', rating: 5, location: 'Garki, Abuja', feedback: 'Great service!' },
  { name: 'Omolara', rating: 4, location: 'Wuse, Abuja', feedback: 'Very satisfied!' },
  { name: 'JaiyeOla', rating: 5, location: 'Wuye, Abuja', feedback: 'Exceptional quality!' },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const handlePrevious = () => {
    setAnimationClass('slide-right');
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setAnimationClass('');
    }, 250);
  };

  const handleNext = () => {
    setAnimationClass('slide-left');
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setAnimationClass('');
    }, 250);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="p-6 md:p-10 bg-[#F2F2F2]">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00A9A5]">Customer Testimonials</h2>

      <div className="relative flex items-center justify-center overflow-hidden max-w-full mx-auto">
        <button onClick={handlePrevious} className="absolute left-0 p-3 text-gray-600 hover:text-[#00A9A5]">
          <FaChevronLeft size={24} />
        </button>

        <div
          className={`testimonial-card transition-all duration-300 ease-in-out border-2 border-[#00A9A5] p-6 w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg bg-[#FFFFFF] text-center ${animationClass}`}
        >
          <h3 className="text-xl font-semibold text-[#1A3D7C]">{testimonials[currentTestimonial].name}</h3>
          <p className="text-gray-500">{testimonials[currentTestimonial].location}</p>

          <div className="flex justify-center gap-1 mt-2 mb-4 text-[#FFD966]">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="text-gray-700">{testimonials[currentTestimonial].feedback}</p>
        </div>

        <button onClick={handleNext} className="absolute right-0 p-3 text-gray-600 hover:text-[#00A9A5]">
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
