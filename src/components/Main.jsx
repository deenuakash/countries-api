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
  const [finalCountries, setFinalCountries] = useState(filteredCountries);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    setFinalCountries(filteredCountries);
  }, [filteredCountries]);

  const handleFilter = (e) => {
    let filteredCountries =
      e.target.value !== ""
        ? countries?.filter((country) => country?.region === e.target.value)
        : countries;
    setFilteredCountries(filteredCountries);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    let filteredResults =
      e.target.value !== ""
        ? filteredCountries?.filter((country) =>
            country?.name?.common
              ?.toLowerCase()
              .includes(e.target.value.toLowerCase())
          )
        : filteredCountries;
    setFinalCountries(filteredResults);
  };

  return (
    <main className="mx-4 my-4 bg-light-bg md:mx-20 min-w-full">
      <div className="flex flex-wrap gap-6 justify-between">
        <Input handleInput={handleInput} />
        <Filter regions={regions} handleFilter={handleFilter} />
      </div>
      {loading && <Loader />}
      <div className="flex flex-wrap my-8 justify-center gap-4 md:justify-between">
        {finalCountries.map((country) => {
          return <CountryCard key={country.flag} data={country} />;
        })}
      </div>
    </main>
  );
};

export default Main;
