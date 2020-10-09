import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { registerUser } from "../../sessionStorage";
import "../../styles/Register.scss";

export default function Register(props) {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  function handleChange(ev) {
    const { name, value } = ev.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    registerUser({ ...formValues, id: uuid() });
    props.history.push("/login");
  }

  return (
    <div className="Register">
      <form className="form" name="form" onSubmit={handleSubmit}>
        <h2 className="title">REGISTER</h2>

        <div className="Register__form--user">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>

        <div className="Register__form--user">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>

        <div className="Register__form--user">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>

        <div className="Register__button">
          <button disabled={!formValues.password || !formValues.username}>
            Register
          </button>
        </div>
      </form>
      <div className="image">
      <img src="/assets/ilustration2Copia.png" alt="ilustration"></img>
      </div>
    </div>
    
  );
}
