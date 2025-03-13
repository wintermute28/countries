/* eslint-disable react/prop-types */
import { NavigateFunction } from "react-router-dom";
import Info from "./Info";
import { useDetails } from "./use-details";

interface ICountryDetailsProps {
  navigate: NavigateFunction;
  name?: string;
}

const CountryDetails = ({ name = "", navigate }: ICountryDetailsProps) => {
  const { currentCountry, error, status } = useDetails(name);

  return (
    <>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info {...currentCountry} navigate={navigate} />}
    </>
  );
};

export default CountryDetails;
