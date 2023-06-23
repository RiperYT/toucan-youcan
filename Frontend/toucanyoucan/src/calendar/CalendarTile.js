const CalendarTile = ({ day, timetable }) => {
    return (
      <div
        name="tile-box"
        className="shadow-tile box-border w-96 p-6 border-2 border-accent rounded-2xl"
      >
        <div name="date" className="font-bold text-xl uppercase">
          {day} <br />
        </div>
        <hr
          name="date-divider-line"
          className="my-1 bg-primary"
          style={{ border: "none", height: "2px" }}
        />
        <div name="activities" className="font-medium">
          {timetable.map((item, index) => {
            return (
              <div key={index} className="flex flex-wrap place-items-center">
                <div name="left-time-divider" className="">
                  <hr className="bg-primary w-3px h-8" />
                </div>
                <div name="time" className={`my-2 p-1`}>
                  {item.startTime} {item.endTime ? ` - ${item.endTime}` : ""}
                </div>
                <div name="right-time-divider" className="">
                  <hr className="bg-primary w-3px h-8 mr-2" />
                </div>
                <div
                  name="activity-name"
                  className="underline underline-offset-1"
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default CalendarTile;
  