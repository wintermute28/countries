import styled from "styled-components";

import { IoSearch } from "react-icons/io5";

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

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch size={24} />
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        name="search"
      />
    </InputContainer>
  );
};

export default Search;
