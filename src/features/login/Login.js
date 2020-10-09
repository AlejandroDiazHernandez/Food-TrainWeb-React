import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { doLogin, selectIsAuthenticated } from "./loginSlice";
import "../../styles/Login.scss";

export default function Login(props) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) props.history.push("/calculator");
  }, [isAuthenticated]);

  function handleChange(ev) {
    const { name, value } = ev.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    dispatch(doLogin(formValues));
  }

  return (
    <div className="Login">
      <div className="Login__info">
        <h3>
          ¡Encantados de volver a verte!
        </h3>
        <p>¿Listo para configurar tu perfil?</p>
       
        </div>
        <div className="Login__container">
        <form className="form" name="form" onSubmit={handleSubmit}>
          <h2 className="title">LOG IN</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button
              className="btn"
              disabled={!formValues.password || !formValues.username}
            >
              Login
            </button>
          </div>
        </form>
        <div className="gif">
          <img src="/assets/aguacate.gif" alt="gif aguacate feliz"></img>
        </div>
      </div>
    </div>
  );
}
