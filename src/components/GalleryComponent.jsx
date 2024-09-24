import React from "react";

function GalleryComponent() {
  const images = [
    {
      src: "/assets/images/gallery/image-01.jpeg",
      alt: "image 1",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-02.jpeg",
      alt: "image 2",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-03.jpeg",
      alt: "image 3",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-04.jpeg",
      alt: "image 4",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-05.jpeg",
      alt: "image 5",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-06.jpeg",
      alt: "image 6",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-07.jpeg",
      alt: "image 7",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-08.jpeg",
      alt: "image 8",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-09.jpeg",
      alt: "image 9",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-10.jpeg",
      alt: "image 10",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-11.jpeg",
      alt: "image 11",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-12.jpeg",
      alt: "image 12",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-13.jpeg",
      alt: "image 13",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-14.jpeg",
      alt: "image 14",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-15.jpeg",
      alt: "image 15",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-16.jpeg",
      alt: "image 16",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-17.jpeg",
      alt: "image 17",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-18.jpeg",
      alt: "image 18",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-19.jpeg",
      alt: "image 19",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-20.jpeg",
      alt: "image 20",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-21.jpeg",
      alt: "image 21",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-22.jpeg",
      alt: "image 22",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-23.jpeg",
      alt: "image 23",
      title: "",
      description: "image",
    },
    {
      src: "/assets/images/gallery/image-24.jpeg",
      alt: "image 24",
      title: "",
      description: "image",
    },
  ];

  return (
    <div className="px-5">
      <h3 className="py-5 text-2xl font-bold" id="gallery">
        Gallery
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="group relative">
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
