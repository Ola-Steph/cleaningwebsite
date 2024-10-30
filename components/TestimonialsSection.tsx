import { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/globals.css'; // Ensure the styles are imported here

const testimonials = [
  { name: 'Customer 1', rating: 5, location: 'Location 1', feedback: 'Great service!' },
  { name: 'Customer 2', rating: 4, location: 'Location 2', feedback: 'Very satisfied!' },
  { name: 'Customer 3', rating: 5, location: 'Location 3', feedback: 'Exceptional quality!' },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const handlePrevious = () => {
    setAnimationClass('slide-right'); // Slide in from the right
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setAnimationClass('');
    }, 250);
  };

  const handleNext = () => {
    setAnimationClass('slide-left'); // Slide in from the left
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setAnimationClass('');
    }, 250);
  };

  return (
    <section id="testimonials" className="border p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Testimonials</h2>
      
      <div className="relative flex items-center justify-center overflow-hidden">
        <button onClick={handlePrevious} className="absolute left-0 text-gray-600 hover:text-blue-700 p-3">
          <FaChevronLeft size={24} />
        </button>

        <div className={`testimonial-card border p-6 w-full md:w-3/4 lg:w-2/3 rounded-lg shadow-lg bg-white text-center ${animationClass}`}>
          <h3 className="text-xl font-semibold">{testimonials[currentTestimonial].name}</h3>
          <p className="text-gray-500">{testimonials[currentTestimonial].location}</p>

          <div className="flex justify-center gap-1 mt-2 mb-4 text-yellow-500">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="text-gray-700">{testimonials[currentTestimonial].feedback}</p>
        </div>

        <button onClick={handleNext} className="absolute right-0 text-gray-600 hover:text-blue-700 p-3">
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
