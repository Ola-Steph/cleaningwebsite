const ServicesSection = () => {
    // Array of service titles
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
                  <img
                    src={`/assets/clean${index + 1}.jpg`}  // Image path for each service
                    alt={`Service ${index + 1}`}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-[#1A3D7C]">{title}</h3>
                </div>
  
                {/* Back of the card */}
                <div className="flip-card-back border border-[#00A9A5] p-4 rounded-lg shadow-lg bg-[#FFD966] text-[#1A3D7C] flex items-center justify-center">
                  <p className="text-lg font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  