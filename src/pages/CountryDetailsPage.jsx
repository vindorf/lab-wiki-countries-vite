import axios from "axios";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails() {
  const [details, setDetails] = useState({});
  const [data, setData] = useState(true);
  const { alpha3Code } = useParams();
  // console.log( 'here we go', alpha3Code)
  // console.log('data received',details)
  console.log(details.borders);
  useEffect(() => {
    const apiURL = "https://ih-countries-api.herokuapp.com/countries/";
    axios.get(apiURL + alpha3Code).then((res) => setDetails(res.data));
    setData(false);
  },[alpha3Code]);

  return (
    <div>
      <h1>Countrie Details</h1>
      {data && <p>WAIT FOR DATA</p>}
      {!data && (
        <div className="card">
          <h1>Country Details</h1>
          <h3>Welcome to {details.name?.common}</h3>
          <h4>Capital: {details.capital}</h4>
          <p>Region: {details.region} </p>
          <p>Borders:</p>
          {details.borders && details.borders.length > 0 ? (
            details.borders.map((e) => {
              return(
                <p key={e}>
                     <Link to={`/${e}`}>{e} </Link>
                </p>
              ) 
            })
          ) : (
            <p>No border information available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
