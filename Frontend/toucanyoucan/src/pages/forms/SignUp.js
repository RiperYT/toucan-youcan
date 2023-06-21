import { useState } from "react";
import Button from "../../components/shared/Button";
import CheckBox from "../../components/shared/CheckBox";
import Field from "../../components/forms/Field";
import { useDispatch, useSelector } from "react-redux";
import {
  changeConfirmPassword,
  changeEmail,
  changePassword,
  hashPassword,
  resetForm,
  resetPasswords,
  signIn,
  useSignUpMutation,
} from "../../store";
import { Link, useNavigate } from "react-router-dom";

/*
TODO: ADD VALIDATION
ADD HTTP REQUEST TO THE SERVER
DISABLE EVERYTHING WHEN LOADING
*/

const SignUp = () => {
  // make local hashing, local forms

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, password, confirmPassword, hashedPassword } = useSelector(
    (state) => state.form
  );

  const [signUserUp, results] = useSignUpMutation();

  if (results.isSuccess) {
    if (results.data.user) {
      dispatch(signIn(results.data.user));
      navigate("/");
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // some validation
    // dispatch(hashPassword());
    // make http request to the server
    dispatch(hashPassword());
  };

  if (hashedPassword) {
    console.log(hashedPassword);
    signUserUp({ email, hashedPassword });
    dispatch(resetForm());
  }

  const [privacySettingsAccepted, setPrivaceSettingsAccepted] = useState(false);
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
          top: "0",
          right: "0",
          width: "231px",
          height: "346px",
        }}
      />
      <form
        onSubmit={handleFormSubmit}
        className="border-4 border-primary rounded-2xl p-4 shadow-2xl space-y-5"
        style={{
          width: "458px",
          boxShadow: "0px 0px 66px 6px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Sign Up div */}
        <div
          className="text-center mx-auto"
          style={{
            height: "55px",
            fontWeight: "400",
            fontSize: "40px",
            color: "#474747",
            marginTop: "44px",
          }}
        >
          <h1>Sign Up</h1>
        </div>
        {/* div that creates space between fields and buttons */}
        <div className="flex flex-col justify-center space-y-5">
          <div>
            {/* div that holds fields */}
            <div>
              <div className="flex justify-center">
                <Field
                  value={email}
                  onChange={(event) => {
                    dispatch(changeEmail(event.target.value));
                  }}
                  className="text-center w-full h-12 max-h-full mx-10 mt-5 font-semibold"
                  placeholder="e-mail"
                />
              </div>
              <div className="flex justify-center">
                <Field
                  value={password}
                  onChange={(event) => {
                    dispatch(changePassword(event.target.value));
                  }}
                  password
                  className="text-center w-full h-12 max-h-full mx-10 mt-5 font-semibold"
                  placeholder="password"
                />
              </div>
              <div className="flex justify-center">
                <Field
                  value={confirmPassword}
                  onChange={(event) => {
                    dispatch(changeConfirmPassword(event.target.value));
                  }}
                  password
                  className="text-center w-full h-12 max-h-full mx-10 my-5 font-semibold"
                  placeholder="repeat password"
                />
              </div>
            </div>
            {/* div that holds buttons and so on */}
            <div className="flex justify-center">
              <CheckBox
                value={privacySettingsAccepted}
                onChange={() => {
                  setPrivaceSettingsAccepted((currentState) => !currentState);
                }}
              />

              <div
                style={{
                  fontSize: "12px",
                  lineHeight: "25px",
                  color: "#474747",
                  marginLeft: "15px",
                }}
              >
                {" "}
                I accept the
              </div>
              <div
                style={{
                  fontSize: "13px",
                  lineHeight: "25px",
                  color: "#004A47",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                {" "}
                Terms of service
              </div>
              <div
                style={{
                  fontSize: "12px",
                  lineHeight: "25px",
                  color: "#474747",
                  marginRight: "10px",
                }}
              >
                {" "}
                and
              </div>
              <div
                style={{
                  fontSize: "13px",
                  lineHeight: "25px",
                  color: "#004A47",
                }}
              >
                {" "}
                Privacy Policy
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Button
                disabled={!privacySettingsAccepted}
                primary
                rounded
                className="w-64 h-12 mt-5 text-lg"
              >
                Sign Up
              </Button>

              {/* div that holds already have an account and sign in options */}
              <div className="flex">
                <div
                  style={{
                    height: "55px",
                    fontSize: "15px",
                    lineHeight: "48px",
                    color: "#474747",
                  }}
                >
                  {" "}
                  Already have an account?
                </div>
                <Link
                  to="/login"
                  onClick={() => {
                    dispatch(resetPasswords());
                  }}
                  style={{
                    height: "55px",
                    fontSize: "15px",
                    lineHeight: "48px",
                    color: "#004A47",
                    marginLeft: "7px",
                  }}
                >
                  {" "}
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
