import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <div className=" shadow-md  bg-white dark:bg-dark-blue dark:text-white w-full">
      <div className=" h-[80px] max-w-[1440px] mx-auto flex justify-between items-center">
        <h3 className="text-sm font-extrabold ml-4 md:ml-20 md:text-xl lg:text-2xl">
          Where in the world?
        </h3>
        <p
          className="flex gap-1.5 justify-center items-center mr-4 text-xs md:mr-20 md:text-base"
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
