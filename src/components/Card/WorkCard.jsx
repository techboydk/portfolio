import React from 'react'

const WorkCard = (props) => {
  console.log(props.details.image)
  return (
    <div className="work-card card">
      <div className="image-hover">
        <div className="image">
          {props.details.image===''?<span>{props.details.title.split('')[0]}</span>:<img src={require(`../../assets/images/${props.details.image}`)} alt="" />}
        </div>
        <div className="hover-content">
          <a href={props.details.previewUrl} target='_blank' rel="noopener noreferrer" className="button btn"><span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></a>
        </div>
      </div>
      <div className="content">
        <div className="title">{props.details.title}</div>
        <div className="desc">{props.details.desc}</div>
      </div>
    </div>
  )
}

export default WorkCard;
