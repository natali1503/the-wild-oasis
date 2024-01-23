import { useSearchParams } from "react-router-dom";
import Select from "./Select";
/* eslint-disable */
function SortBy({ options }) {
  const [searchParams, setSearchRapams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function hadleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchRapams(searchParams);
  }
  return (
    <Select
      options={options}
      type="white"
      onChange={hadleChange}
      value={sortBy}
    ></Select>
  );
}

export default SortBy;
