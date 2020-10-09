import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/login/loginSlice";

import "../styles/Home.scss";

export default function Home() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <div className="Home">
      <section className="Home__section">
        <div className="Home__section--image">
          <img src="/assets/homeIlustration.jpg" alt="gif pera feliz"></img>
        <div className="Home__section--content">
            <h2>¡Bienvenido a nuestra App!</h2>
            <p>
              Regístrate y por fin podrás tener todos tus entrenamientos y
              comidas en una zona personaliza exclusivamente para ti.
            </p>

            <Link to={isAuthenticated ? "/train" : "/register"}>
              <button className="Home--btnTrain">
                <h3>Register</h3>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
