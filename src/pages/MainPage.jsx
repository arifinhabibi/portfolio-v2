import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Avatar } from "@nextui-org/react";
import { Parallax } from "react-parallax";
import HeaderComponent from "../components/HeaderComponent";
import SideBarComponent from "../components/SideBarComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import ProjectComponent from "../components/ProjectComponent";
import FooterComponent from "../components/FooterComponent";
import CertificateComponent from "../components/CertificateComponent";
import GalleryComponent from "../components/GalleryComponent";
import ContactComponent from "../components/ContactComponent";

function MainPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="">
      {/* Parallax Background */}
      <HeaderComponent />
      <Parallax
        blur={0}
        bgImage="/assets/images/bg.png"
        bgImageAlt="background"
        strength={100}
      >
        <div className="relative hidden min-h-80 overflow-visible px-20 md:block"></div>
      </Parallax>

      <div className="relative flex justify-center md:block md:px-10">
        <Avatar
          src="/assets/images/kim-2.0.jpeg"
          className="z-40 h-52 w-52 md:absolute md:top-[-140px]"
        />
      </div>
      {/* Main Profile Section */}
      <div className="relative z-40 flex flex-col items-start justify-between md:flex-row md:px-10 md:pt-10">
        {/* Left Column - Profile Info */}

        <SideBarComponent />

        {/* Right Column - Experience and Projects */}
        <div className="mt-10 w-full space-y-6 lg:mt-0 lg:w-2/3">
          <ExperienceComponent />
          <ProjectComponent />
          <CertificateComponent />
          <GalleryComponent />
          <ContactComponent />
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
