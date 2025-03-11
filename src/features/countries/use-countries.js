import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";

import { selectControls } from "../controls/controls-slice";
import {
  loadCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countries-slice";

export const useCountries = () => {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);

  const countries = useSelector((state) =>
    selectVisibleCountries(state, controls)
  );
  const { status, error, qty } = useSelector(selectCountriesInfo, shallowEqual);
  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, status, error];
};
