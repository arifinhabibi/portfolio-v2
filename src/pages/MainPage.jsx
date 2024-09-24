import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import SideBarComponent from "../components/SideBarComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import ProjectComponent from "../components/ProjectComponent";
import FooterComponent from "../components/FooterComponent";
import CertificateComponent from "../components/CertificateComponent";
import GalleryComponent from "../components/GalleryComponent";
import HeroSectionComponent from "../components/HeroSectionComponent";
import OtherComponent from "../components/OtherComponent";
import EducationComponent from "../components/EducationComponents";
import AwardComponent from "../components/AwardComponent";

function MainPage() {
  return (
    <>
      <div>
        {/* Parallax Background */}
        <HeaderComponent />
        <div id="printable" className="pt-10 md:pt-0">
          <HeroSectionComponent />
          {/* Main Profile Section */}
          <div className="relative z-40 flex flex-col items-start justify-between md:flex-row md:px-10 md:pt-10">
            {/* Left Column - Profile Info */}

            <SideBarComponent />

            {/* Right Column - Experience and Projects */}
            <div className="mt-10 w-full space-y-6 lg:mt-0 lg:w-2/3">
              <ExperienceComponent />
              <EducationComponent />
              <ProjectComponent />
              <CertificateComponent />
              <AwardComponent />
              <GalleryComponent />
              {/* <ContactComponent /> */}
              <FooterComponent />
            </div>
          </div>
        </div>
      </div>

      <OtherComponent />
    </>
  );
}

export default MainPage;
