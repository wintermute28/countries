import { useEffect } from "react";
import { useSelector } from "react-redux";

import { loadCountryByName, clearDetails } from "./details-slice";
import { selectDetails } from "./details-selectors";
import { useAppDispatch } from "../../store";

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return details;
};
