import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/faq">F.A.Q</Link>
        </li>
        <li>
          <Link to="/store">store</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
