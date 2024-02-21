import { useEffect, useState } from "react";

const useCountries = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        if (!res.ok) {
          throw new Error("unable to retrieve data!!");
        }
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { countries, loading };
};

export default useCountries;
