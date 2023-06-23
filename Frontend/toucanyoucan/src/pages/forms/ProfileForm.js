import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/shared/Button";
import Field from "../../components/forms/Field";

import {
  changeConfirmPassword,
  changeName,
  changeOldPassword,
  changePassword,
} from "../../store";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { name, oldPassword, password, confirmPassword } = useSelector(
    (state) => {
      return state.form;
    }
  );
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
        className="border-4 border-primary rounded-2xl p-4 shadow-2xl space-y-10"
        style={{
          width: "600px",
          height: "600px",
          boxShadow: "0px 0px 66px 6px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Profile div */}
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
          <h1>PROFILE</h1>
        </div>
        {/* div that creates space between fields and buttons */}
        <div className="flex flex-col justify-center space-y-5 font-semibold">
          <div>
            {/* div that holds fields */}
            <div>
              <div className="flex justify-center">
                <Field
                  value={name}
                  onChange={(event) => {
                    dispatch(changeName(event.target.value));
                  }}
                  className="text-center w-96 h-12 max-h-full mt-0 my-5 font-semibold"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Field
                password
                value={oldPassword}
                onChange={(event) => {
                  dispatch(changeOldPassword(event.target.value));
                }}
                className="text-center w-96 h-12 max-h-full mx-10 mt-5 font-semibold"
                placeholder="old password"
              />
            </div>
            <div className="flex justify-center">
              <Field
                password
                value={password}
                onChange={(event) => {
                  dispatch(changePassword(event.target.value));
                }}
                className="text-center w-96 h-12 max-h-full mx-10 mt-5 font-semibold"
                placeholder="new password"
              />
            </div>
            <div className="flex justify-center">
              <Field
                password
                value={confirmPassword}
                onChange={(event) => {
                  dispatch(changeConfirmPassword(event.target.value));
                }}
                className="text-center w-96 h-12 max-h-full mx-10 mt-5 font-semibold"
                placeholder="repeat password"
              />
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
                className="w-64 h-12 mt-10 text-lg hover:bg-accent rounded-full"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
