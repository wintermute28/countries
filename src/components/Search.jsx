import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { IoSearch } from "react-icons/io5";
import { selectSearch } from "../store/controls/controls-selectors";
import { setSearch } from "../store/controls/controls-actions";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 1rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
    background-color: var(--colors-ui-base);
    color: var(--color-text);
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <InputContainer>
      <IoSearch size={24} />
      <Input onChange={handleSearch} value={search} name="search" />
    </InputContainer>
  );
};

export default Search;
