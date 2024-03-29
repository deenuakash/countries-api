import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Input = ({ handleInput }) => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
    handleInput(e);
  };

  return (
    <div className="shadow-sm w-full max-w-[30rem] h-12 my-2 rounded-md py-2 px-7 flex items-center lg:h-14 text-dark-gray dark:text-white dark:bg-dark-blue">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="p-1 " />
      <input
        className="w-full mx-5 text-xs bg-light-bg dark:bg-dark-blue outline-none focus:outline-none md:text-sm"
        type="text"
        placeholder="Search for a country..."
        value={input}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default Input;
