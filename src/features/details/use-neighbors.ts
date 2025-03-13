import { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { loadNeighborsByBorder } from "./details-slice";
import { selectNeighbors } from "./details-selectors";
import { useAppDispatch } from "../../store";

export const useNeighbors = (borders: string[] = []) => {
  const dispatch = useAppDispatch();

  const neighbors = useSelector(selectNeighbors, shallowEqual);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};
