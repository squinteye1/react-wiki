import React from 'react';
import FilterBTN from '../FilterBTN';

const Gender = ({setpageNumber, setGender}) => {
  let genders = ["Female", "Male", "Genderless", "Unknown"];
  return (
    <div className="p-3 d-flex flex-wrap gap-3">
    {genders.map((items, index) => (
    <FilterBTN key={index} name="gender" index={index} items={items} setpageNumber={setpageNumber} task={setGender}  />
    ))}
    
  </div>
  )
}

export default Gender