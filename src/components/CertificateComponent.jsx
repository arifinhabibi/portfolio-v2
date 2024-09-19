import { Card } from "@nextui-org/react";
import React from "react";

function CertificateComponent() {
  const certificates = [
    {
      title: "React Developer Certification",
      issuer: "Coursera",
      date: "July 2023",
      image: "/assets/certificates/react-cert.png",
    },
    {
      title: "Fullstack Web Development",
      issuer: "Udemy",
      date: "May 2023",
      image: "/assets/certificates/fullstack-cert.png",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "March 2023",
      image: "/assets/certificates/js-cert.png",
    },
  ];
  return (
    <div className="px-5">
      <h3 className="py-5 text-2xl font-bold">Certifications</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <Card key={index} className="p-4 shadow-lg" data-aos="fade-up">
            <img
              src={cert.image}
              alt={cert.title}
              className="mb-4 h-32 w-full rounded-lg object-cover md:h-28"
            />
            <h4 className="text-xl font-semibold">{cert.title}</h4>
            <p className="text-sm text-gray-600">{cert.issuer}</p>
            <p className="text-sm text-gray-500">{cert.date}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CertificateComponent;
