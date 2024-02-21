import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Input = () => {
  return (
    <div className="shadow-sm max-w-[30rem] h-12 my-2 rounded-md py-2 px-7 flex items-center bg-white">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="p-1 text-dark-gray"
      />
      <input
        className="w-full mx-5 text-sm text-dark-gray"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Input;
