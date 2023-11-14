import React from "react";
import Card from "../../Card/Card";
import SectionHeading from "../../SectionHeading/SectionHeading";
import "./skill.scss";
import { Skills } from "../../../assets/data/skills";

const Skill = () => {
  return (
    <div className="skill-section" id="skills">
      <SectionHeading heading="my skills" bgText="skills" />
      <div className="skill-wrapper">
        <div className="cards">
          {Skills.map((item) => {
            return <Card skill={item} key={item.skillName} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
