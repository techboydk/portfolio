import React from "react";
import Tag from "../../components/Main/Works/tag";

const WorkCard = (props) => {
  //console.log(props.details.tag);
  return (
    <div className="work-card card">
      <div className="image-hover">
        <div className="image">
          {props.details.image === "" ? (
            <span>{props.details.title.split("")[0]}</span>
          ) : (
            <img
              src={require(`../../assets/images/${props.details.image}`)}
              alt=""
            />
          )}
        </div>
        <div className="hover-content">
          {props?.details?.previewUrl && (
            <a
              href={props.details.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button btn"
            >
              <span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </span>
            </a>
          )}
          {props?.details?.gitUrl && (
            <a
              href={props.details.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button btn"
            >
              <span>
                <i class="fa-brands fa-github"></i>
              </span>
            </a>
          )}
        </div>
      </div>
      <div className="content">
        <div className="skill_tags">
          {props?.details?.tag.map((tag) => {
            return <Tag key={tag.name} name={tag} />;
          })}
        </div>
        <div className="title">{props.details.title}</div>
        <div className="desc">{props.details.desc}</div>
      </div>
    </div>
  );
};

export default WorkCard;
