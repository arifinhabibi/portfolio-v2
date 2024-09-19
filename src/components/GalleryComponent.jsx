import React from "react";

function GalleryComponent() {
  const images = [
    { src: "/assets/gallery/image1.jpg", alt: "Project 1" },
    { src: "/assets/gallery/image2.jpg", alt: "Project 2" },
    { src: "/assets/gallery/image3.jpg", alt: "Project 3" },
    { src: "/assets/gallery/image4.jpg", alt: "Project 4" },
    { src: "/assets/gallery/image5.jpg", alt: "Project 5" },
    { src: "/assets/gallery/image6.jpg", alt: "Project 6" },
  ];

  return (
    <div className="px-5">
      <h3 className="py-5 text-2xl font-bold">Gallery</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="group relative" data-aos="fade-up">
            <img
              src={image.src}
              alt={image.alt}
              className="h-60 w-full transform rounded-lg object-cover shadow-md transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="font-semibold text-white">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryComponent;
