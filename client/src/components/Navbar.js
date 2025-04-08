import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#008080", color: "white" }}>
      <h1>Car Rescue</h1>
      <Link to="/terms" style={{ color: "white", margin: "10px" }}>Terms & Conditions</Link>
    </nav>
  );
};

export default Navbar;
