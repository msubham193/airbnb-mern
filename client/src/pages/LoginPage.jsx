import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Loading from "../Loading";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleLoginSubmit = async (ev) => {
    ev.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post("/login", { email, password });
      setLoading(false);
      setUser(data);
      setRedirect(true);
      alert("Login successful");
    } catch (e) {
      setLoading(false);
      console.log(e);
      alert("Login failed");
    }
  };
  // if (loading) {
  //   return <Loading />;
  // }

  // function checkInput() {
  //   if (email.length == 0) {
  //     alert("Please enter your email");
  //     return;
  //   } else if (password.length == 0) {
  //     alert("Please enter your password");
  //     return;
  //   } else {
  //     handleLoginSubmit();
  //   }
  // }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow  flex items-center justify-around">
      <div className="mb-64">
        <h1 className="md:text-4xl text-lg text-center mb-4">
          Welcome back ! Login to continue
        </h1>
        <form
          className="md:max-w-md p-3 md:p-0 mx-auto"
          onSubmit={handleLoginSubmit}
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary" disabled={loading}>
            {loading ? "Logging in......" : "Login"}
          </button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{" "}
            <Link className="underline text-black" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
