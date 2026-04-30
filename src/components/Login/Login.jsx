import { useContext, useEffect, useState } from "react";
import LoginContext from "../../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const adminEmail = "fahadalisyed543@gmail.com"
  const adminName = "Syed Fahad Ali"
  const adminPassword = "fahad12345"
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { values, setValues } = useContext(LoginContext)
  const navigate = useNavigate()
  
  useEffect(() => {
    setValues([...values, {adminEmail, adminName, adminPassword}])
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === adminEmail && password === adminPassword) {
      navigate("/admin");
      return;
    }

    const existingUser = values.find(user => user.email === email && user.password === password)

    if (existingUser) {
      navigate("/userpage");
    } else {
      alert("Invalid email or user not found!");
    }
  };

  return (
    <div className="font-inter">
      <section className="flex justify-center relative">
        <img
          src="https://pagedone.io/asset/uploads/1702362010.png"
          alt="gradient background image"
          className="w-full h-full object-cover fixed"
        />
        <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">
          <div className="rounded-2xl bg-white shadow-xl">
            <form onSubmit={handleSubmit} className="lg:p-11 p-7 mx-auto">
              <div className="mb-11">
                <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
                  Welcome Back
                </h1>
                <p className="text-gray-500 text-center text-base font-medium leading-6">
                  Let’s get started with your 30 days free trail
                </p>
              </div>
              <input
                type="email"
                className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <input
                type="text"
                className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <Link to={"/forgotpassword"} className="flex justify-end mb-6">
                <span className="text-indigo-600 text-right text-base font-normal leading-6">
                  Forgot Password?
                </span>
              </Link>
              <button
                type="submit"
                className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm mb-11"
              >
                Login
              </button>
              <Link
                to={"/signup"}
                className="flex justify-center text-gray-900 text-base font-medium leading-6"
              >
                {" "}
                Don’t have an account?{" "}
                <span className="text-indigo-600 font-semibold pl-3">
                  {" "}
                  Sign Up
                </span>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
