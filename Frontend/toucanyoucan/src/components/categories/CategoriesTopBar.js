import { FiArrowLeft } from "react-icons/fi";

const CategoriesTopBar = ({ categoryName, onClick }) => {
  return (
    <div className="h-11 flex flex-row text-center items-center relative text-primary justify-center p-2">
      <FiArrowLeft
        size={30}
        className="absolute top-2 left-2 cursor-pointer"
        onClick={onClick}
      />
      <p className="">{categoryName}</p>
    </div>
  );
};

export default CategoriesTopBar;
