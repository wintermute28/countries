import { useNavigate } from "react-router-dom";

import { List } from "../../components/List";
import { Card } from "../../components/Card";
import { useCountries } from "./use-countries";

import { CountryInfo } from "../../types";

export const CountryList = () => {
  const navigate = useNavigate();

  const [countries, status, error] = useCountries();

  return (
    <>
      {error && <p>Cant load countries</p>}
      {status === "loading" && <p>Loading...</p>}

      {status === "received" && (
        <List>
          {countries.map((c) => {
            const countryInfo: CountryInfo = {
              img: c.flags.svg || c.flags.png,
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
                onClick={() => void navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
