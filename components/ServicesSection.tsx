import Image from 'next/image';
import { useEffect, useState } from 'react';

const ServicesSection = () => {
  const serviceTitles = [
    "General Cleaning",
    "Carpet Cleaning",
    "Floor Cleaning",
    "Glass Cleaning",
    "House Cleaning",
    "Car Cleaning",
    "Wooden Floor Cleaning",
    "Window Cleaning",
    "Skyscraper Cleaning",
    "Field Cleaning",
    "Wall Cleaning",
    "Bathroom Cleaning",
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300); // Delay to show the effect of lazy loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="bg-[#F2F2F2] p-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#00A9A5]">Our Services</h2>

      {/* Grid for Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceTitles.map((title, index) => (
          <div key={index} className="flip-card w-full h-64">
            <div className="flip-card-inner">
              {/* Front of the card */}
              <div className="flip-card-front border border-[#00A9A5] p-4 rounded-lg shadow-lg flex flex-col items-center bg-[#FFFFFF]">
                <Image
                  src={`/assets/clean${index + 1}.jpg`} // Optimized image loading
                  alt={`Service ${index + 1}`}
                  width={500} // Set appropriate width
                  height={300} // Set appropriate height
                  className="w-full h-40 object-cover rounded-md mb-4"
                  priority={index < 3} // Load first three images with priority
                />
                <h3 className="text-lg font-semibold text-[#1A3D7C]">{title}</h3>
              </div>

              {/* Back of the card */}
              {loaded && ( // Only show back after loading
                <div className="flip-card-back border border-[#00A9A5] p-4 rounded-lg shadow-lg bg-[#FFD966] text-[#1A3D7C] flex items-center justify-center">
                  <p className="text-sm font-semibold">
                    Quick overview of {title}.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
