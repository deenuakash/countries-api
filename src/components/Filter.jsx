import React from "react";

const Filter = ({ regions, handleFilter }) => {
  return (
    <select
      className="h-12 px-6 rounded-md my-2 w-[200px] text-xs lg:h-14 md:text-sm dark:text-white dark:bg-dark-blue cursor-pointer"
      name="Filter by Region"
      defaultValue=""
      onChange={(e) => handleFilter(e)}
    >
      <option value="">Filter by Region</option>
      {regions.map((region, i) => (
        <option key={i} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default Filter;
