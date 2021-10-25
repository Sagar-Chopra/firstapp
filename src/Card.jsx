import React from 'react';
import Heading from './Heading';


function Card(props){
  return(
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgscr} alt="myPic" className="card__img"/>
        <div className="card__info">
          <span className="card__category"> {props.title} </span>
          <Heading sname={props.sname} />
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </>
  )
}


export default Card;