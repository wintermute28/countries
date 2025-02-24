import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
// import { searchByCountry } from "../config";
import Button from "../components/Button";
import Info from "../components/Info";
import { selectDetails } from "../store/details/details-selector";
import {
  clearDetails,
  loadCountryByName,
} from "../store/details/details-actions";

const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [country, setCountry] = useState(null);

  const { currentCountry, error, status } = useSelector(selectDetails);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={handleGoBack}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info {...currentCountry} navigate={navigate} />}
    </div>
  );
};

export default Details;
