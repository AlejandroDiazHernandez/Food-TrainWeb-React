import React from "react";
import { useSelector } from "react-redux";

import {
  selectMaintenanceCalories,
  selectResult,
} from "../calculator/calculatorSlice";
import { selectRecipe, selecttotalCal } from "../nutrition/nutritionSlice";
import { selectExercice } from "../train/trainSlice";

import "../../styles/UserView.scss";
export default function UserView(props) {
  /*  const dispatch = useDispatch(); */
  const exercice = useSelector(selectExercice);
  const recipe = useSelector(selectRecipe);
  const maintenanceCalories = useSelector(selectMaintenanceCalories);
  const result = useSelector(selectResult);
  const totalCal = useSelector(selecttotalCal);

  const finalCalories = (maintenanceCalories || 0) - totalCal;

  function showDetails(recipeId) {
    props.history.push(`/nutrition-detail/${recipeId}`);
  }

  return (
    <section className="UserView">
      <div className="UserView__topBar">
        <p>TMB: {result}</p>
        <p>
          Cal Ejercicio:{" "}
          {maintenanceCalories ? (maintenanceCalories - result).toFixed() : 0}{" "}
        </p>
        <p>
          Total kcal: {maintenanceCalories ? maintenanceCalories.toFixed() : 0}{" "}
        </p>
      </div>

      <div className="UserView__train">
      <div className="UserView__train--Todaytrain">
        {exercice != false ? exercice.map((ex) => (
          <div key={ex.id}>
            <div>{ex.name}</div>
            <img
              src={ex.video}
              alt={ex.name}
            ></img>
            <div>{ex.muscle}</div>
            </div>
        )):<div>
        <img src='/assets/Train2 (2).jpg'></img>
        <p>¡Haz click en el botón para añadir los ejercicios que quieras para poder conseguir tus objetivos!</p></div>}
        </div>
      </div>
      <div className="UserView__buttons">
        <button
          onClick={() => {
            props.history.push("/train");
          }}
        >
          Selecciona tu Entrenamiento
        </button>
      </div>

      <div className="UserView__food--day">
        <p>
          Te faltan {finalCalories.toFixed()} calorias para llegar a tu objetivo{" "}
        </p>
      </div>
      <div className="UserView__food">
        <div className="UserView__food--TodayFood">
          {recipe != false ? recipe.map((rec) => (
            <div key={rec.id}>
              <div>{rec.title}</div>
              <img src={rec.image} alt={rec.title} />
              <div>{rec.cal}</div>

              <button onClick={() => showDetails(rec.id)}>Ver receta</button>
            </div>
          )):<div>
          <img src='/assets/Food 1.png'></img>
          <p>¡Haz click en el botón para añadir las comidas que quieras hacer hoy para conseguir tus objetivos!</p></div>}
        </div>
      </div>
      <div className="UserView__buttons">
        <button
          onClick={() => {
            props.history.push("/nutrition");
          }}
        >
          Selecciona tu Menu
        </button>
      </div>
    </section>
  );
}
