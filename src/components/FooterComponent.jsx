import React from "react";
import { Link } from "react-router-dom";

function FooterComponent() {
  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arifinhabibi",
    },
  ];
  return (
    <footer className="text-white bg-primary py-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} arifinhabibi_ All rights reserved.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {links.map((link, index) => (
          <Link to={link.href} key={index}>
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default FooterComponent;
