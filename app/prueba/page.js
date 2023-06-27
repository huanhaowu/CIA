import React from "react";
import { Eye } from "./Eye";
import { Frame } from "./Frame";
import "./style.css";

export const LogIn = () => {
  return (
    <div className="log-in">
      <div className="frame-2">
        <h1 className="h-1">Welcome back</h1>
        <p className="p">Log in to Calculadora Indice Academico</p>
        <Frame property1="default" />
        <div className="frame-3">
          <div className="frame-4">
            <img className="img" alt="Icon" src="image.svg" />
            <input className="input" />
          </div>
          <Eye
            style={{
              height: "25px",
              minWidth: "25px",
              position: "relative",
            }}
          />
        </div>
        <div className="text-wrapper-2">Forgot password?</div>
        <Frame property1="boton" />
      </div>
      <img className="unsplash" alt="Unsplash" src="unsplash-vjyj5j3mlfi.png" />
    </div>
  );
};
