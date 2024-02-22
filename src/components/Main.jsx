import useCountries from "../hooks/useCountries";
import Input from "./Input";
import Loader from "./Loader";
import Filter from "./Filter";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";

const Main = () => {
  const { countries, loading } = useCountries();
  const regions = [...new Set(countries?.map((country) => country.region))];

  const [filteredCountries, setFilteredCountries] = useState([]);

  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    console.log(filter, search);
    let filtered = countries
      .filter((country) => {
        if (filter !== "") {
          return country.region === filter;
        }
        return countries;
      })
      .filter((country) => {
        if (search !== "") {
          return country.name.common
            .toLowerCase()
            .includes(search.toLowerCase());
        }
        return countries;
      });
    setFilteredCountries(filtered);
  }, [filter, search]);

  return (
    <main className="mx-4 my-4 bg-light-bg md:mx-20">
      <div className="flex flex-wrap gap-6 justify-between">
        <Input handleInput={(e) => setSearch(e.target.value)} />
        <Filter
          regions={regions}
          handleFilter={(e) => setFilter(e.target.value)}
        />
      </div>
      {loading && <Loader />}
      <div className="flex flex-wrap my-8 justify-center gap-10 md:justify-between md:gap-16">
        {filteredCountries.map((country) => {
          return <CountryCard key={country.flag} data={country} />;
        })}
      </div>
    </main>
  );
};

export default Main;
