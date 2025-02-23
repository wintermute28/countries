import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

// import { Controls } from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import {
  selectAllCountries,
  selectCountriesInfo,
} from "../store/countries/countries-selectors";
import { loadCountries } from "../store/countries/countries-actions";

// eslint-disable-next-line react/prop-types
const HomePage = () => {
  // const [filteredCountries, setFilteredCountries] = useState(countries);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const countriesR = useSelector(selectAllCountries);
  const { status, error, qty } = useSelector(selectCountriesInfo, shallowEqual);

  // const handleSearch = (search, region) => {
  //   let data = [...countries];

  //   if (region) {
  //     data = data.filter((c) => c.region.includes(region));
  //   }

  //   if (search) {
  //     data = data.filter((c) =>
  //       c.name.toLowerCase().includes(search.toLowerCase())
  //     );
  //   }

  //   setFilteredCountries(data);
  // };

  //   useEffect(() => {
  // =    if (!countries.length)
  //       axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  //   }, []);

  // useEffect(() => {
  //   handleSearch();
  //   // eslint-disable-next-line
  // }, [countries]);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return (
    <>
      {/* <Controls
      onSearch={handleSearch}
      /> */}

      {error && <p>Cant load countries</p>}
      {status === "loading" && <p>Loading...</p>}

      {status === "received" && (
        <List>
          {countriesR.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };
            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export default HomePage;

//Without Redux
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import { Controls } from "../components/Controls";
// import List from "../components/List";
// import Card from "../components/Card";
// import { ALL_COUNTRIES } from "../config";

// // eslint-disable-next-line react/prop-types
// const HomePage = ({ setCountries, countries }) => {
//   const [filteredCountries, setFilteredCountries] = useState(countries);

//   const navigate = useNavigate();

//   const handleSearch = (search, region) => {
//     let data = [...countries];

//     if (region) {
//       data = data.filter((c) => c.region.includes(region));
//     }

//     if (search) {
//       data = data.filter((c) =>
//         c.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     setFilteredCountries(data);
//   };

//   useEffect(() => {
//     // eslint-disable-next-line react/prop-types
//     if (!countries.length)
//       axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
//   }, []);

//   useEffect(() => {
//     handleSearch();
//     // eslint-disable-next-line
//   }, [countries]);

//   return (
//     <>
//       <Controls onSearch={handleSearch} />
//       <List>
//         {filteredCountries.map((c) => {
//           const countryInfo = {
//             img: c.flags.png,
//             name: c.name,
//             info: [
//               {
//                 title: "Population",
//                 description: c.population.toLocaleString(),
//               },
//               {
//                 title: "Region",
//                 description: c.region,
//               },
//               {
//                 title: "Capital",
//                 description: c.capital,
//               },
//             ],
//           };
//           return (
//             <Card
//               key={c.name}
//               onClick={() => navigate(`/country/${c.name}`)}
//               {...countryInfo}
//             />
//           );
//         })}
//       </List>
//     </>
//   );
// };

// export default HomePage;
