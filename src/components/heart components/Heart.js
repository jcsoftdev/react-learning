import React, { useState } from "react";
import "./heart.css";

const Heart = () => {
  const [active, setActive] = useState(false);
  const toggle = () => setActive(!active);
  const btn_class = active ? "btn btn-active" : "btn ";
  return (
    <>
      <button className={btn_class} onClick={toggle}>
        {active ? "Desactivar" : "Activar"}
      </button>
      <div className="heart-content">
        {active ? (
          <div className="heart"></div>
        ) : (
          <div className="text">Click arriba para ver lo genial</div>
        )}
      </div>
    </>
  );
};
export default Heart;
