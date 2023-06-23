import Calendar from "../../calendar/Calendar";
import CategoriesSidebar from "../../components/categories/CategoriesSideBar";
import { GoPerson, GoThreeBars } from "react-icons/go";
import { useState } from "react";
import { useSelector } from "react-redux";
import StartingPage from "./StartingPage";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const scrollContainer = document.scrollingElement;

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  const navigate = useNavigate();

  return (
    <div className="bg-background-primary">
      <GoPerson
        className="flex fixed top-0 z-50 m-1 p-1 w-8 h-8 hover:cursor-pointer hover:bg-accent rounded-full"
        onClick={() => {
          navigate("/profile");
        }}
      />
      {!useSelector((state) => state.categories.all).length ? (
        <StartingPage />
      ) : (
        <div className="flex flex-row bg-background-primary">
          <div className={`flex fixed left-0 top-9 z-50 
          ${isExpanded ? "border border-2 rounded-lg border-primary" : ""} }`}>
            {isExpanded && <CategoriesSidebar />}
            <GoThreeBars
              className="m-1 p-1 w-10 h-10 hover:cursor-pointer hover:bg-accent rounded-full"
              size={30}
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            />
          </div>
          <div>
            <Calendar />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
