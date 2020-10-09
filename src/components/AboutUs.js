import React from "react";
import "../../src/styles/AboutUs.scss";

export default function AboutUs() {
  return (
    <section className="AboutUs">
      <div className="AboutUs__info">
        <h1>About our React-Redux Final Project</h1>
        <p>
          Nos sentimos muy orgullosos del desarrollo de este proyecto que en tan
          solo 5 días (empezando a programar en react hace tan solo 2 semanas),
          usando Git como metodología de gestíon del trabajo y Notion, hemos
          desarrolado una app responsive, mobile first, con React Js y Redux
          toolkil, capaz de darte un menú y entrenamiento diarios especificos
          para cada persona.
          <div>
            Dejamos nuestras redes por aquí, por si os gusta el proyecto y
            quisiérais contactarnos :
          </div>
        </p>
        <ul className="AboutUs__info--1">
          <li>
            <h2>Alejandro Díaz</h2>
            <img
              className="Photo"
              src="https://media-exp1.licdn.com/dms/image/C4D35AQE7x08ECILhZA/profile-framedphoto-shrink_400_400/0?e=1602327600&v=beta&t=XMwsbtOe7sr5_H3fs--cQgIZgoC5q00670zpynVjeNs"
              alt="Alejandro"
            ></img>
            <div>
              <a href="https://www.linkedin.com/in/alejandro-diaz-hernandez/">
                <img
                  className="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/600px-Linkedin_icon.svg.png"
                  alt="Linkedin"
                ></img>{" "}
              </a>
              <a href="https://gitlab.com/AlejandroDiazHernandez">
                <img
                  className="icon"
                  src="https://jmartinezxp.gitlab.io/img/avatar-icon.png"
                  alt="gitlab"
                ></img>{" "}
              </a>
            </div>
          </li>
          <li>
            <h2>Elena Rábano</h2>
            <img
              className="Photo"
              src="https://media-exp1.licdn.com/dms/image/C4D35AQEMqAZdUKX2rw/profile-framedphoto-shrink_400_400/0?e=1602327600&v=beta&t=jd8mgxdKWVXAehPQUu2mCMrW1X7n3LDkbEqgEfyn1cA"
              alt="Elena"
            ></img>
            <div>
              <a href="https://www.linkedin.com/in/elenar%C3%A1banoneila/">
                <img
                  className="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/600px-Linkedin_icon.svg.png"
                  alt="Linkedin"
                ></img>{" "}
              </a>
              <a href="https://gitlab.com/ElenaRN">
                <img
                  className="icon"
                  src="https://jmartinezxp.gitlab.io/img/avatar-icon.png"
                  alt="gitlab"
                ></img>{" "}
              </a>
            </div>
          </li>
          <li>
            <h2>Iván Fernández</h2>
            <img
              className="Photo"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHVGUs8_gV6Sg/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=mTiTIbXrb42efOnz-RVkCtYbiIOIRuSgAiAL_OBrtbg"
              alt="Iván"
            ></img>
            <div>
              <a href="https://www.linkedin.com/in/ivan-fernandez-pascual/">
                <img
                  className="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/600px-Linkedin_icon.svg.png"
                  alt="Linkedin"
                ></img>{" "}
              </a>
              <a href="https://gitlab.com/Ivan.Fernandez.Pascual">
                <img
                  className="icon"
                  src="https://jmartinezxp.gitlab.io/img/avatar-icon.png"
                  alt="gitlab"
                ></img>{" "}
              </a>
            </div>
          </li>
          <li>
            <h2>Carmen Romero</h2>
            <img
              className="Photo"
              src="https://media-exp1.licdn.com/dms/image/C4D35AQErxdt8wFlK1A/profile-framedphoto-shrink_400_400/0?e=1602327600&v=beta&t=_XP9EKmstuSVHhEFs0HZdZvYlHswFwUGSnRwMMazJRs"
              alt="Carmen"
            ></img>
            <div>
              <a href="https://www.linkedin.com/in/carmen-romero-l%C3%B3pez-32359951/">
                <img
                  className="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/600px-Linkedin_icon.svg.png"
                  alt="Linkedin"
                ></img>{" "}
              </a>
              <a href="https://gitlab.com/Menchu">
                <img
                  className="icon"
                  src="https://jmartinezxp.gitlab.io/img/avatar-icon.png"
                  alt="gitlab"
                ></img>{" "}
              </a>
            </div>
          </li>
        </ul>

        <p>
          Es el resultado de todos los conocimientos aprendidos en el Bootcampt
          de Upgrade Hub.
        </p>
        <h2>Los bloques que hemos incorporado al proyecto son:</h2>
        <ul className="AboutUs__info--2">
          <li>
            Estructura de proyecto con Componentes funcionales de React y Rutas.
          </li>
          <li>
            Trabajamos Redux creando comunicación entre componentes,hemos
            desarrollado nuestro "back" a través de Jsons, directivas,template y
            formularios reactivos.
          </li>
          <li>
            Utilizaremos Sesión Storage y mandamos al usuario a una página de
            registro donde despues se logeará.
          </li>
          <li>
            Calculará las Kcal que necesita para mantenerse, ganar musculatura o
            perder peso.
          </li>
          <li>
            En función de eso, podrá personalizar su zona de usuario con
            entrenamientos y una dieta personalizada
          </li>

          <li>
            Pondremos en práctica también todos los conocimientos adquiridos en
            HTML, CSS, SCSS, metodología BEM y JS.
          </li>
        </ul>
      </div>
    </section>
  );
}
