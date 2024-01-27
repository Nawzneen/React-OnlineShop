import React from "react";
import classNames from "classnames";

function getBackgroundColorClass(type) {
  return classNames({
    "bg-simple": type === "simple",
    "bg-luxury": type === "luxury",
    "bg-rugged": type === "rugged",
  });
}
const style = {
  borderRadius: "5px",
  marginLeft: "0",
  padding: "0.3rem 1rem",
  color: "white",
  textTransform: "capitalize",
};
export default function TypeBtn(props) {
  return (
    <div className="d-flex align-items-center">
      <span
        className={`van-type  ${getBackgroundColorClass(props.van.type)}`}
        style={style}
      >
        {props.van.type}
      </span>
    </div>
  );
}
