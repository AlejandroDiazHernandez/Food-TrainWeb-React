import React from "react";

export default function Card(props) {
  return (
    <div className="Card">
      <ul>
        {props.elements.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
      <button onClick={() => props.handleClick()}>Saber Más</button>
    </div>
  );
}
