import Calendar from "../../calendar/Calendar";

const MainPage = () => {

  return (
    <div className="flex flex-row bg-background-green">
      <div id="calendar" className="overflow-auto" >
        <Calendar />
      </div>
    </div>
  );
};

export default MainPage;
