import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import LoginContextProvider from "./context/LoginContextProvider";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import ForgotPassowrd from "./components/ForgotPassword/ForgotPassowrd";
import UserPage from "./components/UserPage/UserPage";

function App() {
  return (
    <LoginContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassowrd />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </LoginContextProvider>
  );
}

export default App;