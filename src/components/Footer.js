import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Footer.scss";

export default function Footer() {
    return (
        <footer className="Footer">
        <Link to="/about-us">
          <button className="btnFooter">
            <p>About Us</p>
          </button>
        </Link>
      </footer>
    )
}
