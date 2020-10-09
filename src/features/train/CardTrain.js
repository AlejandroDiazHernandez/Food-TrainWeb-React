import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { doAddTrain } from "../train/trainSlice";
import "../../styles/CardTrain.scss";

export default function CardTrain(props) {
  const { name, muscle, video } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <li className="CardTrain">
      <h3>{name}</h3>
      <img className="CardTrain--img" src={video} alt={name}></img>
      <p>Focalización: {muscle}</p>

      <button
        className="custom-button"
        onClick={() => {
          dispatch(doAddTrain(props));
          history.push("/userView");
        }}
      >
        Añadir
      </button>
    </li>
  );
}
