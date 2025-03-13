import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import Button from "../components/Button";
import CountryDetails from "../features/details/CountryDetails";

const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Button onClick={handleGoBack}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetails navigate={navigate} name={name} />
    </div>
  );
};

export default Details;
