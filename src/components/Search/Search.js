import React from 'react';
import style from './Search.module.css';


const Search = ({ setSearch, setpageNumber }) => {
 //   e.preventDefault();

  
  return (
    <form className="d-flex justify-content-center gap-3 my-5">
        <input onChange={e => {
            setpageNumber(1);
            setSearch(e.target.value);
        }} type="text" className={style.search} placeholder="Search..." />
        <button onClick={(e) => {e.preventDefault()}} className="btn btn-primary fs-5">Search</button>
    </form>
  )
}

export default Search