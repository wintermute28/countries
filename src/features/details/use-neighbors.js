import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { selectNeighbors, loadNeighborsByBorder } from "./details-slice";

export const useNeighbors = (borders = []) => {
  const dispatch = useDispatch();

  const neighbors = useSelector(selectNeighbors, shallowEqual);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};
