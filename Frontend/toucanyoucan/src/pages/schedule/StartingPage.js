import { useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button";

const StartingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: "100vh",
        position: "relative",
        padding: "15px",
      }}
    >
      <img
        alt=""
        src="tucan.png"
        style={{
          position: "absolute",
          top: "500px",
          right: "0",
          width: "231px",
          height: "346px",
        }}
      />

      <div className="flex flex-col items-center">
        {/* No planned activities div */}
        <div
          className="text-center mx-auto"
          style={{
            height: "55px",
            fontWeight: "700",
            fontSize: "32px",
            fontFamily: "Koh Santepheap",
            color: "#474747",
          }}
        >
          <h1>NO PLANNED ACTIVITIES YET</h1>
        </div>
        <div className="flex flex-col items-center">
          <Button
            primary
            rounded
            className=" rounded-xl w-64 h-12 mt-8 mb-3 text-xl"
          >
            Find Course
          </Button>

          <div className="flex flex-row justify-center items-center text-xl italic">
            <hr className="bg-primary w-64 h-px m-5 border-none " />
            OR
            <hr className="bg-primary w-64 h-px m-5 border-none" />
          </div>
          <div className="flex flex-col items-center">
            <Button
              onClick={() => {
                navigate("/createcourse");
              }}
              primary
              outline
              rounded
              className=" rounded-xl w-64 h-12 mt-3 text-lg"
            >
              Create Course
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
