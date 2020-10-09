import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { doCreateValues } from "./calculatorSlice";

import "../../styles/Calculator.scss";

export default function Calculator(props) {
  const [formValues, setFormValues] = useState({
    gender: "",
    weight: "",
    height: "",
    age: "",
    activitylevel: "",
    result: [],
  });

  const dispatch = useDispatch();

  const handleOnsubmit = (ev) => {
    ev.preventDefault();
    console.log(formValues);
    dispatch(
      doCreateValues({
        formValues,
      })
    );

    props.history.push("/userView");
  };

  const handleChangeInput = (ev) => {
    const { name, value } = ev.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div>
    <div className="info">
    <p>¡Introduce tus datos para poder calcular las kcal de tu dieta y conseguir tus objetivos!</p>
    <p>🥑🥒🍑</p>
    </div>
      <form className="Calculator" onSubmit={handleOnsubmit}>
        <fieldset className="Calculator__fieldset">
          <legend className="Calculator__fieldset--legend">
            Introduce tu tasa de metabólismo basal
          </legend>
          <h4 className="Calculator__title">SEXO: </h4>
          <label className="Calculator__label" htmlFor="gender">
            Femenino
            <input
              className="Calculator__input"
              value="female"
              role="button"
              type="radio"
              name="gender"
              onChange={handleChangeInput}
              required
            ></input>
            Masculino
            <input
              className="Calculator__input"
              value="male"
              role="button"
              type="radio"
              name="gender"
              onChange={handleChangeInput}
              required
            ></input>
          </label>
          <h4 className="Calculator__title">PESO: </h4>
          <label className="Calculator__label" htmlFor="peso">
            <input
              onChange={handleChangeInput}
              value={formValues.weight}
              className="Calculator__input"
              type="number"
              name="weight"
              required
            ></input>
          </label>
          <h4 className="Calculator__title">ALTURA: </h4>
          <label className="Calculator__label" htmlFor="altura">
            <input
              onChange={handleChangeInput}
              value={formValues.height}
              className="Calculator__input"
              type="number"
              name="height"
              required
            ></input>
          </label>
          cm
          <h4 className="Calculator__title">EDAD: </h4>
          <label className="Calculator__label" htmlFor="edad">
            <input
              onChange={handleChangeInput}
              value={formValues.age}
              className="Calculator__input"
              type="number"
              name="age"
              required
            ></input>
          </label>
          edad
          <h4 className="Calculator__title">NIVEL DE ACTIVIDAD: </h4>
          <label className="Calculator__label" htmlFor="activity">
            <select
              className="Calculator__select"
              id="type"
              onChange={handleChangeInput}
              name="activitylevel"
              required
            >
              <option value="">Seleciona una opción</option>
              <option value="low">Sedentarismo</option>
              <option value="lowMedium">Actividad ligera</option>
              <option value="medium">Actividad moderada</option>
              <option value="mediumHigh">Actividad intensa</option>
            </select>
          </label>
          <div className="Calculator__containerBtn">
            <button type="submit">Calcular</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
