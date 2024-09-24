import React from "react";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <footer className="bg-gradient-to-br from-info to-dark py-4 text-center text-white dark:from-primary dark:to-info dark:shadow-right-light">
      <p>
        &copy; {new Date().getFullYear()} arifinhabibi_ All rights reserved.
      </p>
    </footer>
  );
}

export default FooterComponent;
