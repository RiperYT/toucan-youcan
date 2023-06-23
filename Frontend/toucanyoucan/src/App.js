import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/forms/LoginForm";
import SignUp from "./pages/forms/SignUp";
import CreateCourseForm from "./pages/forms/CreateCourseForm";
import ProfileForm from "./pages/forms/ProfileForm";
import MainPage from "./pages/schedule/MainPage";

const App = () => {
    return (
      <div className="bg-background-primary">
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/createcourse" element={<CreateCourseForm />} />
              <Route path="/profile" element={<ProfileForm />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  };
  
  export default App;