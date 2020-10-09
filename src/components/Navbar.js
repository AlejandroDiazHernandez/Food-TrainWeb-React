import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDumbbell,
  faUtensils,
  faUser,
  faCalculator,
  faEye,
  faIdCard,
 faBars
} from "@fortawesome/free-solid-svg-icons";

import { selectIsAuthenticated } from "../features/login/loginSlice";
import "../styles/Navbar.scss";

const routes = [
  {
    name: "Home",
    to: "/",
    image: <FontAwesomeIcon className="homeLink" icon={faHome} />,
  },
  {
    name: "Nutrition",
    to: "/nutrition",
    image: <FontAwesomeIcon className="homeLink" icon={faUtensils} />,
    isProtected: true,
  },
  {
    name: "Train",
    to: "/train",
    image: <FontAwesomeIcon className="homeLink" icon={faDumbbell} />,
    isProtected: true,
  },
  {
    name: "Mi Perfil",
    to: "/userview",
    image: <FontAwesomeIcon className="homeLink" icon={faEye} />,
    isProtected: true,
  },
  {
    name: "Calculator",
    to: "/calculator",
    image: <FontAwesomeIcon className="homeLink" icon={faCalculator} />,
    isProtected: true,
  },
  {
    name: "Register",
    to: "/register",
    image: <FontAwesomeIcon className="homeLink" icon={faIdCard} />,
  },
  {
    name: "Login",
    to: "/login",
    image: <FontAwesomeIcon className="homeLink" icon={faUser} />,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleCloseMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleCloseMenu);

    return () => {
      window.removeEventListener("click", handleCloseMenu);
    };
  }, [isMenuOpen]);

  return (
    <nav className="Navbar">
      <img className="Navbar__image" src="/assets/logo4.jpg" alt="logo"></img>

      <div className="Navbar__menu">
      
        <button
          className="Navbar__open-button"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FontAwesomeIcon className="homeLink" icon={faBars} />
        </button>

        {isMenuOpen ? (
          <ul className="Navbar__links">
            {routes.map(({ name, image, to, isProtected }) =>
              isProtected && !isAuthenticated ? null : (
                <li key={to}>
                  <Link to={to} className="Navbar__link">
                    {isAuthenticated ? (
                      <h3 className="Navbar__link--items">
                        <span>{image}</span>
                         {name} 
                      </h3>
                    ) : (
                      <h3 className="Navbar__link--items">{name}</h3>
                    )}
                  </Link>
                </li>
              )
            )}
          </ul>
        ) : null}
      </div>
    </nav>
  );
}
