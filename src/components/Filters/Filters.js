import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';
import styles from './Filters.module.css';

const Filters = ( { setStatus, setpageNumber, setGender, setSpecies}) => {
  let clear = () => { 
    setStatus("");
    setpageNumber(""); 
    setGender(""); 
    setSpecies("");
    window.location.reload(false);
  }

  return (
    <div className="col-3" >
    <div className={styles.sticky}>
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div onClick={clear} style={{cursor: "pointer"}} className="text-center text-primary text-decoration-underline mb-4">Clear Filters</div>
      <details className="border mb-4">  
        <summary className="p-3 border border-left border-right">Status</summary> 
        <Status setpageNumber={setpageNumber} setStatus={setStatus} />
      </details>
      <details className="border mb-4">  
        <summary className="p-3 border border-left border-right">Species</summary> 
        <Species setpageNumber={setpageNumber} setSpecies={setSpecies}  />
      </details>  
      <details className="border mb-4">  
        <summary className="p-3 border border-left border-right">Gender</summary> 
        <Gender setpageNumber={setpageNumber} setGender={setGender} />
      </details>  
      
      
     
    </div>
    </div>
  )
}

export default Filters