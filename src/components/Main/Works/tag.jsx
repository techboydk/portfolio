import React from "react";
import "./works.scss";

const tag = ({ name }) => {
  console.log(name);
  return <div className="skill_tag">{name}</div>;
};

export default tag;
