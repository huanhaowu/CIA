import PropTypes from "prop-types";
import React from "react";
import { Eye } from "./Eye";
import { User02 } from "./User02";
import "./styleframe.css";

export const Frame = ({ property1, style }) => {
  return (
    <div className={`frame ${property1}`} style={style}>
      {property1 === "default" && (
        <User02
          style={{
            height: "24px",
            minWidth: "24px",
            position: "relative",
          }}
        />
      )}

      {["boton", "default"].includes(property1) && (
        <div className="username">
          {property1 === "default" && <>Username</>}

          {property1 === "boton" && <>Log in</>}
        </div>
      )}

      {property1 === "password" && (
        <>
          <div className="div">
            <img className="icon" alt="Icon" src="icon.svg" />
            <div className="text-wrapper">Password</div>
          </div>
          <Eye
            style={{
              height: "25px",
              minWidth: "25px",
              position: "relative",
            }}
          />
        </>
      )}
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["password", "boton", "default"]),
};

