import useCountries from "../hooks/useCountries";
import Input from "./Input";
import Loader from "./Loader";
import Filter from "./Filter";
import CountryCard from "./CountryCard";

const Main = () => {
  const { countries, loading } = useCountries();
  console.log(countries);
  const regions = [...new Set(countries?.map((country) => country.region))];
  console.log(regions.sort());

  return (
    <main className="mx-4 my-4 bg-light-bg md:mx-20">
      <div className="flex flex-wrap gap-6 justify-between">
        <Input />
        <Filter regions={regions} />
      </div>
      {loading && <Loader />}
      <div className="flex flex-wrap my-8 justify-center gap-4 md:justify-between">
        {countries.map((country) => {
          return <CountryCard key={country.flag} data={country} />;
        })}
      </div>
    </main>
  );
};

export default Main;
