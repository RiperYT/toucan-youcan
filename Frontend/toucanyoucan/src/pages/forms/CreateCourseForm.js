import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/shared/Button";
import Field from "../../components/forms/Field";
import { changeCourseName, changeAdminNames } from "../../store";
import { useNavigate } from "react-router-dom";

const CreateCourseForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseName, adminNames } = useSelector((state) => {
    return state.form;
  });
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
      <form
        onSubmit={() => {}}
        className="border-4 border-primary rounded-xl p-4 shadow-2xl space-y-10"
        style={{
          width: "849px",
          height: "600px",
          boxShadow: "0px 0px 66px 6px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Create a course div */}
        <div
          className="text-center mx-auto"
          style={{
            height: "55px",
            fontWeight: "400",
            fontSize: "48px",
            color: "#474747",
            marginTop: "28px",
          }}
        >
          <h1>CREATE A COURSE</h1>
        </div>
        {/* div that creates space between fields, text and buttons */}
        <div className="flex flex-col justify-center space-y-5 font-semibold">
          <div>
            {/* div that holds fields */}
            <div>
              <div className="flex justify-center">
                <Field
                  value={courseName}
                  onChange={(event) => {
                    dispatch(changeCourseName(event.target.value));
                  }}
                  className="text-center w-96 h-12 max-h-full mt-0 font-semibold"
                  placeholder="Course name"
                />
              </div>
              {/* Create a Add admins div */}
              <div
                className="text-center mx-auto"
                style={{
                  height: "55px",
                  fontWeight: "400",
                  fontSize: "32px",
                  color: "#474747",
                  marginTop: "6px",
                }}
              >
                <h1>Add admins:</h1>
              </div>
              <div className="flex justify-center">
                <textarea
                  value={adminNames}
                  onChange={(event) => {
                    dispatch(changeAdminNames(event.target.value));
                  }}
                  className="border border-green-600 bg-background-green resize-none rounded-xl text-center w-96 h-48 max-h-full mx-10  font-semibold "
                  placeholder="hfhhfhfhhfhh@gmail.com
                                osjjdopskfj@gmail.com
                                ksldoilfo@gmail.com
                                starwageningermane@gmail.com
                                ilovemcdonalds@gmail.com"
                />
              </div>
            </div>
            {/* div that holds buttons and so on */}
            <div className="flex flex-col items-center">
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/");
                }}
                primary
                rounded
                className="w-96 h-12 mt-5 text-lg transition-all hover:bg-accent"
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCourseForm;
