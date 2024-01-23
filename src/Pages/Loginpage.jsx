import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handlelogin = () => {
    Navigate("/login");
  };

  const handlesignup = () => {
    Navigate("/signup");
  };

  const handleLogin = async () => {
    setLoading(true);

    const payload = {
      email,
      password,
    };

    try {
      const res = await fetch(
        `https://sanjaikannan-stackoverflow-clone.onrender.com/user/login`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);

        if (data.result && data.result._id) {
          localStorage.setItem("userId", data.result._id);
          Navigate("/homepage");
        } else {
          setErr("User information is missing or invalid!");
        }
      } else {
        setErr("Invalid credentials. Please check your email and password!");
      }
    } catch (error) {
      setErr("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="bg-white-800 p-4 text-grey flex justify-between items-center">
        <div className="text-xl text-grey font-semibold">
          <span className=" text-amber-500 font-bold">Stack </span>
          OverFlow
        </div>
        <div className="flex items-center space-x-4">
          <a
            onClick={handlelogin}
            className="text-white font-medium px-4 py-2  bg-amber-500"
          >
            Login
          </a>
          <a
            onClick={handlesignup}
            className="text-white font-medium px-4 py-2  bg-amber-500"
          >
            Signup
          </a>
        </div>
      </nav>

      <div className="bg-amber-100 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-4 space-y-4">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              <span className=" text-amber-500 font-bold">Stack </span>
              OverFlow
            </h1>
            <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center ">
              Login
            </h2>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border "
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border "
            />

            <button
              className="w-full font-medium border border-amber-500 bg-white text-amber-500 py-2 relative"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading && <img alt="" />}
              {!loading ? "Login" : "Logging In..."}
            </button>
            {err && (
              <p color="error" sx={{ mt: 2 }}>
                {err}
              </p>
            )}
            <p className="text-gray-600 mt-2">
              Don't have an account?
              <a onClick={handlesignup} className="text-amber-500">
                Signup here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
