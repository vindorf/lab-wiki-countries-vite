import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  const [countrys, setCountrys] = useState([]);

  useEffect(() => {
    const apiURL = "https://ih-countries-api.herokuapp.com/countries";
    axios.get(apiURL).then((res) => setCountrys(res.data));
  }, []);
//   console.log(countrys);
  return (
    <div className="App">
      <h1>WikiCountries: Your Guide to the World</h1>
      {countrys.map((e) => {
        return (
          <div key={e._id} className="card">
            <h2>
              <Link to={`/${e.alpha3Code}`}>{e.name.common}</Link>
            </h2>
            <p>{e.alpha3Code} </p>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
