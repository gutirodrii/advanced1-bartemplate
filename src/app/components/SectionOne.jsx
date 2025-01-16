import React from "react";

function SectionOne() {
  const images = [
    'https://via.placeholder.com/150',
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Galería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-10">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-125  transition-transform duration-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionOne;