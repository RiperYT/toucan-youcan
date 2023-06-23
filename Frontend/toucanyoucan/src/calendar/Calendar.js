import CalendarTile from "./CalendarTile";

// Debug var
const defaultTimetable = [
  { startTime: "8:30", endTime: "9:00", name: "Subject1" },
  { startTime: "10:30", name: "Subject2" },
  { startTime: "12:30", endTime: "15:00", name: "Subject3" },
];

const Calendar = () => {
  return (
    <div className="bg-background-primary flex h-screen mt-20">
      <div className="m-5">
        <CalendarTile day="Monday, April 10" timetable={defaultTimetable} />{" "}
      </div>
      <div className="m-5">
        <CalendarTile day="Tuesday, April 11" timetable={defaultTimetable} />{" "}
      </div>
      <div className="m-5">
        <CalendarTile day="Wednesday, April 12" timetable={defaultTimetable} />{" "}
      </div>
      <div className="m-5">
        <CalendarTile day="Thrusday, April 13" timetable={defaultTimetable} />{" "}
      </div>
      <div className="m-5">
        <CalendarTile day="Friday, April 14" timetable={defaultTimetable} />{" "}
      </div>
      <div className="m-5">
        <CalendarTile day="Saturday, April 15" timetable={defaultTimetable} />{" "}
      </div>
      <div className="m-5">
        <CalendarTile day="Sunday, April 16" timetable={defaultTimetable} />{" "}
      </div>
    </div>
  );
};

export default Calendar;
