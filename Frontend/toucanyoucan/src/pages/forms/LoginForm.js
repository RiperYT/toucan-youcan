import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/shared/Button";
import Field from "../../components/forms/Field";
import {
  changeEmail,
  changePassword,
  resetForm,
  resetPasswords,
  signIn,
  useSignInMutation,
  hashPassword,
} from "../../store";
import { Link, useNavigate } from "react-router-dom";
/*
TODO: ADD VALIDATION
ADD HTTP REQUEST TO THE SERVER
DISABLE EVERYTHING WHEN LOADING
*/

const LoginForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, password, hashedPassword } = useSelector(({ form }) => form);

  const [signUserIn, results] = useSignInMutation();

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
    // navigate("/");
  };

  if (hashedPassword) {
    console.log(hashedPassword);
    signUserIn({ email, hashedPassword });
    dispatch(resetForm());
  }

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
        className="border-4 border-primary rounded-2xl p-4 shadow-2xl space-y-10"
        style={{
          width: "458px",
          height: "515px",
          boxShadow: "0px 0px 66px 6px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Sign In div */}
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
          <h1>Sign In</h1>
        </div>
        {/* div that creates space between fields and buttons */}
        <div className="flex flex-col justify-center space-y-5 font-semibold">
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
                  className="text-center w-full h-12 max-h-full mx-10 my-5 font-semibold"
                  placeholder="password"
                />
              </div>
            </div>
            {/* div that holds buttons and so on */}
            <div className="flex flex-col items-center">
              <Button primary rounded className="w-64 h-12 mt-5 text-lg transition-all hover:bg-accent">
                Sign In
              </Button>
              <Button
                primary
                outline
                rounded
                className="w-64 h-12 mt-5 text-lg transition-all hover:bg-accent hover:text-white"
              >
                Forgot password
              </Button>
              {/* div that holds don't have an account and sign up options */}
              <div className="flex">
                <div
                  style={{
                    height: "55px",
                    fontSize: "15px",
                    lineHeight: "48px",
                    color: "#474747",
                    marginRight: "9px",
                  }}
                >
                  Don't have an account?
                </div>
                <Link
                  to="/signup"
                  onClick={() => {
                    dispatch(resetPasswords());
                  }}
                  className="text-primary"
                  style={{
                    height: "55px",
                    fontSize: "15px",
                    lineHeight: "48px",
                  }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
