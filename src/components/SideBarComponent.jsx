import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import React from "react";

function SideBarComponent() {
  return (
    <div className="sticky w-full space-y-6 rounded-lg px-5 pb-2 pt-10 shadow-md md:top-12 md:mr-5 md:w-1/3">
      <div>
        <h1 className="text-4xl font-bold">Muhammad Arifin Habibi</h1>
        <p className="text-lg">I'm a software engineer from Indonesia.</p>
        <Button size="sm" variant="flat" color="primary" className="mt-4">
          <DocumentArrowDownIcon width={24} /> Resume
        </Button>
      </div>

      {/* About Me Section */}
      <div>
        <h2 className="text-2xl font-bold">About me</h2>
        <p className="text-md mt-2">
          I'm Muhammad Arifin Habibi, a web developer from Indonesia. I have
          experience in web design, web apps, and data science. I’ve worked with
          React and Node.js and enjoy staying updated with web trends. I’ve also
          won a website design competition.
        </p>
      </div>

      {/* Location and Contact */}
      <div>
        <h3 className="text-xl font-bold">Location</h3>
        <p className="text-md">Jakarta, Indonesia</p>
        <h3 className="mt-4 text-xl font-bold">Contact</h3>
        <a
          href="https://cvarifinhabibi.my.id"
          className="text-md text-blue-600"
        >
          +62 858-8252-9291
        </a>
        <h3 className="mt-4 text-xl font-bold">Email</h3>
        <a
          href="mailto:arifinhabibi94@gmail.com"
          className="text-md text-blue-600"
        >
          arifinhabibi94@gmail.com
        </a>
      </div>
    </div>
  );
}

export default SideBarComponent;
