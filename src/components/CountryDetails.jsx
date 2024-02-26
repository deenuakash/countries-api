import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
  const { name } = useParams();
  const [info, setInfo] = useState({});
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      const data = await res.json();
      setInfo(...data);
    };
    fetchCountry();
  }, [name]);

  useEffect(() => {
    const fetchBorder = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${[...info.borders]}`
      );
      const data = await res.json();
      setBorders(data);
    };
    if (info?.borders) fetchBorder();
  }, [info]);

  return (
    <div className="max-w-[1440px] mx-auto dark:text-white">
      <div className="mx-10 md:mx-15 xl:mx-20">
        <button
          className="bg-white dark:bg-dark-blue dark:text-white flex items-center justify-center gap-1.5 py-1 px-6 shadow-sm rounded-md my-10"
          onClick={() => window.history.back()}
        >
          <FontAwesomeIcon className="w-6 h-6" icon={faArrowLeft} />
          <span>Back</span>
        </button>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-12">
          <div className="w-80 h-[14.375rem] md:w-[25rem] md:h-[20rem] lg:justify-self-start xl:w-[35rem] xl:h-[25rem]">
            <img
              className="object-fit w-full h-full"
              src={info?.flags?.svg}
              alt={`${info?.name?.common} Flag`}
            />
          </div>
          <div className="flex flex-col gap-8 w-80 md:w-[25rem] lg:w-full">
            <h4 className="text-[1.5rem] font-bold lg:text-[1.75rem] xl:text-[2rem]">
              {info?.name?.common}
            </h4>
            <div className=" flex flex-wrap justify-between gap-12 text-sm lg:text-base">
              <div>
                <p>
                  <strong>Native Name: </strong>
                  {
                    info?.name?.nativeName[
                      Object.keys(info?.name?.nativeName)[
                        Object.keys(info?.name?.nativeName).length - 1
                      ]
                    ]?.common
                  }
                </p>
                <p>
                  <strong>Population: </strong>
                  {new Intl.NumberFormat().format(info?.population)}
                </p>
                <p>
                  <strong>Region: </strong>
                  {info?.region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {info?.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {info?.capital?.join(", ")}
                </p>
              </div>

              <div className="">
                <p>
                  <strong>Top Level Domain: </strong>
                  {info?.tld}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {info?.currencies &&
                    Object.keys(info.currencies)
                      .map((key) => info.currencies[key].name)
                      .join(", ")}
                </p>
                <p>
                  <strong>Language: </strong>
                  {info?.languages &&
                    Object.keys(info.languages)
                      .map((key) => info.languages[key])
                      .join(", ")}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <strong className="mr-4">Border Countries: </strong>
              <div className="flex gap-2.5 flex-wrap items-center">
                {borders.map((border) => (
                  <Link
                    key={border.cioc}
                    to={`/country/${border?.name?.common}`}
                    className="text-sm lg:text-base px-7 py-1.5 shadow-md rounded-md bg-light-bg dark:bg-dark-blue dark:text-white"
                  >
                    {border?.name?.common}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
