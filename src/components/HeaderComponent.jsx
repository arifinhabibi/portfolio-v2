import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // or use appropriate import based on your routing library
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // or your icon library
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import ProfileDownloadComponent from "./ProfileDownloadComponent";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 flex items-end justify-between px-5 py-5 transition duration-300 ease-in-out dark:shadow-bottom-light md:items-center md:px-10 ${
        isScrolled
          ? "bg-light bg-opacity-70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="z-50 hidden gap-5 rounded-full px-5 py-2 md:flex">
        <a href="#experiences" className="text-md font-semibold">
          Experiences
        </a>
        <a href="#educations" className="text-md font-semibold">
          Educations
        </a>
        <a href="#projects" className="text-md font-semibold">
          Projects
        </a>
        <a href="#certifications" className="text-md font-semibold">
          Certifications
        </a>
        <a href="#gallery" className="text-md font-semibold">
          Gallery
        </a>
        <Link to="#" className="text-md font-semibold">
          Contacts
        </Link>
      </div>
      <div className="hidden gap-5 md:flex">
        {/* <Input endContent={<MagnifyingGlassIcon width={24} />} radius="full" /> */}
      </div>
      {/* <h1 className="font-semibold md:hidden">arifinhabibi_</h1> */}

      <div className=" md:hidden">
        <Dropdown>
          <DropdownTrigger>
            <Bars3Icon width={32} className="cursor-pointer" />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="exp">
              <a href="#experiences" className="text-md font-semibold">
                Experiences
              </a>
            </DropdownItem>
            <DropdownItem key="project">
              <a href="#projects" className="text-md font-semibold">
                Projects
              </a>
            </DropdownItem>
            <DropdownItem key="certification">
              <a href="#certifications" className="text-md font-semibold">
                Certifications
              </a>
            </DropdownItem>{" "}
            <DropdownItem key="gallery">
              <a href="#gallery" className="text-md font-semibold">
                Certifications
              </a>
            </DropdownItem>{" "}
            <DropdownItem key="contacts">
              <Link to="Contacts" className="text-md font-semibold">
                Contacts
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="md:hidden">
        <ProfileDownloadComponent />
      </div>
    </div>
  );
};

export default Header;
