import React, { useEffect, useRef, useState } from 'react'
import './section-heading.scss'

const SectionHeading = (props) => {

    const myDivRef = useRef(null);
    const [isMove, setToMove] = useState(false);
    const [percetage, setPercetage] = useState(null);


    useEffect(() => {
      function handleScroll() {
        const myDiv = myDivRef.current;
        const rect = myDiv.getBoundingClientRect();
        setPercetage(Math.floor((window.innerHeight-rect.top)*100/window.innerHeight));
        if(percetage>0 && percetage<100){
            setToMove(true);
        }else{
            setToMove(false);

        }
      }
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isMove, percetage]);
  
    return (
        <div className="section-heading">
            <div className="heading">{props.heading}</div>
            <span className='dot-container'>
                <span className="dot"></span>
            </span>
            <span className='bg-text'ref={myDivRef} style={{transform:`translate(-${percetage*2.5}%)`}}>{props.bgText}</span>
        </div>
    )
}

export default SectionHeading;
