const ServicesSection = () => {
    return (
      <section id="services" className="bg-[#F2F2F2] p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#00A9A5]">Our Services</h2>
  
        {/* Grid for Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="flip-card w-full h-64">
              <div className="flip-card-inner">
                {/* Front of the card */}
                <div className="flip-card-front border border-[#00A9A5] p-4 rounded-lg shadow-lg flex flex-col items-center bg-[#FFFFFF]">
                  <img
                    src={`/path/to/image${index}.jpg`}
                    alt={`Service ${index}`}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-[#1A3D7C]">Service Title {index}</h3>
                </div>
  
                {/* Back of the card */}
                <div className="flip-card-back border border-[#00A9A5] p-4 rounded-lg shadow-lg bg-[#FFD966] text-[#1A3D7C] flex items-center justify-center">
                  <p className="text-lg font-semibold">Detailed information about Service {index}.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  