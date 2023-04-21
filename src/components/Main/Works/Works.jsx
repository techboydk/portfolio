import React, { useState } from 'react'
import './works.scss'
import SectionHeading from '../../SectionHeading/SectionHeading'
import { workData } from '../../../assets/data/WorkData'
import WorkCard from '../../Card/WorkCard'

const Works = () => {
  const [category, setCategory] = useState('all');

  const handleClick = (e) => {
    if(e.target.parentElement.classList.contains('tags')){
      e.target.parentElement.querySelector('.active-tag').classList.contains('active-tag') && e.target.parentElement.querySelector('.active-tag').classList.remove('active-tag')
      e.target.classList.add('active-tag')
    }else{
      e.target.parentElement.parentElement.querySelector('.active-tag').classList.contains('active-tag') && e.target.parentElement.parentElement.querySelector('.active-tag').classList.remove('active-tag')
      e.target.parentElement.classList.add('active-tag')
    }

    e.target.innerText === "REACT JS" && setCategory('reactjs');
    e.target.innerText === "HTML & CSS" && setCategory('html and css');
    e.target.innerText === "ALL" && setCategory('all');

  }

  return (
    <div className="works-section" id='mywork'>
      <SectionHeading heading="My works" bgText="works" key="mywork"/>
      <div className="tags">
        <div className="header-btn btn active-tag" onClick={handleClick}><span>All</span></div>
        <div className="header-btn btn" onClick={handleClick}><span>Html & Css</span></div>
        <div className="header-btn btn" onClick={handleClick}><span>React js</span></div>
      </div>
      <div className="card-container">
        {workData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {category === "all" ? <WorkCard details={item} key={index*5} /> : item.category === category && <WorkCard details={item} key={index}/>}

            </React.Fragment>
          );
        })}
      </div>
    </div>
  )
}

export default Works
