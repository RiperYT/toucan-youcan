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
        onClick={() => {
          navigate("/profile");
        }}
      />
      {!useSelector((state) => state.categories.all).length ? (
        <StartingPage />
      ) : (
        <div className="flex flex-row bg-background-primary">
          <div className="flex sticky">
            {isExpanded && <CategoriesSidebar />}
            <GoThreeBars
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
