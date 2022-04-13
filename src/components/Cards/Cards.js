import React from 'react';
import styles from './Cards.module.css';



const Cards = ({ results }) => {

  let display;

  if(results){
    display = results.map((result) => {
      let { id, name, image, status, species, type, location} = result;
      return (
      <div className="card mb-4 col-4 position-relative" key={id}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
  
          <p className="card-text">{species}</p>
          <p className="card-text">{type}</p>
          <p className="card-text">{location.name}</p>
          {(() => {
            if(status === "Dead"){
              return <p className={`${styles.badge} position-absolute badge bg-danger`}>{status}</p>
            } else if(status === "Alive") {
              return <p className={`${styles.badge} position-absolute badge bg-success`}>{status}</p>
            } else {
              return <p className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</p>
            }
          
          })()}
          
        </div>
        
      </div>
      );
      });
  } else {
    display = "No characters found";
  }
  return <>
    {display}
    </>
  
}

export default Cards