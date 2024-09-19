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
      className={`sticky top-0 z-50 flex items-center justify-between px-5 py-5 transition duration-300 ease-in-out md:px-10 ${
        isScrolled
          ? "bg-light bg-opacity-70 text-dark backdrop-blur-md"
          : "bg-transparent text-dark"
      }`}
    >
      <div className="hidden gap-10 rounded-full px-5 py-2 md:flex">
        <Link className="text-md font-semibold">Experiences</Link>
        <Link className="text-md font-semibold">Projects</Link>
        <Link className="text-md font-semibold">Certifications</Link>
        <Link className="text-md font-semibold">Gallery</Link>
        <Link className="text-md font-semibold">Contacts</Link>
      </div>
      <div className="hidden gap-5 md:flex">
        <Input endContent={<MagnifyingGlassIcon width={24} />} radius="full" />
      </div>
      <h1 className="font-semibold md:hidden">arifinhabibi_</h1>
      <div className="cursor-pointer md:hidden">
        <Dropdown>
          <DropdownTrigger>
            <Bars3Icon width={32} />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="exp">
              <Link className="text-md font-semibold">Experiences</Link>
            </DropdownItem>
            <DropdownItem key="project">
              <Link className="text-md font-semibold">Projects</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
