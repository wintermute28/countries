import { useState } from "react";
import styled from "styled-components";

import Search from "./Search";
import { CustomSelect } from "./CustomSelect";

const options = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};

export default Controls;
