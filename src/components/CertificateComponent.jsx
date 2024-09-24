import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Card,
  Image,
} from "@nextui-org/react";

function CertificateComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeImg, setActiveImg] = useState({
    img: null,
    title: null,
  });
  const certificates = [
    {
      title: "NextJS for Modern Website",
      issuer: "TALENTHUB Indonesia",
      date: "Mei 2024",
      image: "/assets/images/MUHAMMAD ARIFIN HABIBI - TALENT CLASS-1.jpg",
    },
    {
      title: "Belajar Dasar Google Cloud",
      issuer: "DICODING Indonesia",
      date: "April 2022",
      image: "/assets/images/dicoding-google-cloud.jpg",
    },
  ];

  function modalOpen(cert) {
    setActiveImg({
      img: cert.image,
      title: cert.title,
    });
    onOpen();
  }
  return (
    <div className="px-5">
      <h3 className="py-5 text-2xl font-bold" id="certifications">
        Certifications
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <Card
            key={index}
            className="p-4 shadow-lg dark:bg-gradient-to-br dark:from-primary dark:to-info dark:text-light dark:shadow-right-light"
          >
            <Button
              variant="flat"
              onClick={() => modalOpen(cert)}
              className="mb-4 h-32 w-full rounded-lg object-cover md:h-28"
            >
              <img src={cert.image} alt={cert.title} className="h-32" />
            </Button>
            <h4 className="text-xl font-semibold">{cert.title}</h4>
            <p className="text-sm text-gray-600">{cert.issuer}</p>
            <p className="text-sm text-gray-500">{cert.date}</p>
            <div
              onClick={() => modalOpen(cert)}
              className="absolute bottom-3 right-5 cursor-pointer rounded-lg p-2 text-sm underline underline-offset-2 shadow-right-light"
            >
              preview
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        backdrop={"blur"}
        className="dark:bg-gradient-to-br dark:from-primary dark:to-info dark:text-light dark:shadow-right-light"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Preview {activeImg.title}
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center justify-center">
                  <Image
                    src={activeImg.img}
                    width={600}
                    alt={activeImg.title}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default CertificateComponent;
