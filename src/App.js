import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [pageNumber, setpageNumber] = useState(1);
  console.log(pageNumber);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    (async function () {
      let data = await fetch(api).then((res) => res.json());

      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        React Project - Rick &amp; <span className="primary">Morty Wiki</span>
      </h1>
      <Search setSearch={setSearch} setpageNumber={setpageNumber} />
      <div className="container">
        <div className="row">
          <Filters setStatus={setStatus} setGender={setGender} setpageNumber={setpageNumber} setSpecies={setSpecies} />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
            <Pagination
              info={info}
              pageNumber={pageNumber}
              setpageNumber={setpageNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
