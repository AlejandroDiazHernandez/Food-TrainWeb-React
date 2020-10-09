import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { doSendrecipe } from "../nutrition/nutritionSlice";
import "../../styles/CardNutrition.scss";

export default function CardNutrition(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const { type, title, option, image, cal, recipe } = props;

  return (
    <li className="CardNutrition">
      <div>
        <img src={image} alt={title} width="250" />

        <div className="CardNutrition__size">
          <h3>{title}</h3>
          <span>
            Menú: {option}, {cal.toFixed()} cal
          </span>
        </div>

        <button
          className="custom-button2 CardNutrition__btn"
          onClick={() => {
            dispatch(doSendrecipe(recipe));
            history.push("/userView");
          }}
        >
          agregar
        </button>
      </div>
    </li>
  );
}
