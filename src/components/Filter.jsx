import React from "react";

const Filter = ({ regions, handleFilter }) => {
  return (
    <select
      className="h-12 px-6 rounded-md my-2 w-[200px] text-sm"
      name="Filter by Region"
      onChange={(e) => handleFilter(e)}
    >
      <option selected value="">
        Filter by Region
      </option>
      {regions.map((region, i) => (
        <option key={i} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default Filter;
