import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ data }) => {
  return (
    <Link
      className="w-[16.5rem] rounded-md overflow-hidden shadow-sm mb-4 dark:text-white dark:bg-dark-blue"
      to={`country/${data.name.common}`}
    >
      <div className="h-40">
        <img
          className="object-cover w-full h-full"
          src={data?.flags?.svg}
          alt={`${data?.name?.common} Flag`}
        />
      </div>
      <div className="p-6">
        <h4 className="text-lg font-bold">{data?.name?.common}</h4>
        <div className="py-3 font-light">
          <p>
            <strong>Population: </strong>
            {new Intl.NumberFormat().format(data?.population)}
          </p>
          <p>
            <strong>Region: </strong>
            {data?.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {data?.capital?.join(", ")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
