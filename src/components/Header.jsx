import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <div className=" shadow-sm bg-white dark:bg-dark-blue dark:text-white">
      <div className=" h-[80px] max-w-[1440px] mx-4 md:mx-20 2xl:m-auto flex justify-between items-center">
        <Link
          className="text-sm font-extrabold  md:text-xl lg:text-2xl"
          to={`/`}
        >
          Where in the world?
        </Link>
        <p
          className="flex gap-1.5 justify-center items-center  text-xs md:text-base cursor-pointer"
          onClick={() => toggleTheme()}
        >
          {theme === "Light" ? (
            <FontAwesomeIcon className="p-1" icon={faMoon} />
          ) : (
            <FontAwesomeIcon className="p-1" icon={faSun} />
          )}
          {`${theme === "Light" ? "Dark" : "Light"} Mode`}
        </p>
      </div>
    </div>
  );
};

export default Header;
