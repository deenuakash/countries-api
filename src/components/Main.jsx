import useCountries from "../hooks/useCountries";
import Input from "./Input";
import Loader from "./Loader";
import Filter from "./Filter";

const Main = () => {
  const { countries, loading } = useCountries();
  console.log(countries);
  const regions = [...new Set(countries?.map((country) => country.region))];
  console.log(regions.sort());

  return (
    <main className="mx-4 my-4 bg-light-bg">
      <div className="flex flex-wrap gap-6 justify-between">
        <Input />
        <Filter regions={regions} />
      </div>
      {loading && <Loader />}
    </main>
  );
};

export default Main;
