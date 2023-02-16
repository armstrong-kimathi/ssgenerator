import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyRecipes</span>. Built with{" "}
        <a href="https://armstrongkimathi.co.ke/">Armstrong Kimathi</a>
      </p>
    </footer>
  );
};

export default Footer;
