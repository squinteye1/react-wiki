import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setpageNumber }) => {

let next = (e) => {
    if(pageNumber === info?.pages) return;
    e.preventDefault();
    setpageNumber((x) => x + 1);
};
let prev = (e) => {
    if(pageNumber === 1) return;
    e.preventDefault();
    setpageNumber((x) => x - 1);
};

  return (
    <div className="d-flex justify-content-center gap-3 my-5">
        <button onClick={prev} className="btn btn-primary">Prev</button>
        {pageNumber} of {info?.pages}
        <button onClick={next} className="btn btn-primary">Next</button>
    </div>
  )
}

export default Pagination

/*
      
    <div className="d-flex justify-content-center gap-3 my-5">
        <button onClick={prev} className="btn btn-primary">Prev</button>
        <button onClick={next} className="btn btn-primary">Next</button>
    </div>


        <ReactPaginate 
        className="pagination justify-content-center gap-3 my-4" 
        nextLabel="Next"
        previousLabel="Prev" 
        activeClassName='active'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        pageCount={info?.pages}
        onPageChange={(data) => {
            setpageNumber(data.selected + 1);
        }}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
         />
*/